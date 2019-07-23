import styles from './SpeakerKeynoteItem.module.scss';
import React from 'react';
import cx from 'classnames';
import Text from '../../primitives/Text/Text';

const SpeakerKeynoteItem = ({
  className,
  photo,
  name,
  number,
  job,
  ...restProps
  }) => {
  return (
    <div className={cx(styles.keynote)}>
      <main className={styles.profile}>
        <Text heading5 component="p" className={styles.number}>SPEAKER {number}</Text>
        <Text heading3Alt component="h3" className={styles.name} style={{fontSize: '20px'}}>{name}</Text>
        <Text heading5 component="p" className={styles.job}>{job}</Text>
      </main>
    </div>
  )
}

export default SpeakerKeynoteItem