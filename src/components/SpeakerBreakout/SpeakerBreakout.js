import styles from './SpeakerBreakout.module.scss';
import React from 'react';
import cx from 'classnames';

import Text from '../../primitives/Text/Text';
import Box from '../Box/Box';

import Ita from './../images/speakers/ita'
import Nina from './../images/speakers/nina'
import Bima from './../images/speakers/bima'
import Febrian from './../images/speakers/febrian'
import Rian from './../images/speakers/rian'
import Murni from './../images/speakers/murni'
import Container from '../../layouts/Container/Container';
import Speaker from '../Speaker/Speaker';

const SpeakerBreakout = ({
  className,
  ...restProps
  }) => {
  return (
    <div className={cx(styles.root)}>
      <Container narrow className={styles.container}>
        <Text component="h2" heading3 className={styles.title}>Breakout Speakers</Text>
        <div className={styles.speakerContainer}>
          <Speaker breakout photo={<Ita />} name="Paulista Surjadi" job="Communications Specialist" />
          <Speaker breakout photo={<Febrian />} name="Febrian Gerinosky" job="Designer" />
          <Speaker breakout photo={<Nina />} name="Nina Asterina" job="Knowledge Management Officer" />
          <Speaker breakout photo={<Rian />} name="Rian Nugroho" job="Operations Director" />
          <Speaker breakout photo={<Murni />} name="Murni" job="Finance Manager" />
          <Speaker breakout photo={<Bima />} name="Bima Pratama Putra" job="Designer &amp; Planner" />
          <Speaker breakout photo={<Ita />} name="Paulista Surjadi" job="Communications Specialist" />
        </div>
      </Container>
    </div>
  )
}

export default SpeakerBreakout