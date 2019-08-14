import styles from "./AllSpeakers.module.scss"
import React from "react"
import cx from "classnames"

import SpeakerKeynote from "../SpeakerKeynote/SpeakerKeynote"
import Speaker from "../Speaker/Speaker"
import SpeakerAlt from "../SpeakerAlt/SpeakerAlt"
import SpeakerKeynoteItem from "../SpeakerKeynoteIte/SpeakerKeynoteItem"
import Keynote from "../Keynote/Keynote"
import SpeakerNotes from "../SpeakerNotes/SpeakerNotes"

import { Details } from "./../SchedulesFull/SchedulesFull"

import {
  Ahyar,
  Badingah,
  BjornLow,
  EEdwards,
  Elodie,
  FxHadi,
  DefaultPhoto,
  Ilyas,
  IbnuSina,
  KeoPiseth,
  Melani,
  Najmul,
  Northcott,
  Pongsak,
  Ratchada,
  Risma,
  RizqaHidayani,
  SriYusnita,
  Ted,
  Toshiyuki,
  Vannarith,
  Wasana,
  Watanabe,
  Sachi,
  Yudhis,
} from "./../images/speakers"
import Text from "../../primitives/Text/Text"
import Container from "../../layouts/Container/Container"

const CountrySection = props => {
  return (
    <section {...props}>
      <Text heading5 component="h3" className={styles.country}>
        {props.label}
      </Text>
      <div className={styles.speakersContainer}>{props.children}</div>
    </section>
  )
}

