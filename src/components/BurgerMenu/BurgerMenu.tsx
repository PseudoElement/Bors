import { FC } from 'react'
import cn from 'classnames'
import Link from 'next/link'

import { Popup } from 'components'

import { main_nav_links } from 'shared/mocks/navBar'

import s from './burgerMenu.module.scss'

export interface BurgerMenuProps {
  classNames?: string
  isOpen: boolean
  onClose: () => void
}

export const BurgerMenu: FC<BurgerMenuProps> = ({
  classNames,
  isOpen,
  onClose,
}) => {
  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      isClosable={true}
      wrapperClassName={s.burgerPopup}
      className={s.burgerPopupOverlay}
    >
      <ul className={cn(s.burgerMenu, classNames)}>
        {main_nav_links.map(item => (
          <li key={item.label} className={s.link}>
            <Link href={item.link} scroll={false}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </Popup>
  )
}
