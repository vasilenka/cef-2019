import styles from './Event.module.scss'
import React from 'react'
import cx from 'classnames'
import {Link} from 'gatsby'

import Place from './../icons/place.inline.svg'
import Calendar from './../icons/calendar.inline.svg'
import Time from './../icons/time.inline.svg'

import Text from '../../primitives/Text/Text'
import Button from '../../primitives/Button/Button'

const Event = ({
  children,
  className,
  title,
  venue,
  date,
  time,
  free,
  register,
  notes,
  url,
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
      <header className={styles.header}>
        <Text heading2 component="h2" className={styles.title}>{title}</Text>
        {free &&
          <Text component="p" style={{marginBottom: 0, paddingTop: '12px', color: '#767676' }} small>This is a free entry event with prior online registration</Text>
        }
      </header>
      <section className={styles.section}>
        <li className={styles.detail}>
          <div className={styles.iconContainer}>
            <Calendar />
          </div>
          <Text heading5 className={styles.date}>{date}</Text>
        </li>
        <li className={styles.detail}>
          <div className={styles.iconContainer}>
            <Time />
          </div>
          <Text heading5 className={styles.time}>{time}</Text>
        </li>
        <li className={styles.detail}>
          <div className={styles.iconContainer}>
            <Place />
          </div>
          <Text heading5 className={styles.venue}>{venue}</Text>
        </li>
      </section>
      {children}
      <footer className={styles.footer}>
        {url &&
          <Link to={url}>
            <Button primary large>{register}</Button>
          </Link>
        }
        {
          notes && <Text component="p" style={{marginBottom: 0, paddingTop: '12px'}} medium>{notes}</Text>
        }
      </footer>
    </section>
  )
}

export default Event