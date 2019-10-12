import styles from "./Navbar.module.scss"
import React from "react"
import cx from "classnames"
// import { Link } from "gatsby"

import NavbarBrand from "../NavbarBrand/NavbarBrand"
import NavbarSecondary from "../NavbarSecondary/NavbarSecondary"
import NavbarPrimary from "../NavbarPrimary/NavbarPrimary"
import NavbarMenu from "../NavbarMenu/NavbarMenu"
import Button from "../../primitives/Button/Button"
import Container from "../../layouts/Container/Container"
import Popout from "../../primitives/Popout/Popout"
import Text from "../../primitives/Text/Text"
import RegistrationEnd from "../RegistrationEnd/RegistrationEnd"
import GenerateCertificate from "../GenerateCertificate/GenerateCertificate"

const Navbar = ({ children, narrow, bleed, className, ...restProps }) => {
  // const [showRegistration, setShowRegistration] = React.useState(false)
  const [showGenerator, setShowGenerator] = React.useState(false)
  return (
    <>
      <nav
        className={cx({
          [styles.root]: true,
        })}
        {...restProps}>
        <div className={styles.pattern}></div>
        <Container
          narrow={narrow}
          bleed={bleed}
          className={cx({
            [styles.container]: true,
            [className]: className,
          })}>
          <NavbarPrimary>
            <NavbarBrand />
            <NavbarMenu containerClassName={styles.primaryMenu} to="/">
              Home
            </NavbarMenu>
            <NavbarMenu containerClassName={styles.primaryMenu} to="/about/">
              About
            </NavbarMenu>
            <Popout
              bottom
              content={() => (
                <>
                  <NavbarMenu
                    containerClassName={styles.dropdown}
                    to="/venue#about-the-sunan-hotel">
                    About The Sunan Hotel
                  </NavbarMenu>
                  <NavbarMenu containerClassName={styles.dropdown} to="/venue#solo-at-a-glance">
                    Solo at A Glance
                  </NavbarMenu>
                  <NavbarMenu
                    containerClassName={styles.dropdown}
                    to="/venue#pratical-information">
                    Practical Information
                  </NavbarMenu>
                </>
              )}>
              {(setVisible, visible) => (
                <button
                  type="button"
                  className={styles.dropdownTrigger}
                  onClick={() => setVisible(!visible)}>
                  <Text heading5Alt className={styles.item} style={{ fontWeight: "700" }}>
                    Venue
                  </Text>
                </button>
              )}
            </Popout>
            <Popout
              bottom
              content={() => (
                <>
                  <NavbarMenu containerClassName={styles.dropdown} to="/organizers">
                    Organizers
                  </NavbarMenu>
                  <NavbarMenu
                    containerClassName={styles.dropdown}
                    to="/organizers#funding-partners">
                    Funding Partners
                  </NavbarMenu>
                </>
              )}>
              {(setVisible, visible) => (
                <button
                  type="button"
                  className={styles.dropdownTrigger}
                  onClick={() => setVisible(!visible)}>
                  <Text heading5Alt className={styles.item} style={{ fontWeight: "700" }}>
                    Organizers
                  </Text>
                </button>
              )}
            </Popout>
            <NavbarMenu containerClassName={styles.primaryMenu} to="/programs/">
              Programs
            </NavbarMenu>
            <NavbarMenu containerClassName={styles.primaryMenu} to="/speakers/">
              Speakers
            </NavbarMenu>
            <NavbarMenu containerClassName={styles.primaryMenu} to="/faqs/">
              FAQs
            </NavbarMenu>
            <Popout
              bottom
              content={() => (
                <>
                  <NavbarMenu containerClassName={styles.dropdown} to="/presentation-materials">
                    Presentation Materials
                  </NavbarMenu>
                  <NavbarMenu containerClassName={styles.dropdown} to="/media">
                    Event Video &amp; Photos
                  </NavbarMenu>
                </>
              )}>
              {(setVisible, visible) => (
                <button
                  type="button"
                  className={styles.dropdownTrigger}
                  onClick={() => setVisible(!visible)}>
                  <Text heading5Alt className={styles.item} style={{ fontWeight: "700" }}>
                    Archives
                  </Text>
                </button>
              )}
            </Popout>
          </NavbarPrimary>
          {/* <NavbarSecondary
            className={cx({ [styles.secondaryMenu]: true })}
            style={{ paddingRight: "24px" }}> */}
          {/* <Button
              primary
              onClick={() => setShowRegistration(true)}
              style={{ marginRight: 12, textTransform: "uppercase" }}>
              Join as a Participant
            </Button> */}
          {/* </NavbarSecondary> */}
        </Container>
      </nav>
    </>
  )
}

export default Navbar
