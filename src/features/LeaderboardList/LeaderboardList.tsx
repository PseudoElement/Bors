import { FC } from 'react'

import { LeaderboardItems, Slider } from 'components'

import { PropsLeaderboardList } from 'shared/types/leaderboard'

import s from './LeaderboardList.module.scss'

export const LeaderboardList: FC<PropsLeaderboardList> = ({ boards }) => {
  return (
    <div id={'leaderboard'}>
      <h2 className={s.leaderboardListTitle}>
        TOPP <br className={s.leaderboardBr} /> <span>LISTAN</span>
      </h2>

      <h2 className={s.leaderboardTitle}>Mars 17, 2023</h2>

      <Slider slidesPerView={2} spaceBetween={90} centeredSlides={true}>
        {boards.map(board => (
          <div className={s.loaderBoard} key={board.id}>
            <div className={s.leaderboardList}>
              <div className={s.leaderboardWrapper}>
                <div className={s.leaderboardInfo}>
                  <div>
                    <span className={s.leaderboardName}>Namn</span>
                  </div>
                  <div className={s.leaderboardEntirety}>
                    <div>
                      <span className={s.leaderboardPos}>Avkastning</span>
                    </div>
                    <div>
                      <span className={s.leaderboardYie}>Avkastning</span>
                    </div>
                    <div>
                      <span className={s.leaderboardInc}>Inkomstbelopp</span>
                    </div>
                  </div>
                </div>
                {boards.map(board => (
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
