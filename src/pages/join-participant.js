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
    <SEO title="Join as Participants" />
    <Cover
      title="Participating in 2019 International Forum in Solo"
      description="Enjoy the full experience of joining the international forum that addresses the wide-ranging topics in the civil society that is to build an effective community of practitioners—bringing together academics, policymakers, civil society, development partners, foundations and members of communities in rural and urban in national, regional and international levels."
      />
    <Box style={{backgroundColor: '#fff2c6', paddingTop: '96px', paddingBottom: '96px'}}>
      <Container narrow >

        <Event
          title="1. Thematic Field Visit"
          subtitle="The participation to this activity is by invitation only. There will be a suggested donation for each activity."
          venue="Kampung Laweyan, Ngampon, Pepe River, Pasar Gede (details to be announced)"
          date="August 20, 2019 (Day 1)"
          time="8:00am - 3:00pm"
          // url="/"
          register="Register for Thematic Field Visit *"
          // notes=""
          >
          <div>
            <Text heading5>Highlight of the visit:</Text>
            <ul style={{padding: '12px 0px'}}>
              <Text component="li" medium>Visit 1: Solo Batik Production in Kampung Batik Laweyan</Text>
              <Text component="li" medium>Visit 2: Urban Farming and Waste Management in Kampung Ngampon</Text>
              <Text component="li" medium>Visit 3: Participatory relocation project for river bank community in Soloin Pepe River</Text>
              <Text component="li" medium>Visit 4 : Co-existence of Cultural Diversity in Pasar Gede</Text>
            </ul>
          </div>
        </Event>

        <Event
          title="2. Public Forum"
          date="Augus, 21, 2019 (Day 2)"
          venue="Sebelas Maret University, Solo"
          time="8:00am - 5:00pm"
          url="https://forms.gle/KkR4WNm9sWS6F8i96"
          register="Register for Public Forum"
          free
          >
          <Text medium component="p" style={{marginBottom: 0}}>
            The Public Forum will be covering wide-ranging topics of common concerns and interests to the civil society, with special attention to the challenges and opportunities 4.0(Four Point Zero) brings. The Forum encourages interactive sessions which include three workshops where concrete skills of engagements can be learned.
          </Text>
        </Event>

        <Event
          title="3. Mayors Symposium"
          date="August 22, 2019 (Day 3)"
          venue="Sunan Hotel, Solo"
          time="8:30am - 5:30pm"
          url="https://forms.gle/RoTBQbH8vKjYS6Kh9"
          register="Register for Mayors’ Symposium"
          free
          >
          <Text medium component="p" style={{marginBottom: 0}}>
            The Mayors’ symposium enables unique exchanges between citizens and strategic partners, aiming to work together sustainable societies in “Civic Engagement 4.0” spirit. The event will highlight the unique challenges confronted by city and district governments in this fast-changing society, and focus on the good practices and innovative solutions local leaders have in resolving these problems.
          </Text>
        </Event>

        <Event
          title="4. Bike Tour"
          subtitle="The tour will be co-hosted by the City Government of Surakarta. The participation to this bike tour is limited to partners and speakers. More details will be announced."
          date="August 23, 2019 (Day 4)"
          venue="Surakarta"
          time="6:00am - 9:00am"
          // url="/"
          register="Register for Bike Tour"
          // free
          >
          <Text medium component="p" style={{marginBottom: 0}}>
            The Bike tour will introduce participants to the ecosystem of sustainable transportation and walkability in Solo, while allowing participants to enjoy Solo’s must-visit historical landmarks, including Loji Gandrung (the official house of the mayor), Keraton (the palace), and other destination such as Kampung Batik and Museum Batik Danar Hadi.
          </Text>
        </Event>

      </Container>
    </Box>
    <Footer />
  </Default>
)

export default NotFoundPage
