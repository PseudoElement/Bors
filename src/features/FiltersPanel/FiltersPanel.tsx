import { FC, useEffect, useState } from 'react'
import { FilterKeys } from 'shared/types/filterPanel'
import s from './filtersPanel.module.scss'

interface FilterItemProps {
  title: string
  onChange: (value: boolean) => void
}

const FilterItem: FC<FilterItemProps> = ({ title, onChange }) => {
  const [active, setActive] = useState<boolean>(false)

  useEffect(() => {
    onChange(active)
  }, [active])

  return (
    <div className={s.filterItem} onClick={() => setActive(!active)}>
      {title}
      <span className={s.arrow} />
    </div>
  )
}

interface FiltersPanelProps {
  onChange: (value: FilterKeys) => void
  defaultValue: FilterKeys
}

export const FiltersPanel: FC<FiltersPanelProps> = ({
  onChange,
  defaultValue,
}) => {
  const [valueFilters, setValueFilters] = useState<FilterKeys>(defaultValue)
  useEffect(() => {
    onChange(valueFilters)
  }, [valueFilters])
  return (
    <div className={s.filters}>
      <FilterItem
        onChange={value => setValueFilters({ ...valueFilters, price: value })}
        title='By price'
      />
      <FilterItem
        onChange={value =>
          setValueFilters({ ...valueFilters, popularity: value })
        }
        title='By popularuty'
      />
      <FilterItem
        onChange={value =>
          setValueFilters({ ...valueFilters, lineBusiness: value })
        }
        title='By line of business'
      />
    </div>
  )
}
