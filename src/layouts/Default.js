import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import "./Default.module.scss"
import "./../assets/sass/invoker-layout/grid.module.scss"
import "./../assets/fonts/fonts"

import Navbar from "./../components/Navbar/Navbar"
// import ActionBar from "./../components/ActionBar/ActionBar";
// import ActionMenu from './../components/ActionMenu/ActionMenu';

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
        {/* <ActionBar>
          <ActionMenu to='/'>Home</ActionMenu>
          <ActionMenu to='/about/'>About</ActionMenu>
          <ActionMenu to='/organizers/'>Organizers</ActionMenu>
          <ActionMenu to='/programs/'>Programs</ActionMenu>
          <ActionMenu to='/speakers/'>Speakers</ActionMenu>
          <ActionMenu to='/faq/'>FAQ</ActionMenu>
        </ActionBar> */}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
