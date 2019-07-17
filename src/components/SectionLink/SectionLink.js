import styles from './SectionLink.module.scss'
import React from 'react'
import cx from 'classnames'
import {Link} from 'gatsby'
import Text from '../../primitives/Text/Text';
import Button from '../../primitives/Button/Button';

const SectionLink = ({
  to,
  children,
  className,
  containerClassName,
  ...restProps
  }) => {
  return (
    <div style={{width: '100%', textAlign: 'center'}} className={containerClassName}>
      {
        to ? <Link
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
        : <Button {...restProps} primary style={{marginTop: '32px'}}>
            {children}
          </Button>
      }
    </div>
  )
}

export default SectionLink