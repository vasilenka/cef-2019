import styles from './ScheduleItem.module.scss';
import React from 'react';
import cx from 'classnames';

import Box from '../Box/Box';
import Badge from '../../primitives/Badge/Badge';

const ScheduleItem = ({
  children,
  hour,
  tag,
  venue,
  className,
  theme,
  title,
  ...restProps
  }) => {
  return (
    <Box alignBaseline className={cx(styles.root)} {...restProps}>
      <span className={styles.hour}>{hour}</span>
      <Box column alignStart className={styles.details}>
        {tag && <Badge large style={{marginBottom: '16px'}}>{tag}</Badge>}
        {children}
      </Box>
    </Box>
  )
}

export default ScheduleItem