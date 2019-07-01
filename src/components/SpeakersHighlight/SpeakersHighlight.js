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
        <Text heading5 component="h3" className={styles.mayorsTitle}>Indonesia</Text>
        <div className={styles.speakerContainer}>
          <Speaker name="Ahyar Abduh*" job="Mayor of Mataram (Nusa Tenggara Barat, Indonesia)" />
          <Speaker name="Badingah*" job="Regent of Gunung Kidul (Yogyakarta, Indonesia)" />
          <Speaker name="Eko Purnomo*" job="Regent of Wonosobo (Central Java, Indonesia)" />
          <Speaker name="F.X. Hadi Rudyatmo" job="Mayor of Surakarta (Central Java, Indonesia)" />
          <Speaker name="Ibnu Sina*" job="Mayor of Banjarmasin (South Kalimantan, Indonesia)" />
          <Speaker name="Tri Rismaharini*," job="Mayor of Surabaya (East Java, Indonesia)" />
        </div>

        <Text heading5 component="h3" className={styles.mayorsTitle}>Mayors from Thailand</Text>
        <div className={styles.speakerContainer}>
          <Speaker name="Pongsak Yingchoncharoen" job="Mayor of Yala Province, Thailand" />
        </div>

        <Text heading5 component="h3" className={styles.mayorsTitle}>Mayors from Philippines</Text>
        <div className={styles.speakerContainer}>
          <Speaker name="James Pooten, Jr.*" job="Mayor of Municipality of Sagada" />
        </div>

        <Text heading5 component="h3" className={styles.mayorsTitle}>Mayors from South Korea (to be confirmed)</Text>
        {/* <div className={styles.speakerContainer}>
          <Speaker name="Mayor from South Korea*" />
        </div> */}

        <footer style={{paddingTop: '48px'}}>

          <Text heading5 component="p" style={{ marginBottom: '48px', paddingTop: '12px', borderTop: '1px solid rgba(0,0,0,.12)' }}>(*) To be confirmed</Text>

          <SectionLink to={'/speakers'}>
            View All Speakers
          </SectionLink>
        </footer>
      </Container>
    </Box>
  )
}

export default SpeakersHighlight