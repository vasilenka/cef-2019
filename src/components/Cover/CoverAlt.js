import styles from './Cover.module.scss'
import React from 'react'
import cx from 'classnames'

import Text from '../../primitives/Text/Text'
import Box from '../Box/Box'
import Container from '../../layouts/Container/Container'

const CoverAlt = ({
  className,
  children,
  title,
  subtitle,
  description,
  ...restProps
  }) => {
  return (
    <div className={cx(styles.root)}>
      <Container narrow className={cx(styles.container)} {...restProps}>
        <Box alignCenter justifyStart style={{ height: '100%' }}>
          <Box column alignStart style={{width: '100%'}}>
            {subtitle && <Text heading3Alt component="h1" style={{marginBottom: '32px', textTransform: 'uppercase'}}>
              {subtitle}
            </Text>}
            {title}
            {children}
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default CoverAlt