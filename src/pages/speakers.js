import React from "react"

import Default from "./../layouts/Default"
import SEO from "../components/seo"
// import Text from "../primitives/Text/Text"
import Footer from "../components/Footer/Footer";
import Cover from "../components/Cover/Cover";
import SpeakerKeynote from "../components/SpeakerKeynote/SpeakerKeynote";
import SpeakerBreakout from "../components/SpeakerBreakout/SpeakerBreakout";
import Speaker from '../components/Speaker/Speaker'

const NotFoundPage = () => (
  <Default>
    <SEO title="Speakers | Civic Engagement Forum 4.0 Solo" />
    <Cover
      title="Speakers"
      description=""
      />
    <SpeakerKeynote title="Mayors">
      <Speaker name="Mayor of Surakarta" job="Indonesia" />
      <Speaker name="Mayor of Mataram" job="Indonesia" />
      <Speaker name="Mayor of Surabaya" job="Indonesia" />
      <Speaker name="Mayor of Sleman/Yogyakarta" job="Indonesia" />
      <Speaker name="Mayor of Jember" job="Indonesia" />
      <Speaker name="Mayor of Wonosobo" job="Indonesia" />
      <Speaker name="Mayor of Nan Province" job="Thailand" />
      <Speaker name="Mayor of Yala Province" job="Thailand" />
      <Speaker name="Mayor of Ipoh City" job="Malaysia" />
      <Speaker name="Mayor of Tsukuba City" job="Japan" />
      <Speaker name="Mayor of Sagada City" job="Philippines" />
    </SpeakerKeynote>
    <SpeakerKeynote title="Keynote Speakers">
    </SpeakerKeynote>
    <SpeakerKeynote title="Session Conveners">
    </SpeakerKeynote>
    <SpeakerBreakout />
    <Footer />
  </Default>
)

export default NotFoundPage
