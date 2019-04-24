import React from "react"

import Default from "./../layouts/Default/Default"
import SEO from "../components/seo"
import Container from "../layouts/Container/Container";
import Text from "../primitives/Text/Text";
import Footer from "../components/Footer/Footer";

const NotFoundPage = () => (
  <Default>
    <SEO title="404: Not found" />
    <Container narrow>
      <Text display3 component="h1">404 PAGE NOT FOUND</Text>
      <Text medium component="p">
        You just hit a route that doesn&#39;t exist... the sadness.
      </Text>
    </Container>
    <Footer />
  </Default>
)

export default NotFoundPage
