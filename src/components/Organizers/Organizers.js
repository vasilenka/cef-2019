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
        <Box alignCenter className={styles.organizerContainer}>
          <Text heading5Alt component="h2" className={styles.title}>Co-organized by: </Text>
          <Box className={cx(styles.columnRow)}>
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
        </Box>
      </Container>
    </Box>
  )
}

export default Organizers