import styles from './Day.module.scss';
import React from 'react';
import cx from 'classnames';
import Text from '../../primitives/Text/Text';

const Day = ({
  date,
  day,
  className,
  ...restProps
  }) => {
  return (
    <div className={cx(styles.root)}>
      <Text heading2 component="h2">{date}</Text>
      <Text heading2>{day}</Text>
    </div>
  )
}

export default Day