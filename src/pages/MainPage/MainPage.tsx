import { useEffect, useState } from 'react'
import Head from 'next/head'
import {
  FillRequest,
  Intro,
  LeaderboardList,
  Sponsors,
  InfoSection,
} from 'features'

import { getInfoCards, getSponsorsInfo } from 'shared/api/routes/main'

import { SiteData, SponsorType } from 'shared/types/site'
import { mock__leaderboard } from 'shared/mocks/mock_leaderboard'

export const MainPage = () => {
  const [infoCards, setInfoCards] = useState<SiteData | null>(null)
  const [sponsorsCards, setSponsorsCards] = useState<SponsorType[] | null>(null)

  const getInfo = async () => {
    try {
      const { data } = await getInfoCards()
      setInfoCards(data.data)
    } catch (e) {
      console.error(e)
    }
  }

  const getSponsors = async () => {
    try {
      const { data } = await getSponsorsInfo()
      setSponsorsCards(data.data)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getInfo()
    getSponsors()
  }, [])

  return (
    <>
      <Head>
        <title>HEM</title>
        <meta name="description" content="Skapa ett konto kostnadsfritt på mindre än en minut för att delta i BörsJaktens aktietävling om tusentals kronor." />
      </Head>
      <Intro {...infoCards} />
      <InfoSection {...infoCards} />
      <LeaderboardList boards={mock__leaderboard} />
      {sponsorsCards ? <Sponsors cards={sponsorsCards} /> : null}
      <FillRequest />
    </>
  )
}
