import React from "react"
import cx from "classnames"

import Default from "./../layouts/Default"
import SEO from "../components/seo"
import Cover from "../components/Cover/Cover"
import Materials from "../components/PresentationMaterials/PresentationMaterials"

const PresentationMaterials = () => {
  return (
    <Default>
      <SEO title="Presentation Materials" />
      <Cover title="Presentation Materials" />
      <Materials />
    </Default>
  )
}

export default PresentationMaterials
