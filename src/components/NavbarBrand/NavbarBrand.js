import styles from './NavbarBrand.module.scss'
import React from 'react'
import cx from 'classnames'
import { Link } from 'gatsby'

import Logo from './logo/dark.inline.svg'

const NavbarBrand = ({ children, className, ...restProps }) => {
  return (
    <Link
      to={'/'}
      className={cx({
        [styles.root]: true,
        [className]: className
      })}
      {...restProps}
      >
      <div className={styles.brandContainer}>
        { children || <Logo className={styles.brand} /> }
      </div>
    </Link>
  )
}

export default NavbarBrand
