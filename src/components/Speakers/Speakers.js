import styles from './Speakers.module.scss'
import React from 'react'
import cx from 'classnames'

import Text from '../../primitives/Text/Text'
import Container from '../../layouts/Container/Container'
import Box from '../Box/Box'
import Speaker from '../Speaker/Speaker'

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
          <Speaker name="Mayor of Surakarta, Indonesia"/>
          <Speaker name="Mayor of Mataram, Indonesia" />
          <Speaker name="Mayor of Surabaya, Indonesia" />
          <Speaker name="Mayor of Sleman/Yogyakarta, Indonesia" />
          <Speaker name="Mayor of Jember, Indonesia" />
          <Speaker name="Mayor of Wonosobo, Indonesia" />
          <Speaker name="Mayor of Nan Province, Thailand" />
          <Speaker name="Mayor of Yala Province, Thailand" />
          <Speaker name="Mayor from Malaysia" />
          <Speaker name="Mayor from Japan" />
          <Speaker name="Mayor from the Philippines" />
        </div>
        <SectionLink to={'/speakers'}>
          View All Speakers
        </SectionLink>
      </Container>
    </Box>
  )
}

export default Speakers