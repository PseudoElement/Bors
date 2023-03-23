import { FC, ReactNode } from 'react'

import s from './button.module.scss'

interface ButtonProps {
  children: string | ReactNode
  onClick?: () => void
  className?: string
}

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  const handleClick = (): void => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <div className={s.button} onClick={handleClick}>
      <div className={s.children}>{children}</div>
    </div>
  )
}
