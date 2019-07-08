import React from "react"

import Default from "./../layouts/Default"
import SEO from "../components/seo"
import Footer from "../components/Footer/Footer";
import Cover from "../components/Cover/Cover";
import SpeakerKeynote from "../components/SpeakerKeynote/SpeakerKeynote";
import Speaker from '../components/Speaker/Speaker'
import SpeakerKeynoteItem from "../components/SpeakerKeynoteIte/SpeakerKeynoteItem";
import SpeakerNotes from "../components/SpeakerNotes/SpeakerNotes";

import {
  Ahyar,
  Badingah,
  // Eko,
  FxHadi,
  IbnuSina,
  Najwa,
  Pongsak,
  Risma,
} from './../components/images/speakers'

const Speakers = () => (
  <Default>
    <SEO title="Speakers" />
    <Cover
      title="Speakers"
      description=""
      />
      <main>
        <SpeakerKeynote sectionTitle="Keynote Speaker" id="keynote-speaker">
          <SpeakerKeynoteItem photo={<Najwa />}/>
        </SpeakerKeynote>
        <SpeakerKeynote title="Indonesia" sectionTitle="Mayors" id="indonesia">
          <Speaker name="Mr. H. Ahyar Abduh*" job="Mayor of Mataram (Nusa Tenggara Barat)" photo={<Ahyar/>} />
          <Speaker name="Mrs. Hj. Badingah, S.sos.*" job="Regent of Gunung Kidul (Yogyakarta)"  photo={<Badingah/>} />
          <Speaker name="Mr. F.X. Hadi Rudyatmo" job="Mayor of Surakarta (Central Java)"  photo={<FxHadi/>} />
          <Speaker name="Mr. H. Ibnu Sina, S.Pi., M.Si.*" job="Mayor of Banjarmasin (South Kalimantan)"  photo={<IbnuSina/>} />
          <Speaker name="Dr.(H.C.) Ir. Tri Rismaharini, M.T.*" job="Mayor of Surabaya (East Java)"  photo={<Risma/>} />
        </SpeakerKeynote>
        <SpeakerKeynote title="Philippines" id="philippines">
          <Speaker name="Mr. James B. Pooten, Jr." job="Mayor of Municipality of Sagada" />
        </SpeakerKeynote>
        <SpeakerKeynote title="South Korea (to be confirmed)" id="south-korea">
        </SpeakerKeynote>
        <SpeakerKeynote title="Thailand" id="thailand">
          <Speaker name="Mr. Pongsak Yingchoncharoen" job="Mayor of Yala City Municipality" photo={<Pongsak/>}/>
        </SpeakerKeynote>
        <SpeakerNotes />
      </main>
    <Footer />
  </Default>
)

export default Speakers
