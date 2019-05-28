import React from "react"

import Default from "../layouts/Default"
import SEO from "../components/seo"
import Text from "../primitives/Text/Text"
import Footer from "../components/Footer/Footer";

import Cover from "../components/Cover/Cover";
// import Button from "../primitives/Button/Button";
import Container from "../layouts/Container/Container";
import Box from "../components/Box/Box";
import Event from "../components/Event/Event";

const NotFoundPage = () => (
  <Default>
    <SEO title="Join as Participants | Civic Engagement 4.0" />
    <Cover
      title="Participating in International Forum 2019"
      subtitle="Civic Engagement 4.0"
      description="Enjoy the full experience of joining the international forum that addresses the wide-ranging topics in the civil society that is to build an effective community of practitioners—bringing together academics, policymakers, civil society, development partners, foundations and members of communities in rural and urban in national, regional and international levels."
      />
    <Box style={{backgroundColor: '#fff2c6', paddingTop: '96px', paddingBottom: '96px'}}>
      <Container narrow >
        <Text medium component="p">
          With prior registration online, you will be able to join :
        </Text>
        <Event
          title="Thematic Field Visit"
          venue="Kampung Laweyan, Ngampon, Pepe River, Pasar Gede"
          date="August 20, 2019 (Day One)"
          time="8.00 - 15.00"
          >
        </Event>
      </Container>
    </Box>
    <Footer />
  </Default>
)

export default NotFoundPage
