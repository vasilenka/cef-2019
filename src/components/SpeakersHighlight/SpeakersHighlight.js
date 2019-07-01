import styles from './SpeakersHighlight.module.scss'
import React from 'react'
import cx from 'classnames'

import Text from '../../primitives/Text/Text'
import Container from '../../layouts/Container/Container'
import Box from '../Box/Box'
import Speaker from '../Speaker/Speaker'

import SectionLink from '../SectionLink/SectionLink';

const SpeakersHighlight = ({
  className,
  ...restProps
  }) => {
  return (
    <Box className={cx(styles.root)}>
      <Container narrow className={styles.container}>
        <Text heading1 component="h2" style={{ width: '100%', textAlign: 'center', marginBottom: '64px'}}>
          Speakers Highlights
        </Text>
        <Text heading4Alt component="h3" className={styles.subtitle} style={{ textAlign: 'center' }}>Keynote Speaker</Text>
        <main className={styles.keynote} style={{ textAlign: 'center' }}>
          <Text heading3Alt component="h3" className={styles.name}>Najwa Shihab</Text>
          <Text heading5 component="p" className={styles.job}>Founder of Narasi</Text>
          <Text heading5 component="p" className={styles.job}>Indonesia’s Literacy Ambassador (Duta Baca Indonesia)</Text>
        </main>
        <Text heading4Alt component="h3" className={styles.subtitle} style={{ textAlign: 'center' }}>Mayors</Text>
        <div className={styles.speakerContainer}>
          <Speaker name="F.X. Hadi Rudyatmo" job="Mayor of Surakarta (Central Java, Indonesia)" />
          <Speaker name="Ahyar Abduh" job="Mayor of Mataram (Nusa Tenggara Barat, Indonesia)" />
          <Speaker name="Tri Rismaharini*," job="Mayor of Surabaya (East Java, Indonesia)" />
          <Speaker name="Badingah" job="Regent of Gunung Kidul (Yogyakarta, Indonesia)" />
          <Speaker name="Eko Purnomo" job="Regent of Wonosobo (Central Java, Indonesia)" />
          <Speaker name="Ibnu Sina" job="Mayor of Banjarmasin (South Kalimantan, Indonesia)" />
          <Speaker name="Pongsak Yingchoncharoen" job="Mayor of Yala Province, Thailand" />
          <Speaker name="James Pooten, Jr." job="Mayor of Sagada" />
          <Speaker name="Mayor of Ipoh City Council, Perak" />
        </div>
        <SectionLink to={'/speakers'}>
          View All Speakers
        </SectionLink>
      </Container>
    </Box>
  )
}

export default SpeakersHighlight