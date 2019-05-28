import styles from './Talk.module.scss'
import React from 'react'
import cx from 'classnames'

import Text from '../../primitives/Text/Text'
import Workshop from './icons/workshop.inline.svg'

const Talk = ({
  children,
  title,
  workshop,
  facilitators,
  className,
  ...restProps
  }) => {
  return (
    <div className={cx(styles.root)} {...restProps}>
      {workshop &&
        <div style={{display: 'flex', alignItems: 'center', padding: '12px 0px',}}>
          <div className={styles.workshopIcon}>
            <Workshop />
          </div>
          <Text heading6 style={{ textTransform: 'uppercase', color: '#879F55' }}>Workshop</Text>
        </div>
      }
      <Text heading3Alt component="h3" className={styles.title}>
        {title}
      </Text>
      {facilitators &&
        <Text className={styles.subheader} medium>
          Facilitated by
        </Text>}
      {children}
    </div>
  )
}

export default Talk