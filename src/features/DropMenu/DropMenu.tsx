import { FC, useState, useRef, MouseEvent, useEffect } from 'react'
import cn from 'classnames'

import { DropMenuOption } from 'components/DropMenuOption/DropMenuOption'

import { useClickOutside } from 'shared/hooks/useClickOutside'

import s from './dropMenu.module.scss'

interface DropMenuProps {
  defaultValue?: number
  title: string
  onChange: (selectedOption: string) => void
  data: string[]
  className?: string
}
export interface DropMenuState {
  [key: string]: boolean
}
export const DropMenu: FC<DropMenuProps> = ({
  defaultValue,
  title,
  onChange,
  data,
  className,
}) => {
  const [menuState, setMenuState] = useState<DropMenuState>(
    data.reduce(
      (a, v, i) => ({
        ...a,
        [v]: defaultValue === undefined ? false : defaultValue === i ? true : false,
      }),
      {}
    )
  )

  const [activeDropMenu, setActiveDropMenu] = useState<boolean>(false)
  const [showInMenuTitle, setShowInMenuTitle] = useState<string>('')

  const overlayRef = useRef<HTMLDivElement>(null)

  let activeFilter = Object.keys(menuState).find(item => menuState[item])

  const onMenuClose = () => {
    setActiveDropMenu(false)
    setShowInMenuTitle(activeFilter ? activeFilter : '')
    onChange(activeFilter ? activeFilter : '')
  }

  const handleMenuClick = () => {
    setActiveDropMenu(prev => !prev)
    if (activeDropMenu) {
      onMenuClose()
    }
  }

  const handleResetBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()

    setShowInMenuTitle('')
    setMenuState(data.reduce((a, v) => ({ ...a, [v]: false }), {}))
    onChange('')
  }

  useEffect(() => {
    setShowInMenuTitle(activeFilter ? activeFilter : '')
    onChange(activeFilter ? activeFilter : '')
  }, [activeFilter])

  useClickOutside(overlayRef, onMenuClose)

  return (
    <div
      className={activeDropMenu ? s.menuOverlay : s.block}
      ref={!activeDropMenu ? overlayRef : null}
    >
      <div
        className={cn(s.dropMenu, className)}
        onClick={e => e.stopPropagation()}
        ref={activeDropMenu ? overlayRef : null}
      >
        <div className={cn(s.select)} onClick={handleMenuClick}>
          {showInMenuTitle.length === 0 ? (
            <>
              {title}
              <div className={s.arrow}></div>
            </>
          ) : (
            <>
              <div className={s.container}>
                <div className={s.selected}>{showInMenuTitle}</div>
                <div className={s.mask}></div>
              </div>

              <button
                className={s.resetMenuBtn}
                onClick={handleResetBtnClick}
              ></button>
            </>
          )}
        </div>
        <div className={activeDropMenu ? cn(s.options, s.openMenu) : s.options}>
          {data.map(item => (
            <DropMenuOption
              key={item}
              title={item}
              menuState={menuState}
              setMenuState={setMenuState}
              onMenuClose={onMenuClose}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
