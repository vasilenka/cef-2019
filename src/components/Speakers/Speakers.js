import styles from './Speakers.module.scss';
import React from 'react';
import cx from 'classnames';
import Text from '../../primitives/Text/Text';
import Container from '../../layouts/Container/Container';
import Box from '../Box/Box';
import {Link} from 'gatsby';
import Speaker from '../Speaker/Speaker';

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
          <Speaker name="Ongki Herlambang" job="Head of Design Meridian.id" />
          <Speaker name="M. Sena Luphdika" job="CEO Meridian.id" />
          <Speaker name="Kurniawan Adhi Ramdhani" job="CCO Meridian.id" />
          <Speaker name="Khairani Ummah" job="COO Meridian.id" />
          <Speaker name="Nurul Reza Muhsinin" job="CTO Meridian.id" />
          <Speaker name="Renita Dewi" job="Head of Ops Meridian.id" />
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