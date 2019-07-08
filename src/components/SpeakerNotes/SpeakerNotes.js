import styles from './SpeakerNotes.module.scss'
import React from 'react'
import cx from 'classnames'

import Text from '../../primitives/Text/Text'
import Container from '../../layouts/Container/Container';

const SpeakerNotes = ({
  className,
  ...restProps
  }) => {
  return (
      <footer className={cx(styles.root)}>
        <Container narrow>
          <Text heading5 component="p" className={styles.text}>(*) To be confirmed</Text>
        </Container>
      </footer>
  )
}

export default SpeakerNotes