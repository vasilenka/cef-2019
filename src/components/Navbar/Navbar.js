import styles from './Navbar.module.scss'
import React from 'react'
import cx from 'classnames'
import {Link} from 'gatsby'
import WindowSize from "@reach/window-size"

import NavbarBrand from '../NavbarBrand/NavbarBrand'
import NavbarSecondary from '../NavbarSecondary/NavbarSecondary'
import NavbarPrimary from '../NavbarPrimary/NavbarPrimary'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Button from '../../primitives/Button/Button'
import Container from '../../layouts/Container/Container'
import Text from '../../primitives/Text/Text'

const Navbar = ({ children, narrow, bleed, className, ...restProps }) => {
  return (
    <WindowSize>
      {(size) => <div
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
            <NavbarBrand>
              <Text heading3>CEF 4.0</Text>
            </NavbarBrand>
            <NavbarMenu containerClassName={styles.primaryMenu} to="/">Home</NavbarMenu>
            <NavbarMenu containerClassName={styles.primaryMenu} to="/about/">About</NavbarMenu>
            <NavbarMenu containerClassName={styles.primaryMenu} to="/organizers/">Organizers</NavbarMenu>
            <NavbarMenu containerClassName={styles.primaryMenu} to="/programs/">Programs</NavbarMenu>
            <NavbarMenu containerClassName={styles.primaryMenu} to="/speakers/">Speakers</NavbarMenu>
            <NavbarMenu containerClassName={styles.primaryMenu} to="/faq/">FAQ</NavbarMenu>
          </NavbarPrimary>
          <NavbarSecondary
            className={cx({
              [styles.secondaryMenu]: true,
            })}
            style={{paddingRight: '24px'}}>
            <Link to="/join-participant">
              <Button primary small={size.width < 600} style={{ marginRight: '8px', fontSize: size.width < 600 ? '12px' : 'unset' }}>
                JOIN AS A PARTICIPANT
              </Button>
            </Link>
            <Button secondaryAlt small={size.width < 600} style={{ fontSize: size.width < 600 ? '12px' : 'unset' }}>
              JOIN AS A VOLUNTEER
            </Button>
          </NavbarSecondary>
        </Container>
      </div>}
    </WindowSize>
  )
}

export default Navbar
