import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const EcologicalAlert = ({url, ...restProps}) => {
  return (<StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "collaborators/ecological-alert-and-recovery.jpg"}) {
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