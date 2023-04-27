import { FC } from 'react'
import cn from 'classnames'

import { Balance } from 'components'

import { useAppSelector } from 'shared/hooks/redux'

import s from './balancePanel.module.scss'

export interface BalancePanelProps {
  classNames?: string
}

export const BalancePanel: FC<BalancePanelProps> = ({ classNames }) => {
  const user = useAppSelector(state => state.user.user)

  return (
    <div className={cn(s.balance, classNames)}>
      <Balance count={user?.total_balance} currency={'SEK'} title={'Saldo'} />

      <Balance
        count={user?.profitability}
        currency={'SEK'}
        title={'Avkastning'}
        profit={user?.present}
      />

      <Balance
        count={user?.diff_position}
        currency={'№'}
        currencyPosition={'left'}
        title={'Rangordning'}
        profit={user?.diff_position}
      />
    </div>
  )
}
