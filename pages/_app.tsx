import type { AppProps } from 'next/app'
import { Layout } from 'features'
import { Provider } from 'react-redux'
import { store } from 'store'
import '../src/styles/globals.scss'
import { AuthCheck } from '../src/shared/hock/AuthCheck'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <AuthCheck>
          <Component {...pageProps}/>
        </AuthCheck>
      </Layout>
    </Provider>
  )
}

export default MyApp
