import { NextPage } from 'next'

import { BuyStock } from 'features'
import { GetServerSidePropsContext } from 'next/types'
import Head from 'next/head'

const BuyStockPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>KÖP AKTIER</title>
        <meta
          name='description'
          content='Nu kan du handla aktier med dina demokronor och skapa din drömportfölj.'
        />
      </Head>

      <BuyStock />
    </>
  )
}

export default BuyStockPage

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
