import styles from './SpeakerKeynote.module.scss'
import React from 'react'
import cx from 'classnames'

import Container from '../../layouts/Container/Container';
import Box from '../Box/Box';
import Text from '../../primitives/Text/Text';
import Hack from '../Hack/Hack';

const SpeakerKeynote = ({
  className,
  children,
  id,
  sectionTitle,
  title,
  ...restProps
  }) => {
  return (
    <Box className={cx(styles.root)} {...restProps}>
      {id && <Hack id={id.toLowerCase().replace(' ', '-')}/>}
      <Container narrow className={cx(styles.container)}>
        { sectionTitle && <Text heading3 component="h3" className={styles.sectionTitle}>{sectionTitle}</Text> }
        { title && <Text component="h2" heading5 className={styles.title}>{title}</Text> }
        { children && <div className={styles.speakerContainer}>{children}</div> }
      </Container>
    </Box>
  )
}

export default SpeakerKeynote