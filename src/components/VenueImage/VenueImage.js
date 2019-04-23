import styles from './VenueImage.module.scss';
import React from 'react';
import cx from 'classnames';

const VenueImage = ({
  className,
  ...restProps
  }) => {
  return (
    <div className={cx(styles.root)} {...restProps}>
    </div>
  )
}

export default VenueImage