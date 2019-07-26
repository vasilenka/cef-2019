import styles from './AllSpeakers.module.scss'
import React from 'react'
import cx from 'classnames'

import SpeakerKeynote from "../SpeakerKeynote/SpeakerKeynote"
import Speaker from '../Speaker/Speaker'
import SpeakerKeynoteItem from "../SpeakerKeynoteIte/SpeakerKeynoteItem"
import SpeakerNotes from "../SpeakerNotes/SpeakerNotes"

import {
  Ahyar,
  Badingah,
  FxHadi,
  IbnuSina,
  Melani,
  Najmul,
  Northcott,
  Pongsak,
  Risma,
} from './../images/speakers'
import Text from '../../primitives/Text/Text'
import Container from '../../layouts/Container/Container'

const CountrySection = props => {
  return (
    <section {...props}>
      <Text heading5 component="h3" className={styles.country}>{props.label}</Text>
      <div className={styles.speakersContainer}>
        {props.children}
      </div>
    </section>
  )
}

export const KeynoteSpeakers = props => {
  return (props.noHeader
    ?
      <div className={styles.speakersContainer} style={{marginBottom: '48px'}} >
        <SpeakerKeynoteItem number="I" name="Dr. Michael Northcott" job="Professor of Religion and Ecology"/>
        <SpeakerKeynoteItem number="II" name="Dr. Melani Budianta" job="Professor of Interdisciplinary Humanities"/>
      </div>
    :
      <>
        {<SpeakerKeynote sectionTitle="Keynote Speakers" id="keynote-speakers" {...props} />}
        <Container narrow>
          <div className={styles.speakersContainer} style={{marginBottom: 0}}>
            <SpeakerKeynoteItem
              number="I"
              name="Dr. Michael Northcott"
              job="Professor of Religion and Ecology"
              photo={<Northcott />}
              description={
                <>
                  <Text medium component="p">
                    Michael Northcott is Professor of Religion and Ecology at the Indonesian Consortium of Religious Studies, Universitas Gadjah Mada, Yogyakarta, Indonesia (2019-), and Emeritus Professor of Ethics in the University of Edinburgh (2018-). He was Guest Professor at the University of Heidelberg in 2018. From 2013 to 2016 Michael was PI of a large grant from the UK Arts and Humanities Research Council and led an interdisciplinary team of researchers at the University of Edinburgh who investigated the temporal, political and ethical frames of faith-based environmental activists in the UK and the USA, focusing especially on Ecocongregations Scotland.
                  </Text>
                  <Text medium component="p">
                    Michael has published numerous books and papers at the interface of ethics, ecology, politics and religion including The Environment and Christian Ethics (Cambridge University Press 1996), An Angel Directs the Storm: Apocalyptic Religion and American Empire (I B Tauris 2004), A Moral Climate: The Ethics of Global Warming (Orbis Books 2008), A Political Theology of Climate Change (Eerdmans 2013) and Place, Ecology and the Sacred: The Moral Geography of Sustainable Communities (Bloomsbury 2015). He is currently working on two research projects: on religious ethics in the Anthropocene and on religion and ecology in the Malay Archipelago.
                  </Text>
                </>
              }
              />
            <SpeakerKeynoteItem
              number="II"
              name="Dr. Melani Budianta"
              job="Professor of Interdisciplinary Humanities"
              photo={<Melani />}
              description={
                <>
                  <Text medium component="p">
                    Melani Budianta, is a professor at the Faculty of Humanities, Universitas Indonesia, teaching cultural studies, multiculturalism and literary studies. She got her BA at the English Studies Program, UI, and MA in American Studies at the University of Southern California, and Ph.D. in English from Cornell University. She serves as member of editorial collective in a number of academic journals, including Inter-Asia Cultural Studies, Jurnal Wacana (FIBUI), Wacana Seni (Malaysia), Indian Journal of Gender Studies.  She has also served in various professional and regional/international collaborative efforts in futhering scholarship and exchanges: as fellow and board member in ARENA (Asian Regional Exchange for New Alternatives), Asian Scholarship Foundation, and Consortium of Inter-Asia Cultural Studies Institution; selection committee member in Arryman Fellowship, Asian Public Intellectual,  SEASREP,  and EUROSEAS Book Prize 2015;  research fellow at Asia Research Institute (2010), KITLV (2011); visiting lecturer at Kyoto University (2016) dan University of Naples d’Orientale (2018).
                  </Text>
                  <Text medium component="p">
                    Known as a scholar/activist with interdisciplinary and transdisciplinary engagements, Melani has worked with women’s groups, village community leaders, and cultural workers to promote gender equity, tolerant and culturally vibrant society. Together with Dhita Hapsarani, Melani Budianta recently edited a book entitled Meniti Arus Lokal-Global, Jejaring Budaya Kampung (Jakarta, Infermia Publishing, 2018), written by members of Jaringan Kampung Nusantara (Nusantara Kampung Network), who share their experience in empowering kampung communities.  Her article, “Smart Kampung: Doing Cultural Studies in the Global South” is forthcoming in the journal Critical/Communication Studies. In 2017 she and Manneke Budiman served as literary curators for the Europalia Indonesia Festival in Europe, bringing 11 writers to showcase the diversity of Indonesian culture.
                  </Text>
                  <Text medium component="p">
                    Her other publications include An Ocean of Becoming, Literature from the Indonesian Archipelago (editor, with Manneke Budiman), Jakarta, Lontar Foundation, 2017, Indonesian Women Writers, (editor, with Yvonne Michalik), Regiospectra Verlag, 2015.  Among her published articles are “Work Migration and Cultural Belonging in Globalized Asia”, IJCS 2016 vol 19 (3); “Malang Cosmopolitanism in 1950” in Cosmopolitan Asia; Littoral Epistemologies of the Global South , eds. Sharmani Patricia Gabriel,  Fernando Rosa,  Routledge, 2015;  “Beyond Multiculturalism: Redefining Nationhood in a Globalized Age, “ Naam-Kok, Kim (ed), Multiculturalism and Challenges of Democratization in Europe and Asia,  Ashgate, 2014. With Hilmar Farid and Abidin Kusno, she edited a special issue of Inter-Asia Cultural Studies, Vol 12, 4 December (2011) on Runaway City/Leftover Spaces.
                  </Text>
                </>
              }
              />
          </div>
        </Container>
      </>
  )
}

