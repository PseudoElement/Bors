import { FC, useState } from 'react'
import { useRouter } from 'next/router'

import {
  LoginRegistrationModal,
  PasswordRecovery,
  PopupAfterSubmit,
} from 'features'
import { Popup, BurgerMenu } from 'components'
import { NavProfile } from './NavProfile/NavProfile'
import { NavMobile } from './NavMobile/NavMobile'
import { NavMain } from './NavMain/NavMain'

import { cookies } from 'shared/utils/Cookies'
import { PopupAfterSubmitStatus } from 'shared/enums'

interface Variant {
  variant: boolean
  socialLink?: boolean
}

export const Navbar: FC<Variant> = ({ variant }) => {
  const { push } = useRouter()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isBurgerOpen, setBurgerIsOpen] = useState<boolean>(false)
  const [active, setActive] = useState<string | null>('login')
  const [isActive, setIsActive] = useState(false)
  const [isOpenPasswordRecovery, setIsOpenPasswordRecovery] =
    useState<boolean>(false)
  const [popupStatus, setPopupStatus] = useState<PopupAfterSubmitStatus>(
    PopupAfterSubmitStatus.CLOSED
  )

  const onClickActive = () => {
    setIsOpen(true)
    setActive('login')
  }

  const isActiveClick = () => {
    setActive(isActive ? 'registration' : 'login')

    setIsActive(!isActive)
  }

  const handleProfile = () => {
    const token = cookies.get('token')

    if (token) {
      push('/profile/account')
      return
    }
    setIsOpen(true)
  }

  return (
    <>
      <LoginRegistrationModal
        isActiveDialog={active}
        openPopup={onClickActive}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        setIsActiveDialog={isActiveClick}
        setIsOpenPasswordRecovery={setIsOpenPasswordRecovery}
      />
      <PopupAfterSubmit
        type='registration'
        onClose={() => setPopupStatus(PopupAfterSubmitStatus.CLOSED)}
        status={popupStatus}
      />

      <BurgerMenu
        isOpen={isBurgerOpen}
        onClose={() => setBurgerIsOpen(false)}
      />

      <PasswordRecovery
        isOpenPasswordRecovery={isOpenPasswordRecovery}
        setIsOpenPasswordRecovery={() => setIsOpenPasswordRecovery(false)}
      />

      {!variant ? (
        <>
          <NavProfile />
          <NavMobile />
        </>
      ) : (
        <NavMain
          menuOpen={handleProfile}
          burgerMenuOpen={() => setBurgerIsOpen(prevState => !prevState)}
          isBurgerOpen={isBurgerOpen}
        />
      )}
    </>
  )
}
