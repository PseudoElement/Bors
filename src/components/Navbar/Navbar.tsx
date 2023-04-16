import { FC, useState } from 'react'
import { useRouter } from 'next/router'

import { LoginRegistrationModal } from 'features'
import { NavProfile } from './NavProfile/NavProfile'
import { NavMobile } from './NavMobile/NavMobile'
import { NavMain } from './NavMain/NavMain'
import { Popup } from 'components'
import { PasswordRecovery } from 'features/PasswordRecovery/PasswordRecovety'

import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'
import { cookies } from 'shared/utils/Cookies'

interface Variant {
  variant: boolean
}

export const Navbar: FC<Variant> = ({ variant }) => {
  const { push } = useRouter()
  const { width } = useWindowDimensions()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isOpenPasswordRecovery, setIsOpenPasswordRecovery] = useState<boolean>(false)

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
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        setIsOpenPasswordRecovery={setIsOpenPasswordRecovery}
      />
      <Popup isOpen={isOpenPasswordRecovery} onClose={() => setIsOpenPasswordRecovery(false)}>
        <PasswordRecovery/>
      </Popup>
      
      {!variant ? (
        width > 900 ? (
          <NavProfile />
        ) : (
          <NavMobile />
        )
      ) : (
        <NavMain menuOpen={handleProfile} />
      )}
    </>
  )
}
