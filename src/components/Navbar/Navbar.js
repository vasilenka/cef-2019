import styles from './Navbar.module.scss';
import React from 'react';
import cx from 'classnames';

import NavbarBrand from '../NavbarBrand/NavbarBrand';
import NavbarSecondary from '../NavbarSecondary/NavbarSecondary';
import NavbarPrimary from '../NavbarPrimary/NavbarPrimary';
import NavbarMenu from '../NavbarMenu/NavbarMenu';
import Button from '../../primitives/Button/Button';
import Container from '../../layouts/Container/Container';

const Navbar = ({ children, narrow, bleed, className, ...restProps }) => {
  return (
    <div
      className={cx({
        [styles.root]: true,
      })}
      {...restProps}>
      <Container
        narrow={narrow}
        bleed={bleed}
        className={cx({
          [styles.container]: true,
          [className]: className,
        })}
        >
        <NavbarPrimary>
          <NavbarBrand />
          <NavbarMenu containerClassName={styles.primaryMenu} to="/about">About</NavbarMenu>
          <NavbarMenu containerClassName={styles.primaryMenu} to="/schedule">Schedule</NavbarMenu>
          <NavbarMenu containerClassName={styles.primaryMenu} to="/speakers">Speakers</NavbarMenu>
        </NavbarPrimary>
        <NavbarSecondary
          className={cx({
            [styles.secondaryMenu]: true,
          })}
          style={{paddingRight: '24px'}}>
          <Button secondaryAlt style={{ marginRight: '12px' }}>
            Join as volunteer
          </Button>
          <Button primary>
            Join as participant
          </Button>
        </NavbarSecondary>
      </Container>
    </div>
  );
};

export default Navbar;
