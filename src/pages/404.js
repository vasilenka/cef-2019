import React from "react"
import {Link} from 'gatsby'

import Default from "./../layouts/Default"
import SEO from "../components/seo"
import Container from "../layouts/Container/Container";
import Text from "../primitives/Text/Text";
import Footer from "../components/Footer/Footer";
import Button from "../primitives/Button/Button";

const NotFoundPage = () => (
  <Default>
    <SEO title="404: Not found" />
    <main style={{ backgroundColor: '#fff2c6', paddingTop: '96px', paddingBottom: '96px' }}>
      <Container narrow>
        <Text heading1 component="h1">404 PAGE NOT FOUND</Text>
        <Text medium component="p">
          You just hit a route that doesn&#39;t exist... the sadness.
        </Text>
        <Link to="/">
          <Button primary small>
            Let's back to Home
          </Button>
        </Link>
      </Container>
    </main>
    <Footer />
  </Default>
)

export default NotFoundPage
