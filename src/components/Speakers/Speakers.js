import styles from './Speakers.module.scss'
import React from 'react'
import cx from 'classnames'

import Text from '../../primitives/Text/Text'
import Container from '../../layouts/Container/Container'
import Box from '../Box/Box'
import Speaker from '../Speaker/Speaker'

import Ita from './../images/speakers/ita'
import Nina from './../images/speakers/nina'
import Bima from './../images/speakers/bima'
import Febrian from './../images/speakers/febrian'
import Rian from './../images/speakers/rian'
import Murni from './../images/speakers/murni'
import SectionLink from '../SectionLink/SectionLink';

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
          <Speaker photo={<Ita />} name="Paulista Surjadi" job="Communications Specialist" />
          <Speaker photo={<Febrian />} name="Febrian Gerinosky" job="Designer" />
          <Speaker photo={<Nina />} name="Nina Asterina" job="Knowledge Management Officer" />
          <Speaker photo={<Rian />} name="Rian Nugroho" job="Operations Director" />
          <Speaker photo={<Murni />} name="Murni" job="Finance Manager" />
          <Speaker photo={<Bima />} name="Bima Pratama Putra" job="Designer &amp; Planner" />
        </div>
        <SectionLink to={'/speakers'}>
          View All Speakers
        </SectionLink>
      </Container>
    </Box>
  )
}

export default Speakers