import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const SunanHotel = ({ url, ...restProps }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "photos/venue.jpeg" }) {
            childImageSharp {
              fluid(maxWidth: 960) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <Img
          style={{
            borderRadius: "6px",
            boxShadow: "0px 24px 40px -20px rgba(0,0,0,.40)",
          }}
          fluid={data.placeholderImage.childImageSharp.fluid}
          alt="The Sunan Hotel"
        />
      )}
    />
  )
}
export default SunanHotel
