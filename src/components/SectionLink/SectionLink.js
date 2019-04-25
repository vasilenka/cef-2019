import styles from './SectionLink.module.scss'
import React from 'react'
import cx from 'classnames'
import {Link} from 'gatsby'
import Text from '../../primitives/Text/Text';

const SectionLink = ({
  to,
  children,
  className,
  ...restProps
  }) => {
  return (
    <div style={{width: '100%', textAlign: 'center'}}>
      <Link
        to={to}
        className={cx({
          [styles.root]: true,
          [className]: className,
        })}
        {...restProps}>
        <Text heading4 style={{color: '#ca274c', fontWeight: '700', }}>
          {children}
        </Text>
      </Link>
    </div>
  )
}

export default SectionLink