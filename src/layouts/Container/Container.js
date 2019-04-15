import styles from './Container.module.scss';
import React from 'react';
import classnames from 'classnames';

const Container = ({
  children,
  className,
  narrow,
  bleed,
  fixLeft,
  fixRight,
  ...restProps
}) => {
  let defaultStyle = !narrow && !bleed && !fixLeft && !fixRight;
  return (
    <div
      {...restProps}
      className={classnames({
        [styles.root]: true,
        [styles.normal]: defaultStyle,
        [styles.narrow]: narrow,
        [styles.bleed]: bleed,
        [styles.fixLeft]: fixLeft,
        [styles.fixRight]: fixRight,
        [className]: className
      })}
    >
      {children}
    </div>
  );
};

export default Container;
