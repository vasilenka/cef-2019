import styles from './ActionMenu.module.scss'
import React from 'react'
import cx from 'classnames'
import { Link } from 'gatsby'

import Text from '../../primitives/Text/Text'

const ActionMenu = ({ icon, to, children, className, activeClassName, ...restProps }) => {
  return (
    <Link
      to={to}
      className={cx({
        [styles.root]: true,
        [className]: className
      })}
      activeClassName={cx({
        [styles.active]: true,
        [activeClassName]: activeClassName
      })}
      {...restProps}>
      {icon && <div style={{ marginBottom: '4px' }}>{icon}</div>}
      {children && <Text heading6 className={styles.menu}>{children}</Text>}
    </Link>
  )
}

export default ActionMenu
