import React from "react"
import { useInView } from "react-intersection-observer"

import Default from "./../layouts/Default"
import SEO from "../components/seo"
import Hero from "../components/Hero/Hero"
import Organizers from "../components/Organizers/Organizers"
import SpeakersHighlight from "../components/SpeakersHighlight/SpeakersHighlight"
import Venue from "../components/Venue/Venue"
import MapContainer from "../components/MapContainer/MapContainer"
import ScheduleOverview from "../components/ScheduleOverview/ScheduleOverview"
import Footer from "../components/Footer/Footer"
import Partners from "../components/Partners/Partners"
import Mission from "../components/Mission/Mission"
import { graphql } from "gatsby"
import ImageSlider from "../components/ImageSlider/ImageSlider"
import YoutubeVideo from "../components/YoutubeVideo/YoutubeVideo"

// import loadable from '@loadable/component'
// const Partners = loadable(() => import("../components/Partners/Partners"))
// const Join = loadable(() => import("../components/Join/Join"))
// const ScheduleOverview = loadable(() => import("../components/ScheduleOverview/ScheduleOverview"))

const IndexPage = ({
  data: {
    allFile: { edges: eventPhotos },
    file: {
      childImageSharp: { fluid: coverPhoto },
    },
  },
}) => {
  const [ref, inView] = useInView({
    rootMargin: "0px 0px 0px 0px",
    threshold: 0,
    triggerOnce: true,
  })

  const [heroRef, heroInView] = useInView({
    rootMargin: "0px 0px 0px 0px",
    threshold: 0,
    triggerOnce: true,
  })

  let [showVideo, setShowVideo] = React.useState(false)

  return (
    <Default>
      <SEO
        title="Home"
        description="Civic Engagement 4.0: Dignity ~ Justice ~ Sustainability is a regional platform for mutual learning, action and advocacy, working toward achieving dignity, justice and sustainability in Southeast Asian (SEA) society, where the wave of Fourth Industrial Revolution is affecting each of us living in the region, we become increasingly aware of the need for multi-stakeholder collaboration which can effectively respond to it. The platform is expected to facilitate exchanges of knowledge for further collaboration in implementing actions and advocacy to achieve dignity, justice and sustainability among active members of communities working on the ground at the national, regional and international levels."
        keywords={[
          `civic engagement forum`,
          `kotakita`,
          `chula university`,
          `solo`,
          `event`,
          `2019`,
          `civic engagement 4`,
          `justice`,
          `dignity`,
          `sustainability`,
        ]}
      />
      <span ref={heroRef} />
      <Hero setShowVideo={setShowVideo} cover={coverPhoto} />
      {showVideo && <YoutubeVideo setShowVideo={setShowVideo} />}
      <Organizers />
      {heroInView ? <ImageSlider eventPhotos={eventPhotos} /> : null}
      <Mission />
      <span ref={ref} />
      <SpeakersHighlight />
      <Venue />
      <MapContainer inView={inView} />
      <ScheduleOverview />
      <Partners />
      <Footer />
    </Default>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query EventImageQuery {
    allFile(filter: { relativeDirectory: { eq: "event-photo" } }, sort: { fields: name }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1440, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          relativeDirectory
        }
      }
    }
    file(name: { eq: "event-01" }) {
      childImageSharp {
        fluid(maxWidth: 720, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
