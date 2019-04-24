import styles from './ActionBar.module.scss'
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import "./Default.module.scss"
import "./../../assets/sass/invoker-layout/grid.module.scss"
import "./../../assets/fonts/fonts"

import Navbar from "./../../components/Navbar/Navbar"
import ActionBar from "../../components/ActionBar/ActionBar";
import NavbarMenu from "../../components/NavbarMenu/NavbarMenu";
import ActionMenu from '../../components/ActionMenu/ActionMenu';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Navbar bleed/>
        {children}
        <ActionBar>
          <ActionMenu to='/'>Home</ActionMenu>
          <ActionMenu to='/about/'>About</ActionMenu>
          <ActionMenu to='/venue/'>Schedules</ActionMenu>
          {/* <ActionMenu to='/organizers/'>Organizers</ActionMenu> */}
          <ActionMenu to='/speakers/'>Speakers</ActionMenu>
          <ActionMenu to='/venue/'>Venue</ActionMenu>
        </ActionBar>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
