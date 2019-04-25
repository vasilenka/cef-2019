import styles from './SchedulesFull.module.scss'
import React from 'react'
import cx from 'classnames'

import Box from '../Box/Box'
import Container from '../../layouts/Container/Container';
import Text from '../../primitives/Text/Text';

const SchedulesFull = ({
  className,
  ...restProps
  }) => {
  return (
    <Box className={cx(styles.root)} {...restProps}>
      <Container narrow className={cx(styles.container)}>
        <Text heading5>
          Full agenda
        </Text>
      </Container>
    </Box>
  )
}

export default SchedulesFull