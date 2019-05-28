import styles from './Box.module.scss'
import React from 'react'
import cx from 'classnames'

const Box = ({
  children,
  className,

  inline,

  row,
  rowReverse,
  column,
  columnReverse,

  alignStart,
  alignCenter,
  alignEnd,
  alignBaseline,
  alignStretch,

  justifyStart,
  justifyCenter,
  justifyEnd,
  justifyAround,
  justifyBetween,
  ...restProps

}) => <div
    className={cx({
      [styles.root]: !inline,
      [styles.inline]: inline,

      [styles.directionRow]: row,
      [styles.rowReverse]: rowReverse,
      [styles.directionColumn]: column,
      [styles.columnReverse]: columnReverse,

      [styles.alignStart]: alignStart,
      [styles.alignCenter]: alignCenter,
      [styles.alignEnd]: alignEnd,
      [styles.alignBaseline]: alignBaseline,
      [styles.alignStretch]: alignStretch,

      [styles.justifyStart]: justifyStart,
      [styles.justifyCenter]: justifyCenter,
      [styles.justifyEnd]: justifyEnd,
      [styles.justifyAround]: justifyAround,
      [styles.justifyBetween]: justifyBetween,

      [className]: className,
    })}
    {...restProps}
    >
    {children}
  </div>

export default Box