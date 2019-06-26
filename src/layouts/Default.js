import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import "./Default.module.scss"
import "./../assets/sass/invoker-layout/grid.module.scss"
import "./../assets/fonts/fonts"

import Navbar from "./../components/Navbar/Navbar"
import MobileNav from "./../components/MobileNav/MobileNav"

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
        <MobileNav />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
