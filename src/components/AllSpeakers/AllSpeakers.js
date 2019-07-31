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
  EEdwards,
  FxHadi,
  DefaultPhoto,
  IbnuSina,
  Melani,
  Najmul,
  Northcott,
  Pongsak,
  Ratchada,
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
        <SpeakerKeynoteItem number="I" name="Prof. Michael Northcott" job="Professor of Religion and Ecology"/>
        <SpeakerKeynoteItem number="II" name="Prof. Melani Budianta" job="Professor of Interdisciplinary Humanities"/>
      </div>
    :
      <>
        {<SpeakerKeynote sectionTitle="Keynote Speakers" id="keynote-speakers" {...props} />}
        <Container narrow>
          <div className={styles.speakersContainer} style={{marginBottom: 0}}>
            <SpeakerKeynoteItem
              number="I"
              name="Prof. Michael Northcott"
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
              name="Prof. Melani Budianta"
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
    <SpeakerKeynote sectionTitle="Public Forum‘s Session Conveners" id="session-conveners" style={{ paddingTop: 48 }}>
      <SpeakerKeynoteItem
        name="Dr. Ratchada Jayagupta "
        photo={<Ratchada />}
        description={
          <>
            <Text medium component="p">
              Dr. Ratchada JAYAGUPTA is the Thailand’s Representative to the ASEAN Commission on the Promotion and Protection of the Rights of Women and Children (ACWC) for Women’s Rights. She is also a senior researcher and a lecturer at the Asian Research Center for Migration at the Institute of Asian Studies, Chulalongkorn University, Bangkok, Thailand. Currently, she is a member of National Sub-Committee on anti-human trafficking especially for women and children. She is also a member of National Sub-Committee on anti-human trafficking in the Mekong Sub-Region.
              In August 2018, she received the distinguished award from the Department of Special Investigation (DSI), Ministry of Justice, Thailand; the Network Model Award 2018 in saluting her collaboration with DSI to accentuate the prevention and protection of the organised crime in Thailand and Southeast Asian region.
            </Text>
            <Text medium component="p">
              Previously, Dr. Ratchada Jayagupta was a National Programme Officer for Governance CEDAW (Convention on the Elimination of All Forms of Discrimination Against Women) Southeast Asia Programme at UN WOMEN regional office for Asia and the Pacific. She was also a National Project Coordinator of United Nations Inter- Agency Project on Human Trafficking in the Mekhong Sub-Region (UNIAP-Thailand Office). Dr. Ratchada received her Ph.D. in Development Administration at the National Institute for Development Administration (NIDA), Thailand (international program). She was a visiting fellow at University of Oxford during her dissertation development in 2006. She was an elected Member of Executive Committee for 11th International Association for the Study of Forced Migration (IASFM) International Conference (2006-2008), and an appointed Member of Program Committee for 9th and 10th IASFM International Conference (2003-2006).
            </Text>
          </>
        }
      />
    </SpeakerKeynote>
  )
}

const MayorsSymposium = props => {
  return (
    <SpeakerKeynote sectionTitle="MAYORS’ SYMPOSIUM’S SPEAKERS" id="symposium-speakers" style={{ paddingTop: 48 }}>
      <SpeakerKeynoteItem
        name="Dr. Toshiyuki Doi"
        photo={<DefaultPhoto />}
        description={
          <>
            <Text medium component="p">
              Toshiyuki Doi works for Mekong Watch, a Tokyo-based NGO, which monitors environmental, social, and human rights impacts of large-scale projects, such as hydropower dams, to ensure that local communities are not negatively affected but are instead benefited by Mekong’s development. Toshi has also helped organize the Solo Forum as Academic Advisor, Institute of Asian Studies, Chulalongkorn University in Thailand.
            </Text>
            <Text medium component="p">
              Toshi’s research interest covers language endangerment and revitalization, bio-cultural diversity, and peoples’ stories. His recent publications include “Plants, Animals, Salt, and Spirits: How People Live with and Talk about the Environment” (With Bampen Chaiyarak, in Militante et al. eds. Humanity and Nature: Traditional, Cultural, and Alternative Perspectives, Focus on the Global South, 2016), “Cheum Chong: Outcomes and Challenges of Chong Language Revitalization Project” (In Premsrirat &amp; Hirsh eds. Language Revitalization: Insights from Thailand. Peter Lang, 2018), and Motion Event Expression of So, a Marginal Language in Sakhon Nakhon Province in Northeast Thailand (Ph.D. thesis, Mahidol University, Thailand, 2018).
            </Text>
          </>
        }
      />
      <SpeakerKeynoteItem
        name="Dr. Elise Edwards"
        photo={<EEdwards />}
        description={
          <>
            <Text medium component="p">
              Elise Edwards is an Assistant Professor of Religion at Baylor University in Waco, Texas.   Dr. Edwards teaches courses in Christian ethics and theology in Baylor’s Department of Religion.  She earned her Ph.D. in Religion at Claremont Graduate University in California, where she studied Theology, Ethics, and Culture.  Prior to pursuing a Ph.D. in theology, Dr. Edwards worked as an architect in Washington D.C. and she still maintains her license to practice architecture.  She earned her Bachelor of Science and Master of Architecture degrees at Florida A&amp;M University, and a Master of Theological Studies at the John Leland Center for Theological Studies, a Baptist seminary.
            </Text>
            <Text medium component="p">
              In her architectural career, Dr. Edwards focused on college and university buildings, which is now where she spends most of her days teaching and doing research. Her research is interdisciplinary, moving between fields of theology, ethics, architectural theory, and aesthetics to examine issues of civic engagement and to question how Christian beliefs and commitments are expressed publicly. As a black feminist, Dr. Edwards focuses her research on cultural expressions by, for, and about women and marginalized communities. She is co-editing the Routledge Handbook of Religion and Cities and also working on her first book, Building Justice: Theological Commitments in Architectural Design, which is about Christian values in architecture.
            </Text>
            <Text medium component="p">
              Dr. Edwards serves her local community and broader academic community through numerous leadership roles in Creative Waco, the American Academy of Religion, and the Society of Christian Ethics.
            </Text>
          </>
        }
      />
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
      <MayorsSymposium/>
      <SpeakerNotes />
    </main>
  )
}

export default AllSpeakers