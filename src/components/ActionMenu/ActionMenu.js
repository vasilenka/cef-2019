import styles from './ActionMenu.module.scss'
import React from 'react'
import cx from 'classnames'
import { Link } from 'gatsby'

import Text from '../../primitives/Text/Text'

const ActionMenu = ({ icon, to, children, className, active, ...restProps }) => {
  return (
    <Link
      to={to}
      className={cx({
        [styles.root]: true,
        [styles.active]: active,
        [className]: className
      })}
      {...restProps}>
      {icon && <div style={{ marginBottom: '4px' }}>{icon}</div>}
      {children && <Text small>{children}</Text>}
    </Link>
  )
}

export default ActionMenu
