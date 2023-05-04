import { FC, useEffect, useState } from 'react'

import { LeaderboardItems, Slider } from 'components'

import { dateOneMonthBefore } from 'shared/helpers/dateFormatters'
import { getLeaders } from 'pages/MainPage/helpers'

import { LeaderList } from 'shared/types/leaderboard'

import s from './LeaderboardList.module.scss'

interface LeaderboardListProps {
  leadersList: LeaderList[]
}

export const LeaderboardList: FC<LeaderboardListProps> = ({ leadersList }) => {
  const [leaders, setLeaders] = useState<LeaderList[]>(leadersList)
  const [date, setDate] = useState<Date>(dateOneMonthBefore(new Date(), -3))
  const [isUpdate, setIsUpdate] = useState<boolean>(false)

  const getMore = async () => {
    setIsUpdate(true)
  }

  useEffect(() => {
    const getMoreLeaders = async () => {
      const moreLeader = await getLeaders(dateOneMonthBefore(date, 0))

      setDate(dateOneMonthBefore(date, -3))
      setIsUpdate(false)
      if (moreLeader) {
        setLeaders([...leaders, ...moreLeader ])
      }
    }

    if (isUpdate) {
      getMoreLeaders()
    }
  }, [isUpdate])

  return (
    <div className={s.leaderboardSection} id={'leaderboard'}>
      <h2 className={s.leaderboardListTitle}>TOPPLISTAN</h2>

      <Slider
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={true}
        getMore={getMore}
        leaders={leaders}
      >
        {leaders?.map((leader, index) => (
          <div className={s.loaderBoard} key={index}>
            <div className={s.leaderboardList}>
              <div className={s.leaderboardWrapper}>
                <div className={s.leaderboardInfo}>
                  <div className={s.leaderboardName}>Namn</div>

                  <div className={s.leaderboardEntirety}>
                    <div className={s.leaderboardPos}>Placera</div>
                    <div className={s.leaderboardYie}>Avkastning</div>
                    <div className={s.leaderboardInc}>Inkomstbelopp</div>
                  </div>
                </div>

                {leader?.array?.map((list, index) => (
                  <LeaderboardItems
                    key={index}
                    position={index + 1}
                    {...list}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
