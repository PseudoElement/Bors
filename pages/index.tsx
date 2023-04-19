import { NextPage } from 'next'
import Head from 'next/head'

import { MainPage } from 'pages'

import { getInfo, getLeaders, getSponsors } from 'pages/MainPage/helpers'
import { MainPageProps } from 'pages/MainPage/MainPage'

const Main: NextPage<MainPageProps> = props => {
  return (
    <>
      <Head>
        <title>HEM</title>
        <meta
          name='description'
          content='Skapa ett konto kostnadsfritt på mindre än en minut för att delta i BörsJaktens aktietävling om tusentals kronor.'
        />
      </Head>

      <MainPage {...props} />
    </>
  )
}

export async function getServerSideProps() {
  const date = new Date()

  const sponsorsCards = await getSponsors()
  const infoCards = await getInfo()
  const leadersList = await getLeaders(date)

  return {
    props: { infoCards, sponsorsCards, leadersList },
  }
}

export default Main
