import { FC, useContext } from 'react'

import { BuyStock, MyStocks, UserAccount } from 'features'

import { TabContext } from 'context/TabProvider'

import s from './profile.module.scss'

export const ProfilePage: FC = () => {

    const { activeTab } = useContext(TabContext)

    return (
        <div className={s.profile}>
            {
                activeTab === 'Buy Stocks' && <BuyStock />
            }
            {
                activeTab === 'Personal Account' && <UserAccount />
            }
            {
                activeTab === 'My Stocks' && <MyStocks />
            }
        </div>
    )
}
