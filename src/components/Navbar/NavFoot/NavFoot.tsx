import { FC } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

import { main_nav_links, main_socialLinks } from 'shared/mocks/navBar'

import AccountImg from '/public/assets/icons/accountImg.svg'
import { BurgerMenuButton } from 'components'
import s from './navFoot.module.scss'

import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'

export interface NavFootProps {
  classNames?: string
  menuOpen: () => void
 socialLink?: boolean
}

export const NavFoot: FC<NavFootProps> = ({
  classNames,
  menuOpen,
  socialLink
}) => {
  const { width } = useWindowDimensions()
  return (
    <nav className={cn(classNames, s.navFoot) }>

      {width > 900 ? (
        <div className={cn(classNames, s.navFootSectionFlex) }>

          <ul className={s.links}>
            {main_nav_links.map(item => (
              <li key={item.label} className={s.link}>
                <Link href={item.link} scroll={false}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className={cn(classNames, s.navFootSectionItems)}>
            {socialLink ? main_socialLinks.map(item =>(
              <Link href={item.href} key={item.title}>
                <div className={s.socialLink} >
                  <span>{item.title}</span>
                  <div className={s.circle}>
                    <Image
                      src={item.src}
                      width={17}
                      height={17}
                      alt={item.imgAlt}
                    />
                  </div>
              </div>
            </Link>
            )) : ""}
          </div>

          <button onClick={menuOpen} className={s.logInButton}>
            <div className={s.btnImg}>
              <AccountImg />
            </div>
            <p>Logga In</p>
          </button>
        </div>
      ) : (
        <div  className={cn(classNames, s.navFootSectionItems)}>
          <button onClick={menuOpen} className={s.logInButton}>
            <div className={s.btnImg}>
              <AccountImg />
            </div>
            <p>Logga In</p>
          </button>
          <div className={s.line} />
          <div className={cn(classNames, s.navFootSectionItems)}>
         {socialLink ? main_socialLinks.map(item =>(
            <Link href={item.href} key={item.title}>
              <div className={s.socialLink} >
                <span>{item.title}</span>
                <div className={s.circle}>
                  <Image
                    src={item.src}
                    width={17}
                    height={17}
                    alt={item.imgAlt}
                  />
                </div>

              </div>
            </Link>   
            )) : ""}
            </div>
        </div>
      )}      
  </nav>
  )
}
