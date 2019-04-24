import React from "react"

import Default from "./../layouts/Default/Default"
import SEO from "../components/seo"
import Hero from "../components/Hero/Hero"
import Organizers from "../components/Organizers/Organizers"
import Opportunities from "../components/Opportunities/Opportunities"
import VenueImage from "../components/VenueImage/VenueImage"
import Speakers from "../components/Speakers/Speakers"
import Venue from "../components/Venue/Venue"
import MapContainer from "../components/MapContainer/MapContainer"
import ScheduleOverview from "../components/ScheduleOverview/ScheduleOverview"
import Join from "../components/Join/Join"
import Footer from "../components/Footer/Footer"
import Partners from "../components/Partners/Partners"

const IndexPage = () => (
  <Default>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
    <Organizers />
    <Opportunities/>
    <VenueImage />
    <Speakers />
    <Venue />
    <MapContainer />
    <ScheduleOverview />
    <Join />
    <Partners />
    <Footer />
  </Default>
)

export default IndexPage
