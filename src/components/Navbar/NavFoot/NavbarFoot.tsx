import { FC, useState } from 'react'
import { useRouter } from 'next/router'

import {
  LoginRegistrationModal,
  PasswordRecovery,
  PopupAfterSubmit,
} from 'features'
import { Popup, BurgerMenu } from 'components'
import { NavFoot } from './NavFoot'

import { cookies } from 'shared/utils/Cookies'
import { PopupAfterSubmitStatus } from 'shared/enums'

interface Variant {
  variant: boolean
  socialLink: boolean
}

export const NavbarFoot: FC<Variant> = ({ variant, socialLink }) => {
  const { push } = useRouter()
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
        status={popupStatus}
        type='registration'
        onClose={() => setPopupStatus(PopupAfterSubmitStatus.CLOSED)}
      />

      <BurgerMenu
        isOpen={isBurgerOpen}
        onClose={() => setBurgerIsOpen(false)}
      />

      <PasswordRecovery
        isOpenPasswordRecovery={isOpenPasswordRecovery}
        setIsOpenPasswordRecovery={() => setIsOpenPasswordRecovery(false)}
      />

      <NavFoot menuOpen={handleProfile} socialLink={socialLink} />
    </>
  )
}
