import { FC } from 'react'
import Image from 'next/image'

import { PropsLeaderboard } from 'shared/types/leaderboard'

import s from './leaderboardItems.module.scss'

export const LeaderboardItems: FC<PropsLeaderboard> = ({
  id,
  user,
  position,
  tempyield,
  amountOfIncome,
}) => {
  const { name, avatarUrl } = user

  return (
    <div className={s.leaderboardItem}>
      <div className={s.leaderboardUser}>
        <Image width={52} height={52} src={avatarUrl} alt='avatar' />
        <span className={s.leaderboardName}>{name}</span>
      </div>
      <div className={s.leaderboardCount}>
        <div className={s.leaderboardInfo}>
          <div>
            <span className={s.leaderboardPos}>Position</span>
          </div>
          <div>
            <span className={s.leaderboardYie}>Yield</span>
          </div>
          <div>
            <span className={s.leaderboardInc}>Amount of income</span>
          </div>
        </div>
        <div>
          <div>
            <span className={s.leaderboardPosition}>{position}</span>
          </div>
          <div className={s.leaderboardData}>
            <div>
              <span className={s.leaderboardYield}>{tempyield}%</span>
            </div>
            <div>
              <span className={s.leaderboardAmountOfIncome}>
                {amountOfIncome} SEK
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
