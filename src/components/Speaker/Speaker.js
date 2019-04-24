import styles from './Speaker.module.scss';
import React from 'react';
import cx from 'classnames';
import Text from '../../primitives/Text/Text';

const Speaker = ({
  name,
  job,
  photo,
  className,
  ...restProps
  }) => {
  return (
    <div
      className={cx({
        [styles.root]: true,
        [className]: className,
      })}
      {...restProps}>
      <div className={styles.photo}></div>
      <div className={styles.identity}>
        <Text truncate component="h3" heading4 className={styles.name}>{name}</Text>
        <Text truncate heading5 className={styles.title}>{job}</Text>
      </div>
    </div>
  )
}

export default Speaker