import React from "react"

import Default from "./../layouts/Default"
import SEO from "../components/seo"
import Cover from "../components/Cover/Cover"
import Materials from "../components/PresentationMaterials/PresentationMaterials"
import Footer from "../components/Footer/Footer"

const PresentationMaterials = () => {
  return (
    <Default>
      <SEO title="Presentation Materials" />
      <Cover title="Presentation Materials" />
      <Materials />
      <Footer />
    </Default>
  )
}

export default PresentationMaterials
