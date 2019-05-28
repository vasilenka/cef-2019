import styles from './ScheduleItem.module.scss';
import React from 'react';
import cx from 'classnames';

import Box from '../Box/Box';
import Badge from '../../primitives/Badge/Badge';
// import ScheduleVenue from '../ScheduleVenue/ScheduleVenue';

const ScheduleItem = ({
  children,
  hour,
  tag,
  className,
  theme,
  title,
  ...restProps
  }) => {
  return (
    <div className={cx(styles.root)} {...restProps}>
      <span className={styles.hour}>{hour}</span>
      <Box column alignStart className={styles.details}>
        {tag && <Badge large style={{marginBottom: '16px'}}>{tag}</Badge>}
        {children}
      </Box>
    </div>
  )
}

export default ScheduleItem