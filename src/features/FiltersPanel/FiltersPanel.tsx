import { FC, ReactNode, useEffect, useState } from 'react'
import { FilterKeys } from 'shared/types/filterPanel'

import { DropMenu } from 'features/DropMenu/DropMenu'

import { Button, Popup } from 'components'

import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'

import FilterIcon from '/public/assets/icons/FiltersHorizontal.svg'

import {
  mock_by_line_of_business,
  mock_by_popularity,
} from 'shared/mocks/mock_filters'

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
  children?: ReactNode
}

export const FiltersPanel: FC<FiltersPanelProps> = ({
  onChange,
  defaultValue,
  children,
}) => {
  const [valueFilters, setValueFilters] = useState<FilterKeys>(defaultValue)

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const { width } = useWindowDimensions()
  useEffect(() => {
    onChange(valueFilters)
  }, [valueFilters])
  return (
    <>
      {width <= 567 && (
        <>
          <div onClick={() => setIsOpen(true)} className={s.mobileSelect}>
          Filtrera lager <FilterIcon />
          </div>
          <Popup isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <div className={s.mobileFilterPanel}>
              <div className={s.mobileFilterTitle}>Filtrera lager</div>
              <div className={s.mobileFilters}>
                <DropMenu
                  title='Efter popularitet'
                  onChange={data => console.log('popularity ', data)}
                  data={mock_by_popularity}
                  className={s.short}
                  
                />
                <DropMenu
                  title='Efter pris'
                  onChange={data => console.log('popularity ', data)}
                  data={mock_by_popularity}
                  className={s.short}
                />
                <DropMenu
                  title='Efter bransch'
                  onChange={data => console.log('business ', data)}
                  data={mock_by_line_of_business}
                  className={s.wide}
                />
                {children && children}
                <Button className={s.btn}>Filtrera</Button>
              </div>
            </div>
          </Popup>
        </>
      )}
      <div className={s.filters}>
        <DropMenu
          title='Efter popularitet'
          onChange={data => console.log('popularity ', data)}
          data={mock_by_popularity}
          className={s.short}
        />
        <DropMenu
          title='Efter pris'
          onChange={data => console.log('popularity ', data)}
          data={mock_by_popularity}
          className={s.short}
        />
        <DropMenu
          title='Efter bransch'
          onChange={data => console.log('business ', data)}
          data={mock_by_line_of_business}
          className={s.wide}
        />
        {children && children}
      </div>
    </>
  )
}
