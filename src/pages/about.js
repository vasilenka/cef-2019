import React from "react"

import Default from "./../layouts/Default/Default"
import SEO from "../components/seo"
import Text from "../primitives/Text/Text"

const NotFoundPage = () => (
  <Default>
    <SEO title="404: Not found" />
    <Text display3 component="h1">
      About
    </Text>
    <Footer />
  </Default>
)

export default NotFoundPage
