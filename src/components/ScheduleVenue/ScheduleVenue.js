import styles from './ScheduleVenue.module.scss'
import React from 'react'
import cx from 'classnames'

import Room from './icons/room.inline.svg'
import Text from '../../primitives/Text/Text';
import Box from '../Box/Box';

const ScheduleVenue = ({
  children,
  className,
  ...restProps
  }) => {
  return (
    <Box alignCenter={true} justifyStart={true} className={cx(styles.root)}>
      <div className={styles.iconContainer}>
        <Room />
      </div>
      <Text medium className={styles.venue}>
        {children}
      </Text>
    </Box>
  )
}

export default ScheduleVenue