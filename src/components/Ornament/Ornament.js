import styles from './Ornament.module.scss';
import React from 'react';
import cx from 'classnames';

const Ornament = () => {
  return (
    <div aria-hidden="true" className={cx(styles.root)} />
  )
}

export default Ornament