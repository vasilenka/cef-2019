import styles from './Info.module.scss';
import React from 'react';
import cx from 'classnames';
import Text from '../../primitives/Text/Text';

const Info = ({
  label,
  value,
  className,
  ...restProps
  }) => {
  return (
    <div className={cx(styles.root)} {...restProps}>
      <Text small component="label" className={cx(styles.label)}>{label}</Text>
      <Text component="h3" heading4 className={cx(styles.value)}>{value}</Text>
    </div>
  )
}

export default Info