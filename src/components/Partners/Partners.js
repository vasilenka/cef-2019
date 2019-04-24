import styles from './Partners.module.scss';
import React from 'react';
import cx from 'classnames';

import Box from '../Box/Box';
import Container from '../../layouts/Container/Container';
import Text from '../../primitives/Text/Text';
import Image from './../images/organizers/kk';

const Partners = ({
  className,
  ...restProps
  }) => {
  return (
    <Box className={cx(styles.root)}>
      <Container narrow className={styles.container}>
        <Text heading1 component="h2" className={styles.title}>
          Partners
        </Text>
        <Box column className={styles.mainPartner}>
          <Box justifyCenter alignCenter className={styles.partnerRow}>
            <div className={styles.partnerContainer}>
              <div className={cx(styles.partner, styles.one)}>
                <Image />
              </div>
            </div>
            <div className={styles.partnerContainer}>
              <div className={cx(styles.partner, styles.two)}>
                <Image />
              </div>
            </div>
            <div className={styles.partnerContainer}>
              <div className={cx(styles.partner, styles.three)}>
                <Image />
              </div>
            </div>
            <div className={styles.partnerContainer}>
              <div className={cx(styles.partner, styles.four)}>
                <Image />
              </div>
            </div>
            <div className={styles.partnerContainer}>
              <div className={cx(styles.partner, styles.five)}>
                <Image />
              </div>
            </div>
            <div className={styles.partnerContainer}>
              <div className={cx(styles.partner, styles.six)}>
                <Image />
              </div>
            </div>
            <div className={styles.partnerContainer}>
              <div className={cx(styles.partner, styles.seven)}>
                <Image />
              </div>
            </div>
            <div className={styles.partnerContainer}>
              <div className={cx(styles.partner, styles.eight)}>
                <Image />
              </div>
            </div>
            <div className={styles.partnerContainer}>
              <div className={cx(styles.partner, styles.nine)}>
                <Image />
              </div>
            </div>
          </Box>
        </Box>
        <Box column>
          <Text heading3 component="h2" className={styles.subheading}>
            Collaborating Organizations
          </Text>
          <Box column>
          <Box justifyCenter alignCenter className={styles.partnerRow}>
            <div className={styles.collaboratingPartnerContainer}>
              <div className={cx(styles.partner, styles.one)}>
                <Image />
              </div>
            </div>
            <div className={styles.collaboratingPartnerContainer}>
              <div className={cx(styles.partner, styles.two)}>
                <Image />
              </div>
            </div>
          </Box>
        </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Partners