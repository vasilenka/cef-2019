import styles from './SubTalk.module.scss';
import React from 'react';
import cx from 'classnames';
import Text from '../../primitives/Text/Text';

const SubTalk = ({
  children,
  title,
  className,
  moderator,
  speaker,
  facilitator,
  ...restProps
  }) => {
  return (
    <div className={cx(styles.root)}>
      <Text heading4 component="h3" className={styles.title} style={{fontSize: '20px', lineHeight: '24px', }}>
        {title}
      </Text>
      {speaker &&
        <Text className={styles.subheader} medium>
          Speaker(s)
        </Text>}
      {facilitator &&
        <Text className={styles.subheader} medium>
          Facilitated by
        </Text>}
      {moderator &&
        <Text className={styles.subheader} medium>
          Moderated by
        </Text>}
      {children}
    </div>
  )
}

export default SubTalk