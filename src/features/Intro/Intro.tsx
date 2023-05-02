import { FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Button, Logo } from 'components'

import { SiteData } from 'shared/types/site'
import IconDown from '/public/assets/icons/iconDown.png'

import { LoginRegistrationModal } from 'features/LoginRegistrationModal/LoginRegistrationModal'

import s from './intro.module.scss'

export const Intro: FC<SiteData> = ({ logo, desc, title }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={s.intro}>
      <div className={s.backgroundMask} />
      <div className={s.container}>
        {logo && title ? (
          <>
            <Logo logoImage={logo} logoText={title} classNames={s.logo} />
          </>
        ) : (
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
        )}
        <Button className={s.introBtn}>
          Registrera dig
        </Button>
        <LoginRegistrationModal
          isOpen={isOpen}
          onClose={() => setIsOpen(true)}
          setIsOpenPasswordRecovery={() => setIsOpen(true)}
          openPopup={() => setIsOpen(true)}
        />
        <p className={s.text}>{desc ? desc : 'Error text not found'}</p>

        <Link href={'#info'} scroll={false}>
          <div className={s.iconContainer}>
            <Image className={s.iconDown} src={IconDown} alt='icon down' />
          </div>
        </Link>
      </div>
    </div>
  )
}
