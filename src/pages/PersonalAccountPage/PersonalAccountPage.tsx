import { FC } from 'react'
import cn from 'classnames'

import { StocksCard } from 'components'

import { FiltersPanel } from 'features'

import { mock__stock_card } from 'shared/mocks/mock_stockCard'

import s from './personalAccountPage.module.scss'

export const PersonalAccountPage: FC = () => {
    const arr = new Array(24).fill('')

    return (
        <div className={cn(s.page, s.container)}>
            <h1 className={s.title}>Buy Stocks</h1>
            <p className={s.pageDescription}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                sint. Velit officia consequat duis enim velit mollit.{' '}
            </p>
            <div className={s.filterWrapper}>
                <FiltersPanel
                    defaultValue={{ price: true, lineBusiness: true, popularity: true }}
                    onChange={() => { }}
                />
                <div className={s.grid}>
                    {arr.map((item, index) =>
                        index % 3 === 0 ? (
                            <StocksCard key={index} {...mock__stock_card[2]} />
                        ) : index % 2 === 0 ? (
                            <StocksCard key={index} {...mock__stock_card[0]} />
                        ) : <StocksCard key={index} {...mock__stock_card[1]} />
                    )}
                </div>
            </div>
        </div>
    )
}
