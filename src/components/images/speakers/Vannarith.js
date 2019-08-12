import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const Vannarith = ({ url, ...restProps }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(
            relativePath: { eq: "speakers/vannarith.jpg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={props => {
        let normalizedProps = props
        if (props.fluid && props.fluid.presentationWidth) {
          normalizedProps = {
            ...props,
            placeholderStyle: {
              objectFit: "contain !important",
            },
          }
        }

        return (
          <Img
            fluid={props.placeholderImage.childImageSharp.fluid}
            {...normalizedProps}
          />
        )
      }}
    />
  )
}
