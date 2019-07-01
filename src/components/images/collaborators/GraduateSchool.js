import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const GraduateSchool = ({url, ...restProps}) => {
  return (<StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "collaborators/graduate-school-of-education.png"}) {
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