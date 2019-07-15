import styles from './TalkSpeaker.module.scss';
import React from 'react';
import cx from 'classnames';
import Text from '../../primitives/Text/Text';

const TalkSpeaker = ({
  job,
  name,
  italic,
  className,
  ...restProps
  }) => {
  return (
    <Text className={cx({[styles.root]: true, [className]: className, })} medium component="li" {...restProps}>
      <strong className={styles.strong}>{name}{italic && <em>: {italic}</em>}</strong>{job ? ', ' + job : ''}
    </Text>
  )
}

export default TalkSpeaker