import styles from './Speakers.module.scss';
import React from 'react';
import cx from 'classnames';
import Text from '../../primitives/Text/Text';
import Container from '../../layouts/Container/Container';
import Box from '../Box/Box';
import {Link} from 'gatsby';

const Speakers = ({
  className,
  ...restProps
  }) => {
  return (
    <Box className={cx(styles.root)}>
      <Container narrow className={styles.container}>
        <Text heading1 component="h2" style={{ width: '100%', textAlign: 'center', marginBottom: '64px'}}>
          Speakers Highlights
        </Text>
        <div className={styles.speakerContainer}>
          <div className={styles.speaker}>
            <div className={styles.speakerCard}>
              <div className={styles.photo}></div>
              <div className={styles.identity}>
                <Text component="h3" heading4 style={{ color: "#121212", fontWeight: 700, textTransform: 'uppercase'}}>Ongki Herlambang</Text>
                <Text heading5 style={{color: "#121212"}}>Head of Design at Meridian.id</Text>
              </div>
            </div>
          </div>
          <div className={styles.speaker}>
            <div className={styles.speakerCard}>
              <div className={styles.photo}></div>
              <div className={styles.identity}>
                <Text component="h3" heading4 style={{ color: "#121212", fontWeight: 700, textTransform: 'uppercase'}}>Ongki Herlambang</Text>
                <Text heading5 style={{color: "#121212"}}>Head of Design at Meridian.id</Text>
              </div>
            </div>
          </div>
          <div className={styles.speaker}>
            <div className={styles.speakerCard}>
              <div className={styles.photo}></div>
              <div className={styles.identity}>
                <Text component="h3" heading4 style={{ color: "#121212", fontWeight: 700, textTransform: 'uppercase'}}>Ongki Herlambang</Text>
                <Text heading5 style={{color: "#121212"}}>Head of Design at Meridian.id</Text>
              </div>
            </div>
          </div>
          <div className={styles.speaker}>
            <div className={styles.speakerCard}>
              <div className={styles.photo}></div>
              <div className={styles.identity}>
                <Text component="h3" heading4 style={{ color: "#121212", fontWeight: 700, textTransform: 'uppercase'}}>Ongki Herlambang</Text>
                <Text heading5 style={{color: "#121212"}}>Head of Design at Meridian.id</Text>
              </div>
            </div>
          </div>
          <div className={styles.speaker}>
            <div className={styles.speakerCard}>
              <div className={styles.photo}></div>
              <div className={styles.identity}>
                <Text component="h3" heading4 style={{ color: "#121212", fontWeight: 700, textTransform: 'uppercase'}}>Ongki Herlambang</Text>
                <Text heading5 style={{color: "#121212"}}>Head of Design at Meridian.id</Text>
              </div>
            </div>
          </div>
          <div className={styles.speaker}>
            <div className={styles.speakerCard}>
              <div className={styles.photo}></div>
              <div className={styles.identity}>
                <Text component="h3" heading4 style={{ color: "#121212", fontWeight: 700, textTransform: 'uppercase'}}>Ongki Herlambang</Text>
                <Text heading5 style={{color: "#121212"}}>Head of Design at Meridian.id</Text>
              </div>
            </div>
          </div>
        </div>
        <div style={{width: '100%', textAlign: 'center'}}>
          <Link
            to={'/speakers'}>
            <Text heading5Alt style={{ textTransf4: 'uppercasefontWeight: 700, ', color: '#ca274c'}}>
              View all speakers
            </Text>
          </Link>
        </div>
      </Container>
    </Box>
  )
}

export default Speakers