import { FC } from 'react'
import s from './Button.module.scss'

interface ButtonProps {
  title: string
  onClick: () => void
};
export const Button: FC<ButtonProps> = ({ title, onClick }) => {
  return <div className={s.button} onClick={onClick}>{title}</div>
}
