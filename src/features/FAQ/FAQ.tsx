import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import cn from 'classnames'

import { mock__faq } from 'shared/mocks/mock_faq'

import s from './faq.module.scss'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0)

  const handleItemClick = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const handleTabSelect = (index: number) => {
    setActiveTabIndex(index)
  }
  return (
    <div className={s.container} id={'faq'}>
      <h2 className={s.faqHeader}>OM Tävlingen</h2>

      <Tabs
        selectedIndex={activeTabIndex}
        onSelect={handleTabSelect}
        className={s.faqBlock}
      >
        <div className={s.faqTabList}>
          <TabList>
            {mock__faq.map((tab, index) => (
              <Tab
                key={tab.id}
                className={cn(
                  index === activeTabIndex ? s.active : '',
                  s.tabList
                )}
              >
                {tab.title}
              </Tab>
            ))}
          </TabList>
        </div>

        <div className={s.faqTabPanel}>
          {mock__faq.map(tab => (
            <TabPanel key={tab.id} className={s.tabPanel}>
              {tab.text}
            </TabPanel>
          ))}
        </div>
      </Tabs>

      <div className={s.accordion}>
        {mock__faq.map((item, index) => (
          <div key={index} className={s.accordionItem}>
            <div
              className={cn(index === activeIndex ? s.active : '', s.tabList)}
              onClick={() => handleItemClick(index)}
            >
              {item.title}
            </div>
            {index === activeIndex && (
              <div className={s.tabPanel}>{item.text}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
