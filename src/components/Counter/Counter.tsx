import { FC, MouseEventHandler } from 'react'

import cn from 'classnames'

import s from './counter.module.scss'

interface CounterProps {
  min?: number
  max?: number
  value: number
  onChange: (value: number) => void
}

export const Counter: FC<CounterProps> = ({
  min = 0,
  max,
  value,
  onChange,
}) => {
  const isValid = (value: number): boolean => {
    if (max !== undefined && value > max) return false
    if (value < min) return false
    return true
  }

  // const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
  //     const newValue: number = +e.target.value.replace(/\D/, '')
  //     if (isValid(newValue)) onChange(newValue)
  // }

  const increment: MouseEventHandler<HTMLButtonElement> = e => {
    const newValue: number = value + 1
    if (isValid(newValue)) onChange(newValue)
  }

  const decrement: MouseEventHandler<HTMLButtonElement> = e => {
    const newValue: number = value - 1
    if (isValid(newValue)) onChange(newValue)
  }

  return (
    <div onClick={e => e.stopPropagation()} className={s.wrapper}>
      <button className={s.btn} disabled={value === min} onClick={decrement}>
        ‒
      </button>
      <div className={s.value}>{value}</div>
      <button
        className={cn(s.btn, s.btn_right)}
        disabled={value === max}
        onClick={increment}
      >
        ＋
      </button>
    </div>
  )
}
