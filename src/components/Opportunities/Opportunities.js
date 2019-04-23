import styles from './Opportunities.module.scss';
import React from 'react';
import cx from 'classnames';
import Box from '../Box/Box';
import Text from '../../primitives/Text/Text';
import Container from '../../layouts/Container/Container';

import IconOne from './../images/icon1';
import IconTwo from './../images/icon2';
import IconThree from './../images/icon3';
import IconFour from './../images/icon4';
import IconFive from './../images/icon5';

const Opportunities = ({
  className,
  ...restProps
  }) => {
  return (
    <Box className={cx(styles.root)}>
      <Container narrow className={cx(styles.container)}>
        <Text heading1 component="h2">Rich of Opportunities</Text>
        <Text large>The event will provide rich opportunities for the participants to</Text>
        <div className={styles.opportunities}>
          <div className={styles.opportunity}>
            <div className={styles.iconContainer}>
              <div className={styles.icon} style={{width: '64px'}}>
                <IconOne />
              </div>
            </div>
            <Text medium component="p" style={{ marginBottom: 0 }}>
              Learn and experience first-hand civic engagement undertakings in the locality of Solo by visiting the sites and directly engaging with the communities.
            </Text>
          </div>
          <div className={styles.opportunity}>
            <div className={styles.iconContainer}>
              <div className={styles.icon}>
                <IconTwo />
              </div>
            </div>
            <Text medium component="p" style={{ marginBottom: 0 }}>
              Learn and experience first-hand civic engagement undertakings in the locality of Solo by visiting the sites and directly engaging with the communities.
            </Text>
          </div>
          <div className={styles.opportunity}>
            <div className={styles.iconContainer}>
              <div className={styles.icon}>
                <IconThree />
              </div>
            </div>
            <Text medium component="p" style={{ marginBottom: 0 }}>
              Learn and experience first-hand civic engagement undertakings in the locality of Solo by visiting the sites and directly engaging with the communities.
            </Text>
          </div>
          <div className={styles.opportunity}>
            <div className={styles.iconContainer}>
              <div className={styles.icon}>
                <IconFour />
              </div>
            </div>
            <Text medium component="p" style={{ marginBottom: 0 }}>
              Learn and experience first-hand civic engagement undertakings in the locality of Solo by visiting the sites and directly engaging with the communities.
            </Text>
          </div>
          <div className={styles.opportunity}>
            <div className={styles.iconContainer}>
              <div className={styles.icon}>
                <IconFive />
              </div>
            </div>
            <Text medium component="p" style={{ marginBottom: 0 }}>
              Learn and experience first-hand civic engagement undertakings in the locality of Solo by visiting the sites and directly engaging with the communities.
            </Text>
          </div>
        </div>
      </Container>
    </Box>
  )
}

export default Opportunities