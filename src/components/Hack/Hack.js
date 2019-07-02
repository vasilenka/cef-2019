import styles from './Hack.module.scss'
import React from 'react'
import cx from 'classnames'

const Hack = ({id,...restProps }) => <div id={id} className={cx(styles.root)} {...restProps}></div>

export default Hack