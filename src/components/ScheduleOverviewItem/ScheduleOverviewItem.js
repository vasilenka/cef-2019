import styles from './ScheduleOverviewItem.module.scss';
import React from 'react';
// import cx from 'classnames';
import Box from '../Box/Box';
import Text from '../../primitives/Text/Text';

const ScheduleOverviewItem = ({
  title,
  children,
  ...restProps
  }) => {
  return (
    <Box justifyBetween className={styles.root} {...restProps}>
      <Box className={styles.overview}>
        <Text heading4Alt component="h4">
          {title}
        </Text>
      </Box>
      <Box column className={styles.details}>
        {children}
      </Box>
    </Box>
  )
}

export default ScheduleOverviewItem