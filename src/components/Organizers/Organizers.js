import styles from './Organizers.module.scss';
import React from 'react';
import cx from 'classnames';
import Box from '../Box/Box';
import Container from '../../layouts/Container/Container';
import Text from '../../primitives/Text/Text';

import KotaKita from './../images/organizers/kk';
import Univ from './../images/organizers/univ';

const Organizers = ({
  className,
  ...restProps
  }) => {
  return (
    <Box className={cx(styles.root)}>
      <Container narrow className={cx(styles.container)}>
        <Box alignCenter justifyBetween style={{ height: '100%' }}>
          <Text heading5Alt>Co-organized by: </Text>
          <div className={styles.logoContainer}>
            <div className={styles.logo}>
              <KotaKita />
            </div>
          </div>
          <div className={styles.logoContainer}>
            <div className={cx(styles.logo, styles.logoUniv)}>
              <Univ />
            </div>
          </div>
          <div className={styles.logoContainer}>
            <div className={styles.logo}>
              <KotaKita />
            </div>
          </div>
          <div className={styles.logoContainer}>
            <div className={cx(styles.logo, styles.logoUniv)}>
              <Univ />
            </div>
          </div>
        </Box>
      </Container>
    </Box>
  )
}

export default Organizers