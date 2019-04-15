import styles from './NavbarMenu.module.scss';
import React from 'react';
import cx from 'classnames';
import { Link } from 'gatsby';

import Text from '../../primitives/Text/Text';

const NavbarMenu = ({
  children,
  to,
  containerClassName,
  className,
  activeClassName,
  ...restProps
}) => {
  return (
    <div
      className={cx({
        [styles.root]: true,
        [containerClassName]: containerClassName
      })}
    >
      <Link
        to={to}
        className={cx({
          [styles.menu]: true,
          [className]: className
        })}
        activeClassName={cx({
          [styles.active]: true,
          [activeClassName]: activeClassName
        })}
        {...restProps}
      >
        <Text heading6 className={styles.item}>
          {children}
        </Text>
      </Link>
    </div>
  );
};

export default NavbarMenu;
