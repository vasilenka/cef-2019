import styles from './VenueImage.module.scss';
import React from 'react';
import cx from 'classnames';

import Venue from './../images/venue'

const VenueImage = ({
  className,
  ...restProps
  }) => {
  return (
    <div className={cx(styles.root)}>
      <Venue />
    </div>
  )
}

export default VenueImage