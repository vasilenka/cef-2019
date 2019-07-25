import styles from './Cover.module.scss'
import React from 'react'
import cx from 'classnames'

import Text from '../../primitives/Text/Text'
import Box from '../Box/Box'
import Container from '../../layouts/Container/Container'

const Cover = ({
  className,
  children,
  title,
  subtitle,
  containerStyle,
  description,
  ...restProps
  }) => {
  return (
    <div className={cx(styles.root)} style={containerStyle}>
      <Container narrow className={cx(styles.container)} {...restProps}>
        <Box alignCenter justifyStart style={{ height: '100%' }}>
          <Box column alignStart style={{width: '100%'}}>
            {title &&
            <Text display3 component="h1"
              className={cx({[styles.title]: description})
              }>
              {title}
            </Text>}
            {subtitle && <Text heading1Alt component="h1"
              className={cx({[styles.subtitle]: description})
              }>
              {subtitle}
            </Text>}
            {description &&
              <Text medium className={styles.overview} component="p">
                {description}
              </Text>
            }
            {children}
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default Cover