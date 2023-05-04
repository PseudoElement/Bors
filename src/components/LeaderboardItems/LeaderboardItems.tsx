import { FC } from 'react'
import Image from 'next/image'

import { PropsLeaderboard } from 'shared/types/leaderboard'

import s from './leaderboardItems.module.scss'

interface LeaderboardItemProps extends PropsLeaderboard {
  position: number
}
export const LeaderboardItems: FC<LeaderboardItemProps> = ({
  id,
  day,
  price,
  buy_price,
  user,
  percentage,
  updated_at,
  created_at,
  position,
}) => {
  return (
    <div className={s.leaderboardItem}>
      <div className={s.leaderboardUser}>
        <div className={s.userAvatar}>
          <Image width={52} height={52} src={user?.avatar} alt='avatar' />
        </div>

        <span className={s.leaderboardName}>{user?.name}</span>
      </div>

      <div className={s.leaderboardCount}>
        <div className={s.leaderboardInfo}>
          <div className={s.leaderboardValue}>
            <span className={s.leaderboardPos}>Position</span>
          </div>

          <div className={s.leaderboardValue}>
            <span className={s.leaderboardYie}>Yield</span>
          </div>

          <div className={s.leaderboardValue}>
            <span className={s.leaderboardInc}>Amount of income</span>
          </div>
        </div>

        <div className={s.leaderboardTemp}>
          <div className={s.leaderboardPosition}>{position}</div>

          <div className={s.leaderboardData}>
            <div className={s.leaderboardYield}>{percentage}%</div>
            <div className={s.leaderboardAmountOfIncome}>{buy_price} SEK</div>
          </div>
        </div>
      </div>
    </div>
  )
}
