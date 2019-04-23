import styles from './Partners.module.scss';
import React from 'react';
import cx from 'classnames';

import Box from '../Box/Box';
import Container from '../../layouts/Container/Container';
import Text from '../../primitives/Text/Text';

const Partners = ({
  className,
  ...restProps
  }) => {
  return (
    <Box className={cx(styles.root)}>
      <Container className={styles.container}>
        <Text heading1 component="h2" className={styles.title}>
          Partners
        </Text>
        <Box column>
          <div className={styles.partners}>
            <Box justifyCenter alignCenter className={styles.partnerRow}>
              <div className={styles.partnerContainer}>
                <div className={cx(styles.partner, styles.one)}></div>
              </div>
              <div className={styles.partnerContainer}>
                <div className={cx(styles.partner, styles.two)}></div>
              </div>
              <div className={styles.partnerContainer}>
                <div className={cx(styles.partner, styles.three)}></div>
              </div>
              <div className={styles.partnerContainer}>
                <div className={cx(styles.partner, styles.four)}></div>
              </div>
              <div className={styles.partnerContainer}>
                <div className={cx(styles.partner, styles.five)}></div>
              </div>
              <div className={styles.partnerContainer}>
                <div className={cx(styles.partner, styles.six)}></div>
              </div>
              <div className={styles.partnerContainer}>
                <div className={cx(styles.partner, styles.seven)}></div>
              </div>
              <div className={styles.partnerContainer}>
                <div className={cx(styles.partner, styles.eight)}></div>
              </div>
              <div className={styles.partnerContainer}>
                <div className={cx(styles.partner, styles.nine)}></div>
              </div>
            </Box>
          </div>
        </Box>
        <Box column>
          <Text heading3 component="h2" className={styles.title}>
            Collaborating Organizations
          </Text>
          <div className={styles.partners}>

          </div>
        </Box>
      </Container>
    </Box>
  )
}

export default Partners