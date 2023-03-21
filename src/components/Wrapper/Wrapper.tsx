import s from './wrapper.module.scss'

export const Wrapper = ({
  children,
  text = 'название компонента',
}: {
  children: any
  text: string
}) => {
  return (
    <div className={s.wrapper}>
      <span className={s.title}>
        _____<span>{text}</span>______
      </span>

      <div>{children}</div>
    </div>
  )
}
