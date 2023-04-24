import { FC } from 'react'
import cn from 'classnames'

import { FilterMeta } from 'shared/types/stocks'

import s from './dropMenuOption.module.scss'

interface DropMenuItemProps {
  setMenuState: () => void
  menuValue: FilterMeta
  onMenuClose: () => void
  isSelected: boolean
}

export const DropMenuOption: FC<DropMenuItemProps> = ({
  setMenuState,
  menuValue,
  onMenuClose,
  isSelected = false,
}) => {
  const handleClick = () => {
    onMenuClose()
    setMenuState()
  }

  return (
    <div
      className={cn(s.optionContainer, { [s.selected]: isSelected })}
      onClick={handleClick}
    >
      {menuValue.label}
    </div>
  )
}
