import React from "react"

import Default from "../layouts/Default"
import SEO from "../components/seo"
import Footer from "../components/Footer/Footer";
import CoverAlt from "../components/Cover/CoverAlt";
import SectionFaq from "../components/SectionFaq/SectionFaq";
import Text from "../primitives/Text/Text";

const Faqs = () => (
  <Default>
    <SEO title="F.A.Q. | Civic Engagement Forum 4.0 Solo" />
    <CoverAlt
      subtitle="Frequently Asked Questions"
      title={
        <>
          <Text display3 component="h2" style={{marginBottom: '12px'}}>Civic Engagement 4.0</Text>
          <Text heading4 style={{ fontStyle: 'italic', paddingTop: '12px' }}>Dignity~Justice~Sustainability</Text><br/>
          <Text heading3 style={{ paddingTop: '0px' }}>2019 International Forum in Solo</Text>
        </>
        }
      />
    <SectionFaq />
    <Footer />
  </Default>
)

export default Faqs
