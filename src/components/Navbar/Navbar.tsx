import { FC, ReactElement, useState } from 'react'

import { useAppDispatch } from 'shared/hooks/redux'

import { LoginRegistrationModal } from 'features'
import { NavProfile } from './NavProfile/NavProfile'
import { NavMobile } from './NavMobile/NavMobile'
import { NavMain } from './NavMain/NavMain'

import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'
import { cookies } from 'shared/utils/Cookies'
import { useRouter } from 'next/router'
import { logoutAuth } from 'shared/api/routes/user'
import { logoutUserRequested } from 'store/slices/userSlice'

interface Variant {
  variant: boolean
}

export const Navbar: FC<Variant> = ({ variant }) => {
  const dispatch = useAppDispatch()
  const { push } = useRouter()
  const { width } = useWindowDimensions()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const token = cookies.get('token')

  const [activeLink, setActiveLink] = useState<string>('Buy Stocks')

  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

  const logoutUser = async () => {
    try {
      await logoutAuth()

      dispatch(logoutUserRequested())
    } catch (error) {
      console.log(error)
    }
  }

  const handleProfile = () => {
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
      />

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
