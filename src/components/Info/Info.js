import styles from './Info.module.scss'
import React from 'react'
import cx from 'classnames'

import Text from '../../primitives/Text/Text'
import Box from '../Box/Box'

const Info = ({
  label,
  icon,
  value,
  className,
  ...restProps
  }) => {
  return (
    <div
      className={cx({
        [styles.root]: true,
        [className]: className,
      })}
      {...restProps}
      >
      <div className={styles.iconContainer}>
        {icon}
      </div>
      <Box column justifyCenter className={styles.infobox}>
        <Text small component="label" className={cx(styles.label)}>{label}</Text>
        <Text component="h3" heading4 className={cx(styles.value)}>{value}</Text>
      </Box>
    </div>
  )
}

export default Info