export const KeynoteSpeakers = props => {
  return props.noHeader ? (
    <div className={styles.speakersContainer} style={{ marginBottom: "48px" }}>
      <SpeakerKeynoteItem
        number="I"
        name="Prof. Michael Northcott"
        job="Professor of Religion and Ecology"
      />
      <SpeakerKeynoteItem
        number="II"
        name="Prof. Melani Budianta"
        job="Professor of Interdisciplinary Humanities"
      />
    </div>
  ) : (
    <>
      {
        <SpeakerKeynote
          sectionTitle="Keynote Speakers"
          id="keynote-speakers"
          {...props}
        />
      }
      <Container narrow>
        <div className={styles.speakersContainer} style={{ marginBottom: 0 }}>
          <Keynote
            number="I"
            name="Prof. Michael Northcott"
            job="Professor of Religion and Ecology"
            photo={<Northcott />}
            description={
              <>
                <Text medium component="p">
                  Michael Northcott is Professor of Religion and Ecology at the
                  Indonesian Consortium of Religious Studies, Universitas Gadjah
                  Mada, Yogyakarta, Indonesia (2019-), and Emeritus Professor of
                  Ethics in the University of Edinburgh (2018-). He was Guest
                  Professor at the University of Heidelberg in 2018. From 2013
                  to 2016 Michael was PI of a large grant from the UK Arts and
                  Humanities Research Council and led an interdisciplinary team
                  of researchers at the University of Edinburgh who investigated
                  the temporal, political and ethical frames of faith-based
                  environmental activists in the UK and the USA, focusing
                  especially on Ecocongregations Scotland.
                </Text>
                <Text medium component="p">
                  Michael has published numerous books and papers at the
                  interface of ethics, ecology, politics and religion including
                  The Environment and Christian Ethics (Cambridge University
                  Press 1996), An Angel Directs the Storm: Apocalyptic Religion
                  and American Empire (I B Tauris 2004), A Moral Climate: The
                  Ethics of Global Warming (Orbis Books 2008), A Political
                  Theology of Climate Change (Eerdmans 2013) and Place, Ecology
                  and the Sacred: The Moral Geography of Sustainable Communities
                  (Bloomsbury 2015). He is currently working on two research
                  projects: on religious ethics in the Anthropocene and on
                  religion and ecology in the Malay Archipelago.
                </Text>
              </>
            }
          />
          <Keynote
            number="II"
            name="Prof. Melani Budianta"
            job="Professor of Interdisciplinary Humanities"
            photo={<Melani />}
            description={
              <>
                <Text medium component="p">
                  Melani Budianta, is a professor at the Faculty of Humanities,
                  Universitas Indonesia, teaching cultural studies,
                  multiculturalism and literary studies. She got her BA at the
                  English Studies Program, UI, and MA in American Studies at the
                  University of Southern California, and Ph.D. in English from
                  Cornell University. She serves as member of editorial
                  collective in a number of academic journals, including
                  Inter-Asia Cultural Studies, Jurnal Wacana (FIBUI), Wacana
                  Seni (Malaysia), Indian Journal of Gender Studies. She has
                  also served in various professional and regional/international
                  collaborative efforts in futhering scholarship and exchanges:
                  as fellow and board member in ARENA (Asian Regional Exchange
                  for New Alternatives), Asian Scholarship Foundation, and
                  Consortium of Inter-Asia Cultural Studies Institution;
                  selection committee member in Arryman Fellowship, Asian Public
                  Intellectual, SEASREP, and EUROSEAS Book Prize 2015; research
                  fellow at Asia Research Institute (2010), KITLV (2011);
                  visiting lecturer at Kyoto University (2016) dan University of
                  Naples d’Orientale (2018).
                </Text>
                <Text medium component="p">
                  Known as a scholar/activist with interdisciplinary and
                  transdisciplinary engagements, Melani has worked with women’s
                  groups, village community leaders, and cultural workers to
                  promote gender equity, tolerant and culturally vibrant
                  society. Together with Dhita Hapsarani, Melani Budianta
                  recently edited a book entitled Meniti Arus Lokal-Global,
                  Jejaring Budaya Kampung (Jakarta, Infermia Publishing, 2018),
                  written by members of Jaringan Kampung Nusantara (Nusantara
                  Kampung Network), who share their experience in empowering
                  kampung communities. Her article, “Smart Kampung: Doing
                  Cultural Studies in the Global South” is forthcoming in the
                  journal Critical/Communication Studies. In 2017 she and
                  Manneke Budiman served as literary curators for the Europalia
                  Indonesia Festival in Europe, bringing 11 writers to showcase
                  the diversity of Indonesian culture.
                </Text>
                <Text medium component="p">
                  Her other publications include An Ocean of Becoming,
                  Literature from the Indonesian Archipelago (editor, with
                  Manneke Budiman), Jakarta, Lontar Foundation, 2017, Indonesian
                  Women Writers, (editor, with Yvonne Michalik), Regiospectra
                  Verlag, 2015. Among her published articles are “Work Migration
                  and Cultural Belonging in Globalized Asia”, IJCS 2016 vol 19
                  (3); “Malang Cosmopolitanism in 1950” in Cosmopolitan Asia;
                  Littoral Epistemologies of the Global South , eds. Sharmani
                  Patricia Gabriel, Fernando Rosa, Routledge, 2015; “Beyond
                  Multiculturalism: Redefining Nationhood in a Globalized Age, “
                  Naam-Kok, Kim (ed), Multiculturalism and Challenges of
                  Democratization in Europe and Asia, Ashgate, 2014. With Hilmar
                  Farid and Abidin Kusno, she edited a special issue of
                  Inter-Asia Cultural Studies, Vol 12, 4 December (2011) on
                  Runaway City/Leftover Spaces.
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
          <Speaker
            name="H. E. Prak Sovann"
            job="Governor of Preah Vihear Province"
            noPhoto
          />
          <span></span>
        </CountrySection>
        <CountrySection label="Indonesia" id="indonesia">
          <Speaker
            name="Mr. H. Ahyar Abduh"
            job="Mayor of Mataram (Nusa Tenggara Barat)"
            photo={<Ahyar />}
          />
          <Speaker
            name="Mrs. Hj. Badingah, S.sos."
            job="Regent of Gunung Kidul (Yogyakarta)"
            photo={<Badingah />}
          />
          <Speaker
            name="Mr. F.X. Hadi Rudyatmo"
            job="Mayor of Surakarta (Central Java)"
            photo={<FxHadi />}
          />
          <Speaker
            name="Mr. H. Ibnu Sina, S.Pi., M.Si."
            job="Mayor of Banjarmasin (South Kalimantan)"
            photo={<IbnuSina />}
          />
          <Speaker
            name="Dr. H. Najmul Akhyar, S.H., M.H."
            job="Regent of Lombok Utara (Nusa Tenggara Barat)"
            photo={<Najmul />}
          />
          <Speaker
            name="Dr.(H.C.) Ir. Tri Rismaharini, M.T.*"
            job="Mayor of Surabaya (East Java)"
            photo={<Risma />}
          />
        </CountrySection>
        {/* <CountrySection label="Philippines" id="philippines">
          <Speaker name="Mr. James B. Pooten, Jr." job="Mayor of Municipality of Sagada" noPhoto />
          <span></span>
        </CountrySection>
        <CountrySection label="South Korea (to be confirmed)" id="south-korea"></CountrySection> */}
        <CountrySection label="Thailand" id="thailand">
          <Speaker
            name="Mr. Pongsak Yingchoncharoen"
            job="Mayor of Yala City Municipality"
            photo={<Pongsak />}
          />
          <span></span>
        </CountrySection>
      </Container>
    </>
  )
}

const SessionConveners = props => {
  return (
    <SpeakerKeynote
      sectionTitle="Public Forum‘s Session Conveners"
      id="session-conveners"
      style={{ paddingTop: 48 }}>
      <SpeakerAlt
        name="Ms. Elodie Jacquet"
        photo={<Elodie />}
        job="Manager of Knowledge and Practice, Dialogue and Civic Engagement Program, Simon Fraser University, Canada"
        description={
          <>
            <Details open="See more">
              <Text medium component="p">
                Elodie Jacquet has been working with the SFU Morris J. Wosk
                Centre for Dialogue and other clients on dialogue and civic
                engagement processes for the past 11 years. She has developed
                and refined her convening and facilitation skills in a wide
                variety of dialogues, from Canada’s World, a national citizen
                engagement initiative on foreign policy to the National
                Reconciliation Gatherings and the more recent Citizens’ Dialogue
                on Canada’s Energy Future. She was involved in the three phases
                of community-based research for the National Inquiry into
                Missing and Murdered Indigenous Women and Girls and was a lead
                Investigator on the Inclusion in Open Government project. She
                holds a Master’s on Global Climate and Energy Policy from SOAS,
                University of London. She is particularly interested in climate
                change issues, democratic development and their complex
                narratives.
              </Text>
            </Details>
          </>
        }
      />
      <SpeakerAlt
        name="Dr. Kohei Watanabe"
        photo={<Watanabe />}
        job="Teikyo University, Japan"
        description={
          <>
            <Details open="See more">
              <Text medium component="p">
                Kohei Watanabe is associate professor at Teikyo University
                (Tokyo, Japan) and a research associate at the Malaysian
                Commonwealth Studies Centre, University of Cambridge, UK. He
                obtained his PhD (Geography, Cambridge) on the topic of
                household waste management. His current research topics include
                analysis of municipal waste statistics, food waste minimisation
                and waste management in Southeast Asia.
              </Text>
            </Details>
          </>
        }
      />
      <SpeakerAlt
        name="Dr. Ratchada Jayagupta"
        photo={<Ratchada />}
        job="Asian Research Center for Migration, Inst. of Asian Studies, Chulalongkorn University"
        description={
          <>
            <Details open="See more">
              <Text medium component="p">
                Dr. Ratchada JAYAGUPTA is the Thailand’s Representative to the
                ASEAN Commission on the Promotion and Protection of the Rights
                of Women and Children (ACWC) for Women’s Rights. She is also a
                senior researcher and a lecturer at the Asian Research Center
                for Migration at the Institute of Asian Studies, Chulalongkorn
                University, Bangkok, Thailand. Currently, she is a member of
                National Sub-Committee on anti-human trafficking especially for
                women and children. She is also a member of National
                Sub-Committee on anti-human trafficking in the Mekong
                Sub-Region.
              </Text>
              <Text medium component="p">
                In August 2018, she received the distinguished award from the
                Department of Special Investigation (DSI), Ministry of Justice,
                Thailand; the Network Model Award 2018 in saluting her
                collaboration with DSI to accentuate the prevention and
                protection of the organised crime in Thailand and Southeast
                Asian region.
              </Text>
              <Text medium component="p">
                Previously, Dr. Ratchada Jayagupta was a National Programme
                Officer for Governance CEDAW (Convention on the Elimination of
                All Forms of Discrimination Against Women) Southeast Asia
                Programme at UN WOMEN regional office for Asia and the Pacific.
                She was also a National Project Coordinator of United Nations
                Inter- Agency Project on Human Trafficking in the Mekhong
                Sub-Region (UNIAP-Thailand Office). Dr. Ratchada received her
                Ph.D. in Development Administration at the National Institute
                for Development Administration (NIDA), Thailand (international
                program). She was a visiting fellow at University of Oxford
                during her dissertation development in 2006. She was an elected
                Member of Executive Committee for 11th International Association
                for the Study of Forced Migration (IASFM) International
                Conference (2006-2008), and an appointed Member of Program
                Committee for 9th and 10th IASFM International Conference
                (2003-2006).
              </Text>
            </Details>
          </>
        }
      />
      <SpeakerAlt
        name="Dr. Sachi Ando"
        photo={<Sachi />}
        job="Office of Global Education, Graduate School of Education, Kyoto University"
        description={
          <>
            <Details open="See more">
              <Text medium component="p">
                She received her Master of Science in Social Work (2005) and PhD
                in Social Work (2010) from the University of Texas at Arlington
                in the USA. Prior to joining Kyoto University in 2018, she was
                Director of the Division for Global Education at Nara Institute
                of Science and Technology (NAIST) in Japan from 2015 to 2018.
                Before NAIST, she was Assistant Professor at Widener University,
                Center for Social Work Education, in the USA, from 2011 to 2015.
              </Text>
              <Text medium component="p">
                At Widener, she taught research related courses and elective
                courses on immigrant and refugee issues. At NAIST, she was in
                charge of strategic planning in strengthening the university’s
                competitiveness in global education, particularly through
                partnerships with universities abroad for faculty/student
                exchange, faculty/staff development programs, and more. Her
                research focus has been on immigrant wellbeing, as well as
                internationalization of professional education from the
                perspective of diversity.
              </Text>
            </Details>
          </>
        }
      />
      <SpeakerAlt
        name="Ms. Supa Yaimuang"
        photo={<DefaultPhoto />}
        job="Sustainable Agriculture Foundation, Thailand"
        description={
          <>
            <Details open="See more">
              <Text medium component="p">
                Supa Yaimuang has been director of the Sustainable Agriculture
                Foundation since 2004. Working together with the farmers’
                organizations, promoting Sustainable Agriculture to the farmers
                and the rural community. And working with the urban people to
                create the city farm in the urban community.
              </Text>
              <Text medium component="p">
                Conducting the research related to the change in the rural
                communities , biodiversity and farmers’ rights, food system and
                food security, climate change and adaptation in the agricultural
                sector. Supporting community-based research and farmer-to-farmer
                education by empowering local communities to develop their own
                learning processes, farmers are able to expand their
                agricultural knowledge and create positive change.
              </Text>
              <Text medium component="p">
                With a concrete basis in sustainable agriculture, farmers have
                also developed alternative market strategies, including Fair
                Trade and local green markets. Connecting the organic farmers’
                movement to national policy debates and works to reform
                government policy to support small farmers and the community
                rights. Strengthening the urban people to access self-reliance
                on food and food safety. And campaigning to build awareness
                about Thailand’s changing food system, urban livelihood and the
                urban environmental problem. Provide the platform for urban
                people to support the farmers on food sovereignty.
              </Text>
            </Details>
          </>
        }
      />
      <SpeakerAlt
        name="Mr. Ted Mayer"
        photo={<Ted />}
        job="Institute of Transformative Learning (INEB)"
        description={
          <>
            <Details open="See more ">
              <Text medium component="p">
                Theodore Mayer is the Academic Director for the Institute for
                Transformative Learning of the Bangkok-based International
                Network of Engaged Buddhists (INEB). He designed and directs
                INEB’s international and interfaith School of English for
                Engaged Social Service (SENS). SENS aims to foster leadership
                that can respond intelligently and compassionately to the
                complex global crisis now developing with climate breakdown at
                its core.
              </Text>
              <Text medium component="p">
                Theodore is an anthropologist of U.S. citizenship who was born
                in India and has resided much of his life in Asia. His earlier
                research and writing focused on movements in Thailand that seek
                inspiration from Buddhist traditions to work for both personal
                and social transformation—a phenomenon known as “socially
                engaged Buddhism.” His recent writing has shifted towards
                inquiry into the nature of transformative learning and teaching.
              </Text>
              <Text medium component="p">
                Theodore is an experienced facilitator of peer-listening
                practices as a support for leadership, and a language teacher
                who has developed curricula for English, Spanish, and Thai. His
                research interests include approaches to transformative
                learning, the nature and trajectories of religious and ethical
                traditions as they work to realize their ideals in society,
                approaches to cultivating the moral imagination, modalities for
                mental and physical healing, social movements, phenomenology,
                and language teaching pedagogy.
              </Text>
            </Details>
          </>
        }
      />
      <SpeakerAlt
        name="Dr. Toshiyuki Doi"
        photo={<Toshiyuki />}
        job="Mekong Watch"
        description={
          <>
            <Details open="See more">
              <Text medium component="p">
                Toshiyuki Doi works for Mekong Watch, a Tokyo-based NGO, which
                monitors environmental, social, and human rights impacts of
                large-scale projects, such as hydropower dams, to ensure that
                local communities are not negatively affected but are instead
                benefited by Mekong’s development. Toshi has also helped
                organize the Solo Forum as Academic Advisor, Institute of Asian
                Studies, Chulalongkorn University in Thailand.
              </Text>
              <Text medium component="p">
                Toshi’s research interest covers language endangerment and
                revitalization, bio-cultural diversity, and peoples’ stories.
                His recent publications include “Plants, Animals, Salt, and
                Spirits: How People Live with and Talk about the Environment”
                (With Bampen Chaiyarak, in Militante et al. eds. Humanity and
                Nature: Traditional, Cultural, and Alternative Perspectives,
                Focus on the Global South, 2016), “Cheum Chong: Outcomes and
                Challenges of Chong Language Revitalization Project” (In
                Premsrirat &amp; Hirsh eds. Language Revitalization: Insights
                from Thailand. Peter Lang, 2018), and Motion Event Expression of
                So, a Marginal Language in Sakhon Nakhon Province in Northeast
                Thailand (Ph.D. thesis, Mahidol University, Thailand, 2018).
              </Text>
            </Details>
          </>
        }
      />
    </SpeakerKeynote>
  )
}

const MayorsSymposium = props => {
  return (
    <SpeakerKeynote
      sectionTitle="OTHER SPEAKERS"
      id="other-speakers"
      style={{ paddingTop: 48 }}>
      <SpeakerAlt
        name="Mr. Bjorn Low"
        photo={<BjornLow />}
        job="Director, Citizen Farm, Singapore"
        description={
          <>
            <Details open="See more">
              <Text medium component="p">
                Bjorn started his career as an online marketing specialist after
                completing his MBA. His stint in marketing brought him to
                London, where during a particularly harsh winter, he realised
                that he wanted to be a farmer. Bjorn quit his job, and for the
                next 3 years, travelled and worked on organic farms across
                Europe.
              </Text>
              <Text medium component="p">
                Having obtained a diploma in Biodynamic Agriculture in East
                Sussex, Bjorn returned back to Singapore with the dream of
                combining his knowledge of farming and his business training. In
                2012, Edible Gardens was started with the hopes of building
                urban farms to help Singapore tackle its food security
                challenges. His passion has been the foundation for Edible
                Garden City Pte Ltd, which today employs a team of 40 full time
                staff members and is carving out its own niche in a new industry
                sector in Singapore, having built more than 200 food gardens for
                hotels, schools, F&B outlets, property developers and home
                gardens.
              </Text>
              <Text medium component="p">
                In recognition of his work, Bjorn has been awarded the following
                accolades:
              </Text>
              <ul style={{ marginBottom: "24px", paddingLeft: "24px" }}>
                <Text
                  medium
                  component="li"
                  style={{
                    listStyle: "disc",
                    paddingTop: "4px",
                    paddingBottom: "4px",
                  }}>
                  <strong style={{ minWidth: 64, display: "inline-block" }}>
                    2017
                  </strong>
                  : EY Entrepreneur of the year (Nominee)
                </Text>
                <Text
                  medium
                  component="li"
                  style={{
                    listStyle: "disc",
                    paddingTop: "4px",
                    paddingBottom: "4px",
                  }}>
                  <strong style={{ minWidth: 64, display: "inline-block" }}>
                    2017
                  </strong>
                  : Tatler Gen T
                </Text>
                <Text
                  medium
                  component="li"
                  style={{
                    listStyle: "disc",
                    paddingTop: "4px",
                    paddingBottom: "4px",
                  }}>
                  <strong style={{ minWidth: 64, display: "inline-block" }}>
                    2018
                  </strong>
                  : Ashoka Social Changemaker Fellowship
                </Text>
                <Text
                  medium
                  component="li"
                  style={{
                    listStyle: "disc",
                    paddingTop: "4px",
                    paddingBottom: "4px",
                  }}>
                  <strong style={{ minWidth: 64, display: "inline-block" }}>
                    2018
                  </strong>
                  : The Peak power list
                </Text>
                <Text
                  medium
                  component="li"
                  style={{
                    listStyle: "disc",
                    paddingTop: "4px",
                    paddingBottom: "4px",
                  }}>
                  <strong style={{ minWidth: 64, display: "inline-block" }}>
                    2018
                  </strong>
                  : The Straits Times Singaporean of the Year (Finalist)
                </Text>
              </ul>
            </Details>
          </>
        }
      />
      <SpeakerAlt
        name="Dr. Chatchawan Chaisuekul"
        photo={<DefaultPhoto />}
        job="Dept. of Biology, Chulalongkorn University"
        description={
          <>
            <Details open="See more">
              <Text medium component="p">
                Chatchawan Chaisuekul is an assistant professor at the
                department of Biology, Faculty of Science, Chulalongkorn
                University with his interests in insects, integrated pest
                management, and sustainable development. He has worked as
                trainer and co-organizer for several youth and farmer
                educational programs in Thailand, particularly in Nan and
                Saraburi Provinces, since 2005 to raise awareness about
                ecological conservation and alternative sustainable management
                practice in farming. Currently, he serves as a deputy director
                of the Center for Learning Network in the Region, Chulalongkorn
                University (CU-CLNR) with responsibility to engage with the
                local communities for development in the areas of food safety
                and food security, ecological restoration, and art and culture
                preservation in Nan province, Thailand as well as ecological
                restoration in Saraburi province.
              </Text>
            </Details>
          </>
        }
      />
      <SpeakerAlt
        name="Dr. Chhaeng Vannarith"
        photo={<Vannarith />}
        job="President, Asian Vision Institute, Cambodia"
        description={
          <>
            <Details open="See more">
              <Text medium component="p">
                Dr Chheang Vannarith is a public policy analyst and government
                relations strategist. He has over a decade of experience as a
                geopolitical and political economic analyst, with a focus on
                Southeast Asia. He is currently serving as President of the
                Asian Vision Institute, Chairman of the Advisor Council of the
                National Assembly of Cambodia, Advisor to the Ministry of
                Foreign Affairs and International Cooperation, and Adjunct
                Lecturer at the School of Social Sciences, Nanyang Technological
                University. He was honored a Young Global Leader by the World
                Economic Forum in 2013 and Southeast Asia Young Leader by the
                IISS-Shangri-La Dialogue in 2016.
              </Text>
              <Text medium component="p">
                He previously served as Visiting Fellow at ISEAS-Yusof Ishak
                Institute (2017- 2018), China Institute of International Studies
                (2016), Institute of Developing Economies in Japan (2012), and
                East-West Center in the United States (2010); Southeast Asia
                Consultant at The Nippon Foundation in Japan (2016-2018);
                Lecturer of Asia Pacific Studies at the University of Leeds
                (2013-2016), Executive Director of Cambodian Institute for
                Cooperation and Peace (2009-2013); Technical Advisor to the
                Cambodian National Assembly (2011); and Assistant to Cambodia’s
                Defense Minister (2011-2012). He received his BA in
                International Relations from the Diplomatic Academy of Vietnam
                in 2002, MA in International Relations from the International
                University of Japan in 2006, and PhD in Asia Pacific Studies
                from the Ritsumeikan Asia Pacific University in 2009.
              </Text>
            </Details>
          </>
        }
      />
      <SpeakerAlt
        name="Dr. Dicky Sofjan"
        photo={<DefaultPhoto />}
        job="Indonesian Consortium for Religious Studies"
        description={
          <>
            <Details open="See more">
              <Text medium component="p">
                Dicky Sofjan, Ph.D. is a Core Doctoral Faculty in the Indonesian
                Consortium for Religious Studies (ICRS), an international,
                interdisciplinary and interreligious Ph.D. program located in
                Graduate School of Universitas Gadjah Mada (UGM) in Yogyakarta,
                Indonesia. He has been serving as the Educational Exchange
                Committee (EEC) member in AMINEF/Fulbright since 2012 and
                involved in a number of initiatives on religious freedom,
                pluralism and human dignity. Dr. Sofjan is an Co-Convener and
                Original Signatory to the Punta Del’Este Declaration in December
                2018 on Human Dignity for Everyone, Everywhere (
                <a
                  href="www.dignityforeveryone.org"
                  rel="noopener noreferrer"
                  target="_blank">
                  www.dignityforeveryone.org
                </a>
                ).
              </Text>
            </Details>
          </>
        }
      />
      <SpeakerAlt
        name="Dr. Elise Edwards"
        photo={<EEdwards />}
        job="Baylor University, United States"
        description={
          <>
            <Details open="See more">
              <Text medium component="p">
                Elise Edwards is an Assistant Professor of Religion at Baylor
                University in Waco, Texas. Dr. Edwards teaches courses in
                Christian ethics and theology in Baylor’s Department of
                Religion. She earned her Ph.D. in Religion at Claremont Graduate
                University in California, where she studied Theology, Ethics,
                and Culture. Prior to pursuing a Ph.D. in theology, Dr. Edwards
                worked as an architect in Washington D.C. and she still
                maintains her license to practice architecture. She earned her
                Bachelor of Science and Master of Architecture degrees at
                Florida A&amp;M University, and a Master of Theological Studies
                at the John Leland Center for Theological Studies, a Baptist
                seminary.
              </Text>
              <Text medium component="p">
                In her architectural career, Dr. Edwards focused on college and
                university buildings, which is now where she spends most of her
                days teaching and doing research. Her research is
                interdisciplinary, moving between fields of theology, ethics,
                architectural theory, and aesthetics to examine issues of civic
                engagement and to question how Christian beliefs and commitments
                are expressed publicly. As a black feminist, Dr. Edwards focuses
                her research on cultural expressions by, for, and about women
                and marginalized communities. She is co-editing the Routledge
                Handbook of Religion and Cities and also working on her first
                book, Building Justice: Theological Commitments in Architectural
                Design, which is about Christian values in architecture.
              </Text>
              <Text medium component="p">
                Dr. Edwards serves her local community and broader academic
                community through numerous leadership roles in Creative Waco,
                the American Academy of Religion, and the Society of Christian
                Ethics.
              </Text>
            </Details>
          </>
        }
      />
      <SpeakerAlt
        name="Ajarn Heng Monychenda"
        photo={<DefaultPhoto />}
        job="Founding Director, Buddhism for Development, Cambodia"
        description={
          <>
            <Details open="See more">
              <Text medium component="p">
                Heng Monychenda is the founding director and visionary of
                Buddhism For Development, a Cambodian NGO dedicated to improving
                the rights and welfare of citizens especially those in rural and
                remote areas of Cambodia’s north-west and central provinces.
              </Text>
              <Text medium component="p">
                After living under the Khmer Rouge regime for nearly 4 years,
                Heng Monychenda moved to the Cambodian-Thai border living with
                the many Cambodians in the camps. At this time Monychenda became
                a Buddhist monk a calling which followed for 17 years, from 1980
                - 1997.
              </Text>
              <Text medium component="p">
                From 1985-1992 he held the position as Director of Khmer
                Buddhist Research Center in Site 2 refugee camp, aiming to
                discover the relationship between Buddhism and Khmer society,
                and determining the Buddhist way that would prevent tragedy from
                happening ever again in Cambodia.
              </Text>
              <Text medium component="p">
                Returning to Cambodia in 1992 under the repatriation program of
                the UN, he located Buddhism for Development at Wat Anlongvil
                (pagoda) in Battambang province where it still exists today.
                From its simple beginnings under difficult conditions, BFD now
                has seven branches located in Battambang, Pailin, Banteay
                Meanchey, Oddor Meanchey, Siemreap, Kampong Thom, and Preah
                Vihear.
              </Text>
              <Text medium component="p">
                Monychenda received training in management skills at the
                Klausenhoff Academy, Germany in 1989, and received his Master
                Degree in Public Administration from John F. Kennedy School of
                Government, Harvard University in 1998.
              </Text>
              <Text medium component="p">
                Monychenda is a passionate Buddhist scholar writing many books
                and papers relating to Buddhist values in governing a country
                for peace and development, in family values, in reconciliation,
                and in development. He is widely recognized as a leader for the
                movement of socially-engaged Buddhism in Cambodia and its role
                in social and community development.
              </Text>
              <Text medium component="p">
                Starting in 2017 Monychenda is co-founding a movement called
                Lotus aiming to integrating health, capacity, and moral values
                into the private sectors in Cambodia to increase and improve
                integrity in the private sectors.
              </Text>
            </Details>
          </>
        }
      />
      <SpeakerAlt
        name="Ms. Hiroko Aihara"
        photo={<DefaultPhoto />}
        job="Japan Perspective News Inc."
        description={
          <>
            <Details open="See more">
              <Text medium component="p">
                Hiroko Aihara is a journalist mainly working at Fukushima,
                Japan. She was born and raised up at Fukushima City, and had
                worked at a local newspaper staff writer for 20 years.During
                working for the newspaper company, she covered many stories of
                medical care, medical ethics, human rights, gender, disaster,
                politics, criminal cases, and more.
              </Text>
              <Text medium component="p">
                After March 11, 2011, TEPCO Fukushima Nuclear Power Plant
                accidents, she has been covering about the nuclear accidents
                from the viewpoint of a local. She has covered a wide range of
                topics, including the evacuation of victims, reconstruction of
                livelihoods, compensation and liability issues, health damage
                including thyroid cancer by radiation, human rights, and
                radioactive contamination of the natural environment, and so on.
              </Text>
              <Text medium component="p">
                The main reporting medias are; Nikkei Business Online, “The View
                Points of Fukushima”(May 2011-January 2013),Fujin-no Tomo”The
                Current Situation in Fukushima”(January-December 2014), and The
                Big Issue Japan “The Situation in Disaster Site ” ( May 2011-
                current). She reported more than 200 articles after March 11,
                2011.
              </Text>
              <Text medium component="p">
                She is a Fulbright Journalist ( 2005, U of Miami, Miller School
                of Medicine), Asian Public Intellectual (2008, U of Philippines
                and Ateneo de Manila University), SSRC Abe Fellowship (2015),
                Disaster Management and Resiliency in the Asia Pacific
                Journalism Fellowship Fellow; East-West Center(2012), Pfizer
                Medical Article Award Japan (2004)“The Problem of Lack of
                Doctors”, Pharmacia Medical Article Award (2001)“Report of
                Medical Treatment and Social Welfare, Circle of Life”.
              </Text>
            </Details>
          </>
        }
      />
      <SpeakerAlt
        name="Dr. Ilyas Mohammed"
        photo={<Ilyas />}
        job="Lecturer in Criminology and Security, University of Liverpool, Singapore"
        description={
          <>
            <Details open="See more">
              <Text medium component="p">
                Dr. Ilyas is a lecturer in Criminology and Security at the
                University of Liverpool, Singapore. His research focuses on
                political violence and terrorism. He is also interested in
                religious &amp; hate crimes, gender &amp; crime, decolonization
                of the social sciences. Currently, he is working on developing
                alternative preventative violent extremism and disengagement
                methodologies.
              </Text>
            </Details>
          </>
        }
      />
      <SpeakerAlt
        name="Dr. Keo Piseth"
        photo={<KeoPiseth />}
        job="Director, Center for Sustainable Development Studies, Asian Vision Institute, Cambodia"
        description={
          <>
            <Details open="See more">
              <Text medium component="p">
                Dr. Keo Piseth is a researcher and practitioner in the field of
                development and environmental management. For fifteen years of
                his professional career, Dr. Keo has been driven by his
                inspiration and passion to contribute towards Cambodia’s
                sustainable and inclusive development. Dr. Keo got his doctoral
                degree from the Joint-Doctoral Programme between National
                University of Singapore and Harvard-Yenching Institute (Harvard
                University) in 2018, and his master degree from the Australian
                National University in 2010.
              </Text>
            </Details>
          </>
        }
      />
      <SpeakerAlt
        name="Ms. Mayu Seto"
        photo={<DefaultPhoto />}
        job="Former Youth Communicator, “World without Nuclear Weapons”"
        description={
          <>
            <Details open="See more">
              <Text medium component="p">
                Mayu Seto was born and raised in Hiroshima. She participated
                &quot;Global Voyage for Nuclear Free World&quot; organized by
                NGO Peace Boat and traveled with a-bomb survivors from Hiroshima
                and Nagasaki, as a Youth Communicator for a World without
                Nuclear Weapons, where she worked to raise awareness of
                catastrophic humanitarian consequences nuclear weapons cause and
                to pass on survivors&#39; story to the next generation.
              </Text>
              <Text medium component="p">
                Living in Hiroshima, now she works as a singer-songwriter and
                wrote a song about her travel with survivors. She also works to
                plan events and educational programs where people from inside
                and outside the city can learn what happened in Hiroshima and
                connect what they learned to what they can do to solve nuclear
                issues today.
              </Text>
            </Details>
          </>
        }
      />
      <SpeakerAlt
        name="Ms. Rizqa Hidayani"
        photo={<RizqaHidayani />}
        job="Urban Planner, Kota Kita Foundation"
        description={
          <>
            <Details open="See more">
              <Text medium component="p">
                Rizqa is an urban planner with a focus on building inclusivity
                and resilience in the development of cities. She believes that
                everybody in the city has equal rights to have a voice in the
                development of their cities. Currently, she is a senior program
                manager at Kota Kita and has been engaged in urban participatory
                planning activities and research since 2013 - in the fields of
                climate change adaptation and resilience, community development
                and informality in 10 different cities in Indonesia. As a
                facilitator, Rizqa has been working closely with a range of
                different stakeholders: from city governments to community
                members including local business associations, women’s groups or
                youth groups, facilitating planning processes and
                action-research. Prior to Kota Kita, she worked at Center for
                Participatory Planning in Semarang that focuses on participatory
                planning and local economic development. As she grew up in a
                suburban area, she has a particular concern on urbanization
                issue, inter-city migration and rural-urban relation in
                Indonesia and conducted research around the issue for her Master
                study at Diponegoro University.
              </Text>
            </Details>
          </>
        }
      />
      <SpeakerAlt
        name="Ms. Sri Yusnita Irda Sari"
        job="Awardees of “Sustainable, Just, Smart Urban Living Innovation Award”"
        photo={<SriYusnita />}
      />
      <SpeakerAlt
        name="Dr. Sukanda Lewis"
        photo={<DefaultPhoto />}
        job="Project Director, Development of Creative Tourism, Chulalongkorn University"
        description={
          <>
            <Details open="See more">
              <Text medium component="p">
                Director responsible for the situation analysis of science,
                research and innovation at Thailand Science Research and
                Innovation (TSRI), Director of National Policy and Transnational
                Relations Division at Thailand Research Fund (TRF), and Deputy
                Director of research at the Institute of Asian Studies,
                Chulalongkorn University, Thailand, with 23 years of experience
                in economic development and civic engagement.
              </Text>
              <Text medium component="p">
                She was an Economist at Asian Development Bank (ADB) in the
                Philippines, working in Laos, Vietnam, Cambodia, Pakistan and
                Thailand from 2002 to 2007. During 2009-2012, Dr. Lewis did
                qualitative studies in several provinces in rural Thailand in
                research supported by the TRF and the Fulbright New Century
                Scholars Program. The two projects are “A Study on Implementing
                a Self-Assessment Tool of Community based Microfinance
                Organizations” and “Weather Index Insurance: Bringing Security
                to Thai Farmers”. From 2012-2013, she served as an International
                Microfinance Specialist and Team Leader of an ADB Technical
                Assistance: Developing a Strategic Framework for Financial
                Inclusion in Thailand, and led a team of international and
                national consultants to develop a national strategy for
                financial inclusion. Recently, Dr. Lewis is the leader of a
                large research project funded by Chulalongkorn University to
                develop creative tourism in Thailand.
              </Text>
            </Details>
          </>
        }
      />
      <SpeakerAlt
        name="Mr. Supardi Asmorobangun"
        photo={<DefaultPhoto />}
        job="Manager of Rumah Kompos Padangtegal, Bali"
        description={
          <>
            <Details open="See more">
              <Text medium component="p">
                Supardi Asmorobangun spent his whole career in journalism (print
                and radio), from 1994 - 2012, before setting his probably final
                stage in the environmental issue. His current position is the
                manager of Rumah Kompos Padangtegal (currently it moves to new,
                nearby massive facility thus known as Padangtegal Recycling
                Plaza, a 7 billion rupiah facility, built by the Indonesian
                Ministry of public work, as a reward for being “2017 Bali best
                village for enviro management”.
              </Text>
              <Text medium component="p">
                That career turn in fact comes to no surprise. Ever since being
                a journalist, editor, managing editor, executive editor, and
                regional correspondent of an international News Agency, his
                patient of writing is no less about culture, environment,
                adventure and education.
              </Text>
              <Text medium component="p">
                “Unless you produce a New York Best Selling book of environment,
                which very unlikely a book on environment protection hits the
                barrier, then you may be able change the people culture of
                littering (the planet). Even if you do so, people hardly
                change,” he says. “People quickly forget an issue”.
              </Text>
              <Text medium component="p">
                “The best, as far as I am concerned, is plunging yourself in the
                pool,” he says. With that enigma, Supardi starts making and
                organizing beach clean up, mountain clean up, underwater clean
                up, in various places on Bali and Java. Indeed, his concerned on
                environmental issue did start to flourish way back in 2002 when
                he passed an open water diver training certification. “What a
                joy being a diver. But what an eye- opening experience it is,
                seen in other perspective. The most beautiful parts of the
                planet is down there below the surface. But the most endangered
                parts of the planet also lay down there below the surface.
              </Text>
              <Text medium component="p">
                “It takes literally multi trillion of dollars to clean up the
                ocean. So it is definitely much-much more easier to prevent
                waste from entering the sea, rather than the crazy idea of
                collecting dirty plastic scattering across the ocean, the
                shallow and the multi kilometer in depth,” he says.
              </Text>
              <Text medium component="p">
                Rumah Kompos Padangtegal in Ubud is indeed the little ship he
                could direct to materialize the idea. “You dream big, but you
                must start it with whatever you can in your hand, whether you
                have big or little access or facility around” he concludes.
              </Text>
            </Details>
          </>
        }
      />
      <SpeakerAlt
        name="Ms. Varangkanang Nimhutta"
        photo={<DefaultPhoto />}
        job="Sustainable Agriculture Foundation, Thailand"
        description={
          <>
            <Details open="See more">
              <Text medium component="p">
                Varangkanang Nimhutta, 35 years old, master degree in Natural
                Resources Management from King Mongkut’s University of
                Technology Thonburi and bachelor degree in Social Work from
                Thammasat University.
              </Text>
              <Text medium component="p">
                Since 2010, working with City Farm Project under Sustainable
                Agriculture Foundation (Thailand). Providing the training,
                learning space on growing organic vegetables, livestock etc. for
                the city people. Supporting and coordinating the city people’s
                groups in Bangkok and suburb to improve their self-reliance
                skills on food and others. The project build up food security to
                different groups of peoples and relate urban farming to
                different dimensions of city development. Disseminating the
                information and knowledge on city farm, food security etc.
                through various communication. Policy advocacy and campaign on
                urban agriculture and livelihood.
              </Text>
              <Text medium component="p">
                With strongly believe that urban agriculture is a key for
                driving transition of city and people which brings food
                security, well-being and sustainable cities to the common from
                learning, practice and people’s participation. The perception on
                relationship with nature, human being, children learning space,
                mind therapy through gardening and also creating and improving
                eco-system for the community in the city will create a
                transition town and building a livable city for all.
              </Text>
            </Details>
          </>
        }
      />
      <SpeakerAlt
        name="Dr. Wasana Wongsurawat"
        photo={<Wasana />}
        job="Deputy Director, IAS, Chulalongkorn University"
        description={
          <>
            <Details open="See more">
              <Text medium component="p">
                Wasana Wongsurawat is an associate professor at the Department
                of History, Faculty of Arts, Chulalongkorn University. She
                teaches courses related to the modern history of China and the
                Chinese Diaspora in Southeast Asia. Her main areas of interest
                in terms of research include the history of nations and
                nationalism, transnationalism, and global history. Her recent
                publications include the edited volume, Sites of Modernity:
                Asian Cities in the Transitory Moments of Trade, Colonialism and
                Nationalism (Springer 2016) and the monograph, The Crown and the
                Capitalists: The Ethnic Chinese and the Founding of the Thai
                Nation (University of Washington Press, 2019).
              </Text>
            </Details>
          </>
        }
      />
      <SpeakerAlt
        name="Mr. Yudhis Thiro Kabul Yunior"
        job="Awardees of “Sustainable, Just, Smart Urban Living Innovation Award”"
        photo={<Yudhis />}
      />
    </SpeakerKeynote>
  )
}

const AllSpeakers = ({ className, ...restProps }) => {
  return (
    <main className={cx(styles.root)} {...restProps}>
      <KeynoteSpeakers />
      <MayorsSpeaker />
      <SessionConveners />
      <MayorsSymposium />
      <SpeakerNotes />
    </main>
  )
}

export default AllSpeakers
