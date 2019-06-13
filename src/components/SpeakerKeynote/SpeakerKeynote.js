import styles from './SpeakerKeynote.module.scss'
import React from 'react'
import cx from 'classnames'

import Container from '../../layouts/Container/Container';
import Box from '../Box/Box';
import Text from '../../primitives/Text/Text';

const SpeakerKeynote = ({
  className,
  children,
  title,
  ...restProps
  }) => {
  return (
    <Box className={cx(styles.root)} {...restProps}>
      <Container narrow className={cx(styles.container)}>
        <Text component="h2" heading2 className={styles.title}>{title}</Text>
        <div className={styles.speakerContainer}>
          {children}
        </div>
      </Container>
    </Box>
  )
}

export default SpeakerKeynote