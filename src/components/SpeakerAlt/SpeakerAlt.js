import styles from "./SpeakerAlt.module.scss"
import React from "react"
import cx from "classnames"

import Text from "../../primitives/Text/Text"

const Speaker = ({
  name,
  photo,
  job,
  description,
  className,
  ...restProps
}) => {
  return (
    <div
      className={cx({
        [styles.root]: true,
        [className]: className,
      })}
      {...restProps}>
      <div className={styles.container}>
        <div
          className={cx({
            [styles.main]: true,
          })}>
          <div className={styles.photo}>{photo}</div>
          <div className={styles.bio}>
            <div
              className={cx({
                [styles.identity]: true,
              })}>
              <Text
                component="h3"
                heading4
                strong
                className={cx({ [styles.name]: true })}>
                {name}
              </Text>
              {job && (
                <Text
                  breakWord
                  heading5
                  small
                  className={cx({
                    [styles.title]: true,
                    [styles.banana]: true,
                  })}>
                  {job}
                </Text>
              )}
            </div>
          </div>
        </div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  )
}

export default Speaker
