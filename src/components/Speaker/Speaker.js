import styles from './Speaker.module.scss';
import React from 'react';
import cx from 'classnames';

import Text from '../../primitives/Text/Text';
import UserAvatar from './../icons/user.inline.svg';

const Speaker = ({
  name,
  photo,
  noPhoto,
  breakout,
  job,
  className,
  ...restProps
  }) => {
  return (
    <div
      className={cx({
        [styles.root]: !breakout,
        [styles.breakout]: breakout,
        [className]: className,
      })}
      {...restProps}>
      <div
        className={cx({
          [styles.container]: true,
        })}>
        <div className={styles.bio}>
          <div
            className={cx({
              [styles.identity]: !breakout,
              [styles.identityBreakout]: breakout,
            })}
            >
            <Text component="h3"
              heading4
              className={cx({ [styles.name]: true })}
              >{name}
            </Text>
            {job &&
              <Text
                breakWord
                heading5
                small
                className={cx({
                  [styles.title]: true,
                  [styles.banana]: !breakout })
                }>
                {job}
              </Text>
            }
          </div>
        </div>
        {photo
          ? <div className={styles.photo}>
              {photo}
            </div>
          : noPhoto
            ? <div className={styles.photoContainer}>
                <UserAvatar className={styles.userAvatar}/>
              </div>
            : null
        }
      </div>
    </div>
  )
}

export default Speaker