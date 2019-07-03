import React from "react"

import Default from "./../layouts/Default"
import SEO from "../components/seo"
import Footer from "../components/Footer/Footer";
import Cover from "../components/Cover/Cover";
import SpeakerKeynote from "../components/SpeakerKeynote/SpeakerKeynote";
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
          <Speaker name="Ahyar Abduh*" job="Mayor of Mataram (Nusa Tenggara Barat)" photo={<Ahyar/>} />
          <Speaker name="Badingah*" job="Regent of Gunung Kidul (Yogyakarta)"  photo={<Badingah/>} />
          <Speaker name="Eko Purnomo*" job="Regent of Wonosobo (Central Java)"  photo={<Eko/>} />
          <Speaker name="F.X. Hadi Rudyatmo" job="Mayor of Surakarta (Central Java)"  photo={<FxHadi/>} />
          <Speaker name="Ibnu Sina*" job="Mayor of Banjarmasin (South Kalimantan)"  photo={<IbnuSina/>} />
          <Speaker name="Tri Rismaharini*," job="Mayor of Surabaya (East Java)"  photo={<Risma/>} />
        </SpeakerKeynote>
        <SpeakerKeynote title="Philippines" id="philippines">
          <Speaker name="James Pooten, Jr.*" job="Mayor of Municipality of Sagada" />
        </SpeakerKeynote>
        <SpeakerKeynote title="South Korea (to be confirmed)" id="south-korea">
        </SpeakerKeynote>
        <SpeakerKeynote title="Thailand" id="thailand">
          <Speaker name="Pongsak Yingchoncharoen" job="Mayor of Yala Province" photo={<Pongsak/>}/>
        </SpeakerKeynote>
    </main>
    <Footer />
  </Default>
)

export default NotFoundPage
