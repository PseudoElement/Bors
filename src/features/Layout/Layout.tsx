import { FC, ReactNode } from 'react'
import { useRouter } from 'next/router'
import { Footer, Header } from 'features'

type PropsLayout = {
  children: string | ReactNode
}

export const Layout: FC<PropsLayout> = ({ children }) => {
  const router = useRouter()
  const navVariant = router.pathname === '/'

  return (
    <>
      <Header variant={navVariant} />
      {children}
      {navVariant && <Footer />}
    </>
  )
}
