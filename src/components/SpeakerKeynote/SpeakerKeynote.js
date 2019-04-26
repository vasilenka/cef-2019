import styles from './SpeakerKeynote.module.scss'
import React from 'react'
import cx from 'classnames'

import Speaker from '../Speaker/Speaker'
import Container from '../../layouts/Container/Container';

import Ita from './../images/speakers/ita'
import Nina from './../images/speakers/nina'
import Bima from './../images/speakers/bima'
import Febrian from './../images/speakers/febrian'
import Rian from './../images/speakers/rian'
import Murni from './../images/speakers/murni'
import Box from '../Box/Box';
import Text from '../../primitives/Text/Text';

const SpeakerKeynote = ({
  className,
  ...restProps
  }) => {
  return (
    <Box className={cx(styles.root)} {...restProps}>
      <Container narrow className={cx(styles.container)}>
        <Text component="h2" heading2 className={styles.title}>Plenary Speakers</Text>
        <div className={styles.speakerContainer}>
          <Speaker photo={<Ita />} name="Paulista Surjadi" job="Communications Specialist" />
          <Speaker photo={<Febrian />} name="Febrian Gerinosky" job="Designer" />
          <Speaker photo={<Nina />} name="Nina Asterina" job="Knowledge Management Officer" />
          <Speaker photo={<Rian />} name="Rian Nugroho" job="Operations Director" />
          <Speaker photo={<Murni />} name="Murni" job="Finance Manager" />
          <Speaker photo={<Bima />} name="Bima Pratama Putra" job="Designer &amp; Planner" />
          <Speaker photo={<Ita />} name="Paulista Surjadi" job="Communications Specialist" />
          <Speaker photo={<Febrian />} name="Febrian Gerinosky" job="Designer" />
          <Speaker photo={<Nina />} name="Nina Asterina" job="Knowledge Management Officer" />
          <Speaker photo={<Rian />} name="Rian Nugroho" job="Operations Director" />
          <Speaker photo={<Murni />} name="Murni" job="Finance Manager" />
          <Speaker photo={<Bima />} name="Bima Pratama Putra" job="Designer &amp; Planner" />
        </div>
      </Container>
    </Box>
  )
}

export default SpeakerKeynote