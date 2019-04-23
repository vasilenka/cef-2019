import styles from './Box.module.scss';
import React from 'react';
import classnames from 'classnames';

const Box = ({
  children,
  component,
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
  className,
  ...restProps
}) => {
  let Component = component || 'div';

  return (
    <Component
      className={classnames({
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
      {...restProps}>
      {children}
    </Component>
  );
};

export default Box;
