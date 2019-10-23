import styles from "./ScrollHack.module.scss"
import React from "react"

const ScrollHack = ({ id, className, ...restProps }) => {
  return <div id={id} className={styles.hack} {...restProps} />
}

export default ScrollHack
