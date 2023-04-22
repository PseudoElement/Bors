import { FC } from 'react'

import s from './tag.module.scss'

interface TagProps {
  name: string
}
export const Tag: FC<TagProps> = ({ name }) => {
  return <div className={s.tag}>{name}</div>
}
