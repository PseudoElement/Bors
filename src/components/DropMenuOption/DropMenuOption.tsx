import { Dispatch, FC, SetStateAction } from 'react'
import cn from 'classnames'

import s from './dropMenuOption.module.scss'
import { DropMenuState } from 'features/DropMenu/DropMenu'

interface DropMenuItemProps {
  title: string
  setMenuState: Dispatch<SetStateAction<DropMenuState>>
  menuState: DropMenuState
}

export const DropMenuOption: FC<DropMenuItemProps> = ({
  title,
  setMenuState,
  menuState,
}) => {
  const handleClick = () => {
    setMenuState({ ...menuState, [title]: !menuState[title] })
  }

  return (
    <div className={s.optionContainer} onClick={handleClick}>
      <div className={menuState[title] ? cn(s.option, s.selected) : s.option}>
        {title}
      </div>
      <div
        className={menuState[title] ? cn(s.checkMark, s.checked) : s.checkMark}
      ></div>
    </div>
  )
}
