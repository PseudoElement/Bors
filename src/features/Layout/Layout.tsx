import { FC, ReactNode } from 'react'
import { useRouter } from 'next/router'
import { Footer, Header } from 'features'


type PropsLayout = {
  children: string | ReactNode
}

export const Layout: FC<PropsLayout> = ({ children }) => {
  const router = useRouter()
  const reg = /\#\w+/;

  return (
    <>
      <Header variant={router.asPath === '/' || reg.test(router.asPath) ? 'unauthorised' : 'authorised'} />
      {children}
      <Footer />
    </>
  )
}
