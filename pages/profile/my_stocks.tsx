import { NextPage } from 'next'

import { MyStocks } from 'features'
import { GetServerSidePropsContext } from 'next/types'
import Head from 'next/head'

const MyStocksPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>MINA AKTIER</title>
        <meta
          name='description'
          content='Varje dag kommer vi att uppdatera aktiepriserna och presentera top 10 bästa deltagarnas portföljer i BörsJaktens aktietävling'
        />
      </Head>

      <MyStocks />
    </>
  )
}

export default MyStocksPage

export const getServerSideProps = async (props: GetServerSidePropsContext) => {
  // get token in props before redirect on page
  const token = props.req.cookies?.token

  // if token false page locked and redirect to main
  if (!token) {
    return {
      redirect: { destination: '/', permanent: false },
    }
  }

  // if token true page opened and redirect to profile page
  return {
    props: {},
  }
}
