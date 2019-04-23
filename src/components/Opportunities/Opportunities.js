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
              Participate in workshops to experience and gain knowledge of transformative learning and enhance needed skills through innovative methods and techniques in mutually stimulating and supportive environment.
            </Text>
          </div>
          <div className={styles.opportunity}>
            <div className={styles.iconContainer}>
              <div className={styles.icon}>
                <IconThree />
              </div>
            </div>
            <Text medium component="p" style={{ marginBottom: 0 }}>
              Learn various modalities of civic engagements in different parts of the region via exchange forums.
            </Text>
          </div>
          <div className={styles.opportunity}>
            <div className={styles.iconContainer}>
              <div className={styles.icon}>
                <IconFour />
              </div>
            </div>
            <Text medium component="p" style={{ marginBottom: 0 }}>
              Experience and enjoy the rich history, art and cuisine, the lively and friendly atmosphere, as well as the surrounding embracing nature of the city of Solo.
            </Text>
          </div>
          <div className={styles.opportunity}>
            <div className={styles.iconContainer}>
              <div className={styles.icon}>
                <IconFive />
              </div>
            </div>
            <Text medium component="p" style={{ marginBottom: 0 }}>
              Dialogue and network with outstanding practitioners and strategic partners through learning the connectivity of highlighted issues, so that further collaborations can be concretized.
            </Text>
          </div>
        </div>
      </Container>
    </Box>
  )
}

export default Opportunities