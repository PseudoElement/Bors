import { NextPage } from 'next'
import { MainPage } from 'pages'
import {
  getInfoCards,
  getLeadersInfo,
  getSponsorsInfo,
} from '../src/shared/api/routes/main'
import Head from 'next/head'

const Main: NextPage = (props: any) => {
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
  let date = new Date().getDate

  const dataSponsors = await getSponsorsInfo()
  const sponsorsCards = await dataSponsors.data.data

  const dataInfo = await getInfoCards()
  const infoCards = await dataInfo.data.data

  const dataLeadersInfo = await getLeadersInfo(date.toString())
  const leadersList = await dataLeadersInfo.data.data

  return {
    props: { infoCards, sponsorsCards, leadersList },
  }
}

export default Main
