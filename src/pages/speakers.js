import React from "react"

import Default from "./../layouts/Default"
import SEO from "../components/seo"
import Footer from "../components/Footer/Footer";
import Cover from "../components/Cover/Cover";
import AllSpeakers from "../components/AllSpeakers/AllSpeakers";

const Speakers = () => (
  <Default>
    <SEO title="Speakers" />
    <Cover title="Speakers" description=""/>
    <AllSpeakers />
    <Footer />
  </Default>
)

export default Speakers
