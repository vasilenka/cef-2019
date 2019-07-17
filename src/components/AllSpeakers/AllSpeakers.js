import styles from './AllSpeakers.module.scss';
import React from 'react';
import cx from 'classnames';

import SpeakerKeynote from "../SpeakerKeynote/SpeakerKeynote";
import Speaker from '../Speaker/Speaker'
import SpeakerKeynoteItem from "../SpeakerKeynoteIte/SpeakerKeynoteItem";
import SpeakerNotes from "../SpeakerNotes/SpeakerNotes";

import {
  Ahyar,
  Badingah,
  FxHadi,
  IbnuSina,
  Najwa,
  Pongsak,
  Risma,
} from './../images/speakers'
import Text from '../../primitives/Text/Text';
import Container from '../../layouts/Container/Container';

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

const KeynoteSpeakers = props => {
  return (
    <SpeakerKeynote sectionTitle="Keynote Speaker" id="keynote-speaker" {...props}>
      <SpeakerKeynoteItem photo={<Najwa />}/>
    </SpeakerKeynote>
  )
}

const MayorsSpeaker = props => {
  return (
    <>
      <SpeakerKeynote sectionTitle="Mayors" />
      <Container narrow {...props}>
        <section className={styles.wrapper}>
          <div className='col-12'>
            <CountrySection label="Indonesia" id="indonesia">
              <Speaker name="Mr. H. Ahyar Abduh" job="Mayor of Mataram (Nusa Tenggara Barat)" photo={<Ahyar/>} />
              <Speaker name="Mrs. Hj. Badingah, S.sos.*" job="Regent of Gunung Kidul (Yogyakarta)" photo={<Badingah/>} />
              <Speaker name="Mr. F.X. Hadi Rudyatmo" job="Mayor of Surakarta (Central Java)" photo={<FxHadi/>} />
              <Speaker name="Mr. H. Ibnu Sina, S.Pi., M.Si." job="Mayor of Banjarmasin (South Kalimantan)" photo={<IbnuSina/>} />
              <Speaker name="Dr.(H.C.) Ir. Tri Rismaharini, M.T.*" job="Mayor of Surabaya (East Java)" photo={<Risma/>} />
              <Speaker name="Dr. H. Najmul Akhyar, S.H., M.H." job="Regent of Lombok Utara (Nusa Tenggara Barat)" noPhoto />
            </CountrySection>
          </div>
        </section>
        <section className={styles.wrapper}>
          <div className={styles.column}>
            <CountrySection label="Philippines" id="philippines">
              <Speaker name="Mr. James B. Pooten, Jr." job="Mayor of Municipality of Sagada" noPhoto />
            </CountrySection>
          </div>
          <div className={styles.column}>
            <CountrySection label="South Korea (to be confirmed)" id="south-korea"></CountrySection>
          </div>
        </section>
        <section className={styles.wrapper}>
          <div className={styles.column}>
            <CountrySection label="Thailand" id="thailand">
              <Speaker name="Mr. Pongsak Yingchoncharoen" job="Mayor of Yala City Municipality" photo={<Pongsak/>}/>
            </CountrySection>
          </div>
          <div className={styles.column}>
            <CountrySection label="Cambodia" id="cambodia">
              <Speaker name="H. E. Prak Sovann" job="Governor of Preah Vihear Province" noPhoto />
            </CountrySection>
          </div>
        </section>
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