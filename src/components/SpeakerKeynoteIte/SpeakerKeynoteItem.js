import styles from './SpeakerKeynoteItem.module.scss';
import React from 'react';
import cx from 'classnames';
import Text from '../../primitives/Text/Text';

const SpeakerKeynoteItem = ({
  className,
  photo,
  ...restProps
  }) => {
  return (
    <div className={cx(styles.keynote)}>
      <main className={styles.profile}>
        <div className={styles.bio}>
          <Text heading3Alt component="h3" className={styles.name}>Ms. Najwa Shihab</Text>
          <Text heading5 component="p" className={styles.job}>Founder of Narasi</Text>
          <Text heading5 component="p" className={styles.job}>Indonesia’s Literacy Ambassador (Duta Baca Indonesia)</Text>
        </div>
        <div className={styles.photo}>
          {photo}
        </div>
      </main>
    </div>
  )
}

export default SpeakerKeynoteItem