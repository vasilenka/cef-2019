import styles from "./MobileNav.module.scss"
import React, { useState, useLayoutEffect } from "react"
import cx from "classnames"
import { Link } from "gatsby"

import Logo from "./../../assets/images/logo.png"

const Trigger = ({ className, ...restProps }) => {
  return (
    <div className={styles.trigger} {...restProps}>
      menu
    </div>
  )
}

const Dialog = props => {
  useLayoutEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <div className={styles.dialogContainer}>
      <nav className={cx(styles.dialog)}>
        <img className={styles.brand} src={Logo} alt="Civic Engagement 4.0" />
        <ul className={styles.wrapper}>
          <Link to="/" activeClassName={styles.active}>
            <li className={styles.itemWrapper}>Home</li>
          </Link>
          <Link to="/about" activeClassName={styles.active}>
            <li className={styles.itemWrapper}>About</li>
          </Link>
          <Link to="/venue" activeClassName={styles.active}>
            <li className={styles.itemWrapper}>Venue</li>
          </Link>
          <Link
            to="/venue#about-the-sunan-hotel"
            onClick={() => props.setVisible(false)}
            activeClassName={styles.active}>
            <li className={cx(styles.itemWrapper, styles.secondary)}>About The Sunan Hotel</li>
          </Link>
          <Link
            to="/venue#solo-at-a-glance"
            onClick={() => props.setVisible(false)}
            activeClassName={styles.active}>
            <li className={cx(styles.itemWrapper, styles.secondary)}>Solo at A Glance</li>
          </Link>
          <Link
            to="/venue#pratical-information"
            onClick={() => props.setVisible(false)}
            activeClassName={styles.active}>
            <li className={cx(styles.itemWrapper, styles.secondary)}>Practical Information</li>
          </Link>
          <Link
            to="/organizers"
            onClick={() => props.setVisible(false)}
            activeClassName={styles.active}>
            <li className={styles.itemWrapper}>Organizers</li>
          </Link>
          <Link
            to="/organizers#funding-partners"
            onClick={() => props.setVisible(false)}
            activeClassName={styles.active}>
            <li className={cx(styles.itemWrapper, styles.secondary)}>Funding Partners</li>
          </Link>
          <Link to="/programs" activeClassName={styles.active}>
            <li className={styles.itemWrapper}>Programs</li>
          </Link>
          <Link to="/speakers" activeClassName={styles.active}>
            <li className={styles.itemWrapper}>Speakers</li>
          </Link>
          <Link to="/faq" activeClassName={styles.active}>
            <li className={styles.itemWrapper}>FAQ</li>
          </Link>
          <li className={styles.itemWrapper}>Archives</li>
          <Link
            to="/presentation-materials"
            onClick={() => props.setVisible(false)}
            activeClassName={styles.active}>
            <li className={cx(styles.itemWrapper, styles.secondary)}>Presentation Materials</li>
          </Link>
          <Link
            to="/media"
            onClick={() => props.setVisible(false)}
            activeClassName={styles.active}>
            <li className={cx(styles.itemWrapper, styles.secondary)}>Event Video and Photos</li>
          </Link>
        </ul>
        <button
          type="button"
          className={styles.close}
          onClick={() => props.setVisible(!props.visible)}>
          Close
        </button>
      </nav>
    </div>
  )
}

const MobileNav = ({ className, ...restProps }) => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      {!visible && <Trigger onClick={() => setVisible(!visible)} />}
      {visible && <Dialog visible={visible} setVisible={setVisible} />}
    </>
  )
}

export default MobileNav
