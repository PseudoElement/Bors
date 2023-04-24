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
}

export const DropMenu: FC<DropMenuProps> = ({
  defaultValues,
  onChange,
  data,
  className,
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
    <div className={s.wrap}>
      <div
        className={cn(s.dropMenu, className)}
        onClick={e => e.stopPropagation()}
      >
        <div className={cn(s.select)} onClick={handleOpenClose}>
          {value === data[0] ? (
            <>
              {value.label}
              <div className={s.arrow}></div>
            </>
          ) : (
            <>
              <div className={s.container}>
                <div className={s.selected}>{value.label}</div>
              </div>

              <button
                className={s.resetMenuBtn}
                onClick={() => handleChange(defaultValues)}
              ></button>
            </>
          )}
        </div>

        <div className={cn(s.options, { [s.openMenu]: selectOpen })}>
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
