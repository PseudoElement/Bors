import { Dispatch, FC, SetStateAction } from 'react'
import cn from 'classnames'

import s from './dropMenuOption.module.scss'
import { DropMenuState } from 'features/DropMenu/DropMenu'

interface DropMenuItemProps {
  title: string
  setMenuState: Dispatch<SetStateAction<DropMenuState>>
  menuState: DropMenuState
  onMenuClose: () => void
}

export const DropMenuOption: FC<DropMenuItemProps> = ({
  title,
  setMenuState,
  menuState,
  onMenuClose,
}) => {

  const handleClick = () => {

    // get menuState with all filters setted to false
    const defaultMenu:DropMenuState = Object.keys(menuState).reduce(
      (a: {}, v: string) => ({
        ...a,
        [v]:  false,
      }),
      {}
    )
    // set new menuState with chosen filter
    setMenuState({...defaultMenu, [title]: true})

    // apply changes
    onMenuClose()
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
