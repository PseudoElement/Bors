import { FC, useState } from 'react'
import cn from 'classnames'

import { DropMenuOption } from './DropMenuOption/DropMenuOption'

import { FilterMeta } from 'shared/types/stocks'

import s from './dropMenu.module.scss'

interface DropMenuProps {
  defaultValues: FilterMeta
  onChange: (selectedOption: FilterMeta) => void
  data: FilterMeta[]
  className?: string
  dropSide?: 'Top' | 'Bottom'
  activeColor?: 'Pink' | 'Blue'
  resetValue?: boolean
  withArrow?: 'ArrowTop' | 'ArrowBottom' | 'None'
}

export const DropMenu: FC<DropMenuProps> = ({
  defaultValues,
  onChange,
  data,
  className,
  dropSide = 'Bottom',
  activeColor = 'Pink',
  resetValue = true,
  withArrow = 'None',
}) => {
  const [value, setValue] = useState<FilterMeta>(defaultValues)
  const [selectOpen, setSelectOpen] = useState(false)

  const handleChange = (value: FilterMeta) => {
    setValue(value)
    onChange(value)
    setSelectOpen(false)
  }

  const handleOpenClose = () => {
    setSelectOpen(prevState => !prevState)
  }

  return (
    <div className={cn(s.wrap, className)}>
      <div className={s.dropMenu} onClick={e => e.stopPropagation()}>
        <div className={cn(s.select)} onClick={handleOpenClose}>
          {value === data[0] ? (
            <>
              {value.label}
              <div className={s.arrow} />
            </>
          ) : (
            <>
              <div className={s.container}>
                <div className={cn(s.selected, [s[`${activeColor}`]])}>
                  {value.label}
                </div>
              </div>

              {withArrow !== 'None' ? (
                <div
                  className={cn(s.arrow, {
                    [s[`${withArrow}`]]: !selectOpen,
                  })}
                />
              ) : null}

              {resetValue ? (
                <button
                  className={s.resetMenuBtn}
                  onClick={() => handleChange(defaultValues)}
                />
              ) : null}
            </>
          )}
        </div>

        <div
          className={cn(s.options, { [s[`openMenu${dropSide}`]]: selectOpen })}
        >
          {data.slice(1, data.length).map((item, index) => (
            <DropMenuOption
              key={index}
              menuValue={item}
              isSelected={value?.label === item.label}
              setMenuState={() => handleChange(item)}
              onMenuClose={() => setSelectOpen(false)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
