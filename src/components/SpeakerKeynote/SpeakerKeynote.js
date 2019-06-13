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
          <Speaker photo={<Ita />} name="Mayor of Surakarta" job="Indonesia" />
          <Speaker photo={<Febrian />} name="Mayor of Mataram" job="Indonesia" />
          <Speaker photo={<Nina />} name="Mayor of Surabaya" job="Indonesia" />
          <Speaker photo={<Rian />} name="Mayor of Sleman/Yogyakarta" job="Indonesia" />
          <Speaker photo={<Murni />} name="Mayor of Jember" job="Indonesia" />
          <Speaker photo={<Bima />} name="Mayor of Wonosobo" job="Indonesia" />
          <Speaker photo={<Ita />} name="Mayor of Nan Province" job="Thailand" />
          <Speaker photo={<Nina />} name="Mayor of Yala Province" job="Thailand" />
          <Speaker photo={<Rian />} name="Mayor from Malaysia" job="" />
          <Speaker photo={<Murni />} name="Mayor from Japan" job="" />
          <Speaker photo={<Bima />} name="Mayor from the Philippines" job="" />
        </div>
      </Container>
    </Box>
  )
}

export default SpeakerKeynote