import { FC, ReactNode } from 'react'

import s from './button.module.scss'

import cn from 'classnames'

interface ButtonProps {
  children: string | ReactNode
  onClick?: () => void
  className?: string
  type?: "button" | "submit" | "reset" | undefined
}

export const Button: FC<ButtonProps> = ({ children, onClick, type = 'button', className }) => {

  const handleClick = () => onClick?.()

  return (
    <button className={cn(s.button, className)} type={type} onClick={handleClick} >
      {children}
    </button>

  )

}
