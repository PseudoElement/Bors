import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { Layout } from 'features'
import { Notify } from 'components'

import { store } from 'store'
import { persistor } from 'store'
import { AuthCheck } from '../src/shared/hoc/AuthCheck'

import '../src/styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <AuthCheck>
            <Component {...pageProps} />
            <Notify />
          </AuthCheck>
        </Layout>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
