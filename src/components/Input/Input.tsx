import { FC, useState } from 'react'

import cn from 'classnames'
import s from './input.module.scss'
import { Button } from 'components/Button'
import iconEye from '../../../public/assets/icons/eyeOpen.png'
import Image from 'next/image'

interface InputProps {
  onClick?: () => void
  onChange: (value: string) => void
  value: string | null
  type?: string
  classname?: string
  classNameBtn?: string
  placeholder?: string
  withButton?: string
  withIcon?: boolean
  buttonType?: 'submit' | 'button'
}

export const Input: FC<InputProps> = ({
  onClick,
  onChange,
  value,
  type = 'text',
  classname,
  placeholder,
  classNameBtn,
  withButton = '',
  withIcon = false,
  buttonType = 'button',
}) => {
  const [checked, setChecked] = useState<boolean>(false)
  return (
    <div className={cn(s.wrapper, classname, { [s.withButton]: withButton })}>
      <input
        className={cn(s.input, { [s.inputWithBtn]: withButton })}
        type={checked ? 'password' : type}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        value={value ? value : ''}
      />
      {withButton ? (
        <Button className={classNameBtn} onClick={onClick} type={buttonType}>
          {withButton}
        </Button>
      ) : null}
      {withIcon ? (
        <div
          onClick={() => setChecked(prev => !prev)}
          className={cn(s.secretIcon, { [s.checked]: checked })}
        />
      ) : null}
    </div>
  )
}
