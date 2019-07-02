import styles from './CoOrganizers.module.scss';
import React from 'react';
import cx from 'classnames';
import Box from '../Box/Box';
import Hack from '../Hack/Hack';

const CoOrganizers = ({
  children,
  id,
  photo,
  className,
  ...restProps
  }) => {
  return (
    <Box column alignStart className={cx(styles.root)} {...restProps}>
      <Hack id={id}/>
      <div className={styles.photo}>
        {photo}
      </div>
      {children}
    </Box>
  )
}

export default CoOrganizers