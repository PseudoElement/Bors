import { FC, useState } from 'react'

import cn from 'classnames'
import s from './input.module.scss'
import { Button } from 'components/Button'
import iconEye from '../../../public/assets/icons/eyeOpen.png'
import Image from 'next/image'

interface InputProps {
  onClick?: () => void
  onChange: (value: string) => void
  value: string
  type?: string
  classname?: string
  placeholder?: string
  withButton?: string
  withIcon?: boolean
}

export const Input: FC<InputProps> = ({
  onClick,
  onChange,
  value,
  type = 'text',
  classname,
  placeholder,
  withButton = '',
  withIcon = false,
}) => {
  const [checked, setChecked] = useState<boolean>(false)
  return (
    <div className={cn(s.wrapper, classname, { [s.withButton]: withButton })}>
      <input
        className={cn(s.input, { [s.inputWithBtn]: withButton })}
        type={checked ? 'password' : type}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        value={value}
      />
      {withButton ? <Button onClick={onClick} children={withButton} /> : null}
      {withIcon ? (
        <div
          onClick={() => setChecked(!checked)}
          className={cn(s.secretIcon, { [s.checked]: checked })}
        />
      ) : null}
    </div>
  )
}
