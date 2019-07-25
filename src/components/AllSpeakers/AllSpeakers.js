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
        <SpeakerKeynoteItem number="III" name="Mr. Adamas Belva Syah Devara*" job="CEO and Founder of Ruang Guru"/>
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
            <SpeakerKeynoteItem number="II" name="Dr. Melani Budianta" job="Professor of Interdisciplinary Humanities"/>
            <SpeakerKeynoteItem number="III" name="Mr. Adamas Belva Syah Devara*" job="CEO and Founder of Ruang Guru"/>
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
          <Speaker name="Dr. H. Najmul Akhyar, S.H., M.H." job="Regent of Lombok Utara (Nusa Tenggara Barat)" noPhoto />
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