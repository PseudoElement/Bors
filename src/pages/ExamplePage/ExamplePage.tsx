import { FC } from 'react'
import { Wrapper } from 'components'

import s from './examplePage.module.scss'

export const ExamplePage: FC = () => {
  return (
    <div className={s.examplePage}>
      <Wrapper text={'название'}>
        <div>компонент</div>
      </Wrapper>
    </div>
  )
}
