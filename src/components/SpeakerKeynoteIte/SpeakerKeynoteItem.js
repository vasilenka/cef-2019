import styles from './SpeakerKeynoteItem.module.scss';
import React from 'react';
import cx from 'classnames';
import Text from '../../primitives/Text/Text';

const SpeakerKeynoteItem = ({
  className,
  ...restProps
  }) => {
  return (
    <main className={cx(styles.keynote)}>
      <Text heading3Alt component="h3" className={styles.name}>Najwa Shihab</Text>
      <Text heading5 component="p" className={styles.job}>Founder of Narasi</Text>
      <Text heading5 component="p" className={styles.job}>Indonesia’s Literacy Ambassador (Duta Baca Indonesia)</Text>
    </main>
  )
}

export default SpeakerKeynoteItem