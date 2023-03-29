import { FC, ReactNode } from 'react'
import { useRouter } from 'next/router'

import { Footer } from 'features/Footer/Footer'
import { Header } from 'features/Header/Header'

import s from './layout.module.scss'

type PropsLayout = {
  children: string | ReactNode
}

export const Layout: FC<PropsLayout> = ({ children }) => {
  const router = useRouter()
  const reg = /\#\w+/;

  return (
    <>
      <Header variant={router.asPath === '/' ||  reg.test(router.asPath) ? 'unauthorised' : 'authorised'} />
      {children}
      <Footer />
    </>
  )
}
