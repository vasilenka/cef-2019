import React from "react"

import Default from "../layouts/Default"
import SEO from "../components/seo"
import Footer from "../components/Footer/Footer";
import Cover from "../components/Cover/Cover";
import SectionFaq from "../components/SectionFaq/SectionFaq";

const Faq = () => (
  <Default>
    <SEO title="F.A.Q. | Civic Engagement Forum 4.0 Solo" />
    <Cover
      title="Frequently Asked Questions"
      />
    <SectionFaq />
    <Footer />
  </Default>
)

export default Faq
