import { FC, ReactNode } from 'react'
import { useRouter } from 'next/router'
import { Footer } from 'features/Footer/Footer'
import { Header } from 'features/Header/Header'
import { TabProvider } from 'context/TabProvider'

import s from './layout.module.scss'

type PropsLayout = {
  children: string | ReactNode
}

export const Layout: FC<PropsLayout> = ({ children }) => {

  const { asPath } = useRouter()

  return (
    <>
      <TabProvider>
        <Header variant={asPath === '/' || '/#' ? 'authorised' : 'unauthorised'} />
        {children}
        <Footer />
      </TabProvider>
    </>
  )
}
