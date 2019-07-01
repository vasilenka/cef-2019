import styles from './ScheduleParts.module.scss';
import React from 'react';
import cx from 'classnames';

const ScheduleParts = ({
  className,
  ...restProps
  }) => {
  return (
    <ul className={cx(styles.root)}>
      <li className={cx(styles.item)}>Thematic Site Visits</li>
      <li className={cx(styles.item)}>Public Forum</li>
      <li className={cx(styles.item)}>Mayors’ Symposium</li>
    </ul>
  )
}

export default ScheduleParts