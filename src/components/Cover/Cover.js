import styles from './Cover.module.scss'
import React from 'react'
import cx from 'classnames'

import Text from '../../primitives/Text/Text'
import Box from '../Box/Box'
import Container from '../../layouts/Container/Container'

const Cover = ({
  className,
  title,
  description,
  ...restProps
  }) => {
  return (
    <div className={cx(styles.root)}>
      <Container narrow className={cx(styles.container)} {...restProps}>
        <Box alignCenter justifyStart style={{ height: '100%' }}>
          <Box column alignStart style={{width: '100%'}}>
            <Text display3 component="h1"
              className={cx({[styles.title]: description})
              }>
              {title}
            </Text>
            {description &&
              <Text medium className={styles.overview} component="p">
                {description}
              </Text>
            }
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default Cover