const MayorsSpeaker = props => {
  return (
    <>
      <SpeakerKeynote sectionTitle="Mayors" />
      <Container narrow {...props}>
        <CountrySection label="Cambodia" id="cambodia">
          <Speaker name="H. E. Prak Sovann" job="Governor of Preah Vihear Province" noPhoto />
          <span></span>
        </CountrySection>
        <CountrySection label="Indonesia" id="indonesia">
          <Speaker name="Mr. H. Ahyar Abduh" job="Mayor of Mataram (Nusa Tenggara Barat)" photo={<Ahyar/>} />
          <Speaker name="Mrs. Hj. Badingah, S.sos." job="Regent of Gunung Kidul (Yogyakarta)" photo={<Badingah/>} />
          <Speaker name="Mr. F.X. Hadi Rudyatmo" job="Mayor of Surakarta (Central Java)" photo={<FxHadi/>} />
          <Speaker name="Mr. H. Ibnu Sina, S.Pi., M.Si." job="Mayor of Banjarmasin (South Kalimantan)" photo={<IbnuSina/>} />
          <Speaker name="Dr. H. Najmul Akhyar, S.H., M.H." job="Regent of Lombok Utara (Nusa Tenggara Barat)" photo={<Najmul/>} />
          <Speaker name="Dr.(H.C.) Ir. Tri Rismaharini, M.T.*" job="Mayor of Surabaya (East Java)" photo={<Risma/>} />
        </CountrySection>
        {/* <CountrySection label="Philippines" id="philippines">
          <Speaker name="Mr. James B. Pooten, Jr." job="Mayor of Municipality of Sagada" noPhoto />
          <span></span>
        </CountrySection>
        <CountrySection label="South Korea (to be confirmed)" id="south-korea"></CountrySection> */}
        <CountrySection label="Thailand" id="thailand">
          <Speaker name="Mr. Pongsak Yingchoncharoen" job="Mayor of Yala City Municipality" photo={<Pongsak/>}/>
          <span></span>
        </CountrySection>
      </Container>
    </>
  )
}

const SessionConveners = props => {
  return (
    <SpeakerKeynote sectionTitle="Public Forum‘s Session Conveners" id="session-conveners">
    </SpeakerKeynote>
  )
}

const AllSpeakers = ({
  className,
  ...restProps
  }) => {
  return (
    <main className={cx(styles.root)} {...restProps}>
      <KeynoteSpeakers/>
      <MayorsSpeaker />
      <SessionConveners />
      <SpeakerNotes />
    </main>
  )
}

export default AllSpeakers