import { NextPage } from 'next'
import { MainPage } from 'pages'
import {
  getInfoCards,
  getLeadersInfo,
  getSponsorsInfo,
} from '../src/shared/api/routes/main'
import Head from 'next/head'
import {
  dateOneMonthBefore,
  formatDate,
} from '../src/shared/helpers/dateFormatters'
import {LeaderList} from "../src/shared/types/leaderboard";

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
const getSponsors = async () => {
  try {
    const { data } = await getSponsorsInfo()
    if (data.status === 'success') {
      return data.data
    }
    throw new Error()
  } catch (e) {
    console.error(e)
  }
}

const getInfo = async () => {
  try {
    const { data } = await getInfoCards()
    if (data.status === 'success') {
      return data.data
    }
    throw new Error()
  } catch (e) {
    console.error(e)
  }
}

export const getLeaders = async (date: Date) => {
  const dataArray: LeaderList[] = []

  try {
    for (let i = 0; i < 3; i++) {
      const { data } = await getLeadersInfo(
        formatDate({
          date: dateOneMonthBefore(date, -i),
        })
      )
      if (data.status === 'success') {
        dataArray.push({
          date: formatDate({date, variant: 'MMMM dd, yyyy'}),

          array: data.data,
        })
      }
    }
    if (dataArray.length) {
      return dataArray
    }
    throw new Error()
  } catch (e) {
    console.error(e)
  }
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
