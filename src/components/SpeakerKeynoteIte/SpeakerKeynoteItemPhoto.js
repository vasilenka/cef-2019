import styles from './SpeakerKeynoteItem.module.scss';
import React from 'react';
import cx from 'classnames';

import Text from '../../primitives/Text/Text';
import Speaker from '../Speaker/Speaker'

const SpeakerKeynoteItemPhoto = ({
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
        <Speaker
          name={name}
          job={job}
          photo={photo}
          />
      </main>
    </div>
  )
}

export default SpeakerKeynoteItemPhoto