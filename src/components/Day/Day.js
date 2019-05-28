import styles from './Day.module.scss';
import React from 'react';
import cx from 'classnames';
import Text from '../../primitives/Text/Text';
import Box from '../Box/Box';

const Day = ({
  date,
  day,
  theme,
  className,
  ...restProps
  }) => {
  return (
    <div className={cx(styles.root)}>
      <Box alignCenter justifyStart className={styles.dateContainer}>
        <Text heading2 component="h2" className={styles.date}>{date}</Text>
        {theme &&
          <Text heading3Alt component="h2" className={styles.theme}>{theme}</Text>
        }
      </Box>
      <Text heading2 className={styles.day}>{day}</Text>
    </div>
  )
}

export default Day