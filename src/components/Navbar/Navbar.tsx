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

import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'
import { cookies } from 'shared/utils/Cookies'
import { PopupAfterSubmitStatus } from 'shared/enums'

interface Variant {
  variant: boolean
  socialLink?: boolean
}

export const Navbar: FC<Variant> = ({ variant, socialLink }) => {
  const { push } = useRouter()
  const { width } = useWindowDimensions()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isBurgerOpen, setBurgerIsOpen] = useState<boolean>(false)
  const [isOpenPasswordRecovery, setIsOpenPasswordRecovery] =
    useState<boolean>(false)
  const [popupStatus, setPopupStatus] = useState<PopupAfterSubmitStatus>(
    PopupAfterSubmitStatus.CLOSED
  )

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
        openPopup={() => setPopupStatus(PopupAfterSubmitStatus.SUCCESS)}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
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

      <Popup
        isOpen={isOpenPasswordRecovery}
        onClose={() => setIsOpenPasswordRecovery(false)}
      >
        <PasswordRecovery />
      </Popup>

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
