import styles from './ScheduleSection.module.scss';
import React from 'react';
import cx from 'classnames';

const ScheduleSection = ({
  children,
  className,
  ...restProps
  }) => {
  return (
    <div className={cx(styles.root)} {...restProps}>
      {children}
    </div>
  )
}

export default ScheduleSection