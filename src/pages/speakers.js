import React from "react"

import Default from "./../layouts/Default"
import SEO from "../components/seo"
import Text from "../primitives/Text/Text"
import Footer from "../components/Footer/Footer";

const NotFoundPage = () => (
  <Default>
    <SEO title="404: Not found" />
    <Text display3 component="h1">
      Speakers
    </Text>
    <Footer />
  </Default>
)

export default NotFoundPage
