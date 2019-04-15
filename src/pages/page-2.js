import React from "react"
import { Link } from "gatsby"

import Default from "./../layouts/Default/Default"
import SEO from "../components/seo"

const SecondPage = () => (
  <Default>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Default>
)

export default SecondPage
