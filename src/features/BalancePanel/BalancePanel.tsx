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
      <Balance count={user?.balance} currency={'SEK'} title={'Saldo'} />

      <div>
        <Balance count={user?.balance} currency={'SEK'} title={'Avkastning'} />
      </div>

      <div>
          <Balance count={user?.balance} currency={'bbb'} title={'Rangordning'} />
      </div>
    </div>
  )
}
