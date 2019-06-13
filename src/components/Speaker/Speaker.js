import styles from './Speaker.module.scss';
import React from 'react';
import cx from 'classnames';
import Text from '../../primitives/Text/Text';

const Speaker = ({
  name,
  breakout,
  job,
  photo,
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
        <div
          className={cx({
            [styles.identity]: !breakout,
            [styles.identityBreakout]: breakout,
          })}
          >
          <Text component="h3"
            heading3Alt={!breakout}
            heading4={breakout}
            className={cx({ [styles.name]: true })}
            >{name}
          </Text>
          {job &&
            <Text breakWord heading5 small className={cx({
              [styles.title]: true,
              [styles.banana]: !breakout })}>{job}</Text>
          }
        </div>
      </div>
    </div>
  )
}

export default Speaker