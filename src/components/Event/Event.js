import styles from './Event.module.scss'
import React from 'react'
import cx from 'classnames'

import Text from '../../primitives/Text/Text'

import Place from './../icons/place.inline.svg'
import Calendar from './../icons/calendar.inline.svg'

const Event = ({
  children,
  title,
  venue,
  date,
  time,
  className,
  ...restProps
  }) => {
  return (
    <section
      className={cx({
        [styles.root]: true,
        [className]: className,
      })}
      {...restProps}
      >
      <Text heading2 component="h2">{title}</Text>
      <header className={styles.header}>
        <li className={styles.detail}>
          <div className={styles.iconContainer}>
            <Calendar />
          </div>
          <Text heading5 className={styles.date}>{date}</Text>
        </li>
        <li className={styles.detail}>
          <div className={styles.iconContainer}>
            <Place />
          </div>
          <Text heading5 className={styles.venue}>{venue}</Text>
        </li>
      </header>
      {children}
    </section>
  )
}

export default Event