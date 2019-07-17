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
        <footer style={{ paddingTop: '64px' }}>
          <Link to="/">
            <Button primary>
              Let's Back to Home
            </Button>
          </Link>
        </footer>
      </Container>
    </main>
    <Footer />
  </Default>
)

export default NotFoundPage
