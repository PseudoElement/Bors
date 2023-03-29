import { FC } from 'react'
import cn from 'classnames'

import { StocksCard } from 'components'

import { FiltersPanel } from 'features'

import { mock__stock_card } from 'shared/mocks/mock_stockCard'

import s from './buyStocksPage.module.scss'

export const BuyStocksPage: FC = () => {

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
                    {mock__stock_card.map(item => <StocksCard key={item.id} {...item} />)}
                </div>
            </div>
        </div>
    )
}
