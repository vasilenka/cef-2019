import styles from './SpeakerBreakout.module.scss'
import React from 'react'
import cx from 'classnames'

import Text from '../../primitives/Text/Text'

import Container from '../../layouts/Container/Container'
import Speaker from '../Speaker/Speaker'

const SpeakerBreakout = ({
  className,
  ...restProps
  }) => {
  return (
    <div className={cx(styles.root)}>
      <Container narrow className={styles.container}>
        <Text component="h2" heading2 className={styles.title}>Speakers</Text>
        <div className={styles.speakerContainer}>
          <Speaker breakout name="Paulista Surjadi" job="" />
          <Speaker breakout name="Febrian Gerinosky" job="" />
          <Speaker breakout name="Nina Asterina" job="" />
          <Speaker breakout name="Rian Nugroho" job="" />
          <Speaker breakout name="Murni" job="" />
          <Speaker breakout name="Bima Pratama Putra" job="" />
          <Speaker breakout name="Paulista Surjadi" job="" />
          <Speaker breakout name="Febrian Gerinosky" job="" />
        </div>
      </Container>
    </div>
  )
}

export default SpeakerBreakout