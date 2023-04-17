import { NextPage } from 'next'
import { GetServerSidePropsContext } from 'next/types'
import { UserAccount } from 'features'
import Head from 'next/head'

const UserAccountPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>MITT KONTO</title>
        <meta
          name='description'
          content='Fyll i information om dig och ditt AF kontonummer hos Avanza eller Nordnet för att bli tilldelad aktier gratis.'
        />
      </Head>

      <UserAccount />
    </>
  )
}

export default UserAccountPage

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
