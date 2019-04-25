import React from "react"

import Default from "./../layouts/Default"
import SEO from "../components/seo"
// import Text from "../primitives/Text/Text"
import Footer from "../components/Footer/Footer";
import Cover from "../components/Cover/Cover";
import SpeakerKeynote from "../components/SpeakerKeynote/SpeakerKeynote";
import SpeakerBreakout from "../components/SpeakerBreakout/SpeakerBreakout";

const NotFoundPage = () => (
  <Default>
    <SEO title="Speakers" />
    <Cover
      title="Speakers"
      description=""
      />
    <SpeakerKeynote />
    <SpeakerBreakout />
    <Footer />
  </Default>
)

export default NotFoundPage
