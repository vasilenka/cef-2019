import React from "react"

import Default from "./../layouts/Default"
import SEO from "../components/seo"
// import Text from "../primitives/Text/Text"
import Footer from "../components/Footer/Footer";
import Cover from "../components/Cover/Cover";
import SpeakerKeynote from "../components/SpeakerKeynote/SpeakerKeynote";
// import SpeakerBreakout from "../components/SpeakerBreakout/SpeakerBreakout";
import Speaker from '../components/Speaker/Speaker'
import SpeakerKeynoteItem from "../components/SpeakerKeynoteIte/SpeakerKeynoteItem";
import {
  Ahyar,
  Badingah,
  Eko,
  FxHadi,
  IbnuSina,
  Najwa,
  Pongsak,
  Risma,
} from './../components/images/speakers'

const NotFoundPage = () => (
  <Default>
    <SEO title="Speakers | Civic Engagement Forum 4.0 Solo" />
    <Cover
      title="Speakers"
      description=""
      />
      <main>
        <SpeakerKeynote sectionTitle="Keynote Speaker" id="keynote-speaker">
          <SpeakerKeynoteItem photo={<Najwa />}/>
        </SpeakerKeynote>
        <SpeakerKeynote title="Indonesia" sectionTitle="Mayors" id="indonesia">
          <Speaker name="Ahyar Abduh*" job="Mayor of Mataram (Nusa Tenggara Barat, Indonesia)" photo={<Ahyar/>} />
          <Speaker name="Badingah*" job="Regent of Gunung Kidul (Yogyakarta, Indonesia)"  photo={<Badingah/>} />
          <Speaker name="Eko Purnomo*" job="Regent of Wonosobo (Central Java, Indonesia)"  photo={<Eko/>} />
          <Speaker name="F.X. Hadi Rudyatmo" job="Mayor of Surakarta (Central Java, Indonesia)"  photo={<FxHadi/>} />
          <Speaker name="Ibnu Sina*" job="Mayor of Banjarmasin (South Kalimantan, Indonesia)"  photo={<IbnuSina/>} />
          <Speaker name="Tri Rismaharini*," job="Mayor of Surabaya (East Java, Indonesia)"  photo={<Risma/>} />
        </SpeakerKeynote>
        <SpeakerKeynote title="Thailand" id="thailand">
          <Speaker name="Pongsak Yingchoncharoen" job="Mayor of Yala Province, Thailand" photo={<Pongsak/>}/>
        </SpeakerKeynote>
        <SpeakerKeynote title="Philippines" id="philippines">
          <Speaker name="James Pooten, Jr.*" job="Mayor of Municipality of Sagada" />
        </SpeakerKeynote>
        <SpeakerKeynote title="South Korea (to be confirmed)" id="south-korea">
        </SpeakerKeynote>
    </main>
    <Footer />
  </Default>
)

export default NotFoundPage
