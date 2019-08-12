import styles from "./TalkSpeaker.module.scss"
import React from "react"
import cx from "classnames"
import Text from "../../primitives/Text/Text"

const TalkSpeaker = ({ job, name, label, className, ...restProps }) => {
  return (
    <Text
      className={cx({ [styles.root]: true, [className]: className })}
      medium
      component="li"
      {...restProps}>
      {label && (
        <span style={{ display: "block", minWidth: "96px" }}>{label}</span>
      )}{" "}
      <strong className={styles.strong}>{name}</strong>
      {job ? (name ? ", " + job : job) : null}
    </Text>
  )
}

export default TalkSpeaker
