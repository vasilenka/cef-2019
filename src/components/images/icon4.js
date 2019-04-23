import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Image = () => {
  return(
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "icons/icon-lines.png" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
    />
  )
}
export default Image
