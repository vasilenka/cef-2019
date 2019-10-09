import React from "react"
import { graphql } from "gatsby"

import Default from "./../layouts/Default"
import SEO from "../components/seo"
import Cover from "../components/Cover/Cover"
import ImageSlider from "../components/ImageSlider/ImageSlider"
import VideoSection from "../components/VideoSection/VideoSection"

const Media = ({
  data: {
    allFile: { edges: eventPhotos },
  },
}) => {
  return (
    <Default>
      <SEO title="Event Video &amp; Photos" />
      <Cover title="Event Video and Photos" />
      <VideoSection />
      <ImageSlider eventPhotos={eventPhotos} />
    </Default>
  )
}

export default Media

export const pageQuery = graphql`
  query EventImageMediaQuery {
    allFile(filter: { relativeDirectory: { eq: "event-photo" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1440, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
          relativeDirectory
        }
      }
    }
  }
`
