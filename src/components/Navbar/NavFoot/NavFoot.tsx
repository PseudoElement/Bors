import { FC } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

import { LoginButton } from 'components'

import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'
import { main_nav_links, main_socialLinks } from 'shared/mocks/navBar'

import s from './navFoot.module.scss'

export interface NavFootProps {
  classNames?: string
  menuOpen: () => void
  socialLink?: boolean
}

export const NavFoot: FC<NavFootProps> = ({
  classNames,
  menuOpen,
  socialLink,
}) => {
  const { width } = useWindowDimensions()
  return (
    <nav className={cn(classNames, s.navFoot)}>
      {width > 900 ? (
        <div className={cn(classNames, s.navFootSectionFlex)}>
          <div className={s.navFootSectionTopItems}>
            <div className={s.logoWrapper}>
              <div className={s.logoGroup}>
                <div className={s.logo}>
                  <Image layout='fill' alt='logo' src='/assets/icons/Logo.png' />
                </div>

                <div className={s.logoText}>
                  <Image
                    src='/assets/icons/Bors.svg'
                    layout='fill'
                    alt='BorsJakten'
                  />
                </div>
              </div>
            </div>
            <ul className={s.links}>
              {main_nav_links.map(item => (
                <li key={item.label} className={s.link}>
                  <Link href={item.link} scroll={false}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={s.line} />

          <div className={cn(classNames, s.navFootSectionBottomItems)}>
            {socialLink
              ? main_socialLinks.map(item => (
                  <Link href={item.href} key={item.title}>
                    <a target='_blank' rel="noopener noreferrer">
                      <div className={s.socialLink}>
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
                    </a>
                  </Link>
                ))
              : ''}
            <LoginButton btnClick={menuOpen} />
          </div>
        </div>
      ) : (
        <div className={cn(classNames, s.navFootSectionBottomItems)}>
          <div className={s.navFootSectionTopItems}>
            <div className={s.logoWrapper}>
            <div className={s.logoGroup}>
              <div className={s.logo}>
                <Image layout='fill' alt='logo' src='/assets/icons/Logo.png' />
              </div>

              <div className={s.logoText}>
                <Image
                  src='/assets/icons/Bors.svg'
                  layout='fill'
                  alt='BorsJakten'
                />
              </div>
            </div>
          </div>
          <LoginButton btnClick={menuOpen} />
        </div>

        <div className={s.line} />

        <div className={cn(classNames, s.navFootSectionBottomItems)}>
          {socialLink
            ? main_socialLinks.map(item => (
                <Link href={item.href} key={item.title}>
                  <a target='_blank' rel="noopener noreferrer">
                    <div className={s.socialLink}>
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
                  </a>
                </Link>
              ))
            : ''}
          </div>
        </div>
      )}
    </nav>
  )
}
