import { FC } from 'react'

import { LeaderboardItems, Slider } from 'components'

import { PropsLeaderboardList } from 'shared/types/leaderboard'

import s from './LeaderboardList.module.scss'

export const LeaderboardList: FC<PropsLeaderboardList> = ({ boards }) => {

  return (
    <div id={'leaderboard'}>
      <h2 className={s.leaderboardListTitle}>
        Leader <br className={s.leaderboardBr} /> <span>board</span>
      </h2>
      <h2 className={s.leaderboardTitle}>March 17, 2023</h2>
      <Slider
        slidesPerView={2}
        spaceBetween={90}
        centeredSlides={true}
      >
        {boards.map((board) => (
          <div className={s.loaderBoard} key={board.id}>
            <div className={s.leaderboardList}>
              <div className={s.leaderboardWrapper}>
                <div className={s.leaderboardInfo}>
                  <div>
                    <span className={s.leaderboardName}>Name</span>
                  </div>
                  <div className={s.leaderboardEntirety}>
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
                </div>
                {boards.map((board) => (
                  <LeaderboardItems key={board.id} {...board} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
