import { FC } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

import { LoginButtonText } from 'components'

import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'
import { main_nav_links, main_socialLinks } from 'shared/mocks/navBar'
import AccountImg from '/public/assets/icons/accountImg.svg'

import s from './navFoot.module.scss'

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
             <button onClick={menuOpen} className={s.logInButton}>
                <div className={s.btnImg}>
                  <AccountImg />
                </div>
                <LoginButtonText />
            </button>
          </div>  
                 
        </div>
      ) : (
        <div  className={cn(classNames, s.navFootSectionItems)}>
          <button onClick={menuOpen} className={s.logInButton}>
            <div className={s.btnImg}>
              <AccountImg />
            </div>
            <LoginButtonText />
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
