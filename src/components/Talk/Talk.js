import styles from './Talk.module.scss'
import React from 'react'
import cx from 'classnames'

import Text from '../../primitives/Text/Text'

const Talk = ({
  children,
  title,
  className,
  ...restProps
  }) => {
  return (
    <div className={cx(styles.root)}>
      <Text heading5Alt component="h3" className={styles.title}>
        {title}
      </Text>
      {children}
    </div>
  )
}

export default Talk