import styles from "./SchedulesFull.module.scss"
import React from "react"
import cx from "classnames"

import Box from "../Box/Box"
import Container from "../../layouts/Container/Container"
import Text from "../../primitives/Text/Text"
import ScheduleItem from "../ScheduleItem/ScheduleItem"
import Day from "../Day/Day"
import ScheduleSection from "../ScheduleSection/ScheduleSection"
import Talk from "../Talk/Talk"
import ScheduleVenue, { ScheduleVenueAlt } from "../ScheduleVenue/ScheduleVenue"
import TalkSpeaker from "../TalkSpeaker/TalkSpeaker"
import SubTalk from "../SubTalk/SubTalk"

import Arrow from "./../icons/arrow.inline.svg"

const Role = props => (
  <Text
    component="h4"
    heading5={props.name ? true : false}
    heading6={!props.name ? true : false}
    className={styles.role}>
    {props.label}{" "}
    <span style={{ textTransform: "capitalize" }}>
      {props.name && props.name}
    </span>
  </Text>
)
const Country = props => (
  <Text component="h4" heading6 className={styles.country}>
    {props.label}
  </Text>
)

export const Details = props => {
  const [show, setShow] = React.useState(false)
  return (
    <>
      <button
        type="button"
        className={styles.detailAction}
        onClick={() => setShow(!show)}
        {...props}>
        {show ? (
          <>
            {props.close ? props.close + " " : "Hide details "}
            <Arrow style={{ width: "24px", transform: "rotate(180deg)" }} />
          </>
        ) : (
          <>
            {props.open ? props.open + " " : "Show details "}
            <Arrow style={{ width: "24px" }} />
          </>
        )}
      </button>
      {show && (
        <main className={styles.detail}>
          {props.children}
          <button
            type="button"
            className={styles.detailAction}
            onClick={() => setShow(!show)}>
            {show ? (
              <>
                {props.close ? props.close + " " : "Hide details "}
                <Arrow style={{ width: "24px", transform: "rotate(180deg)" }} />
              </>
            ) : (
              <>
                {props.open ? props.open + " " : "Show details "}
                <Arrow style={{ width: "24px" }} />
              </>
            )}
          </button>
        </main>
      )}
    </>
  )
}

const MemoryResillence = () => {
  return (
    <Details>
      <Text heading3Alt component="h3" style={{ marginBottom: "24px" }}>
        Memory as Resilience: Inter-spatial and generational Transmission of
        Disaster Experience to Build a Sustainable Society
      </Text>
      <Text medium component="p" style={{ marginBottom: "24px" }}>
        In this workshop, we view resilience as the extent to which
        urban/community residents can access opportunities to “narrate” their
        experiences with the disaster to find ways to cope with it, rather than
        simply relying on means given externally, in particular infrastructure
        improvement, training, media reports, etc. In this definition,
        survivors’ practices such as recalling their first meals after the
        disaster while conversing with their neighbors, taking pictures of their
        houses which are being dismantled, or even resisting to talking about
        the disaster can all count as “acts of resilience”.
      </Text>
      <Text medium component="p" style={{ marginBottom: "24px" }}>
        We first try to substantiate this view of resilience by understanding
        how disaster-affected people try to make sense of what has happened to
        them, while looking into several disasters which have occured in Asia:
        an atomic bomb attack and a recent large-scale flooding in Hiroshima,
        nuclear explosions triggered by an earthquake and tsunami in Fukushima,
        mass killing and other crimes against humanity committed by Khmer Rough
        in Cambodia, and impacts felt by the disaster-vulnerable riverbank
        community in Kali Code, Indonesia. The guiding question is when, how,
        why, through what (digital) means, and with whom do disaster survivors
        talk (or not talk) about the disaster?
      </Text>
      <Text heading4 component="h3" style={{ marginBottom: "12px" }}>
        Following and / or during this discussion, we also try to answer
        questions such as:
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
          Learn best practices;
        </Text>
        <Text
          medium
          component="li"
          style={{
            listStyle: "disc",
            paddingTop: "4px",
            paddingBottom: "4px",
          }}>
          “Acts of resilience” are very diverse.How diverse do we like them to
          be ? As an extreme example, can we consider memory of a new- born baby
          at the time of the disaster be an act of resilience ? Can “outsiders”
          like volunteer rescuers talk about their disaster experiences ? What
          about news reporters, scientists, and others?
        </Text>
        <Text
          medium
          component="li"
          style={{
            listStyle: "disc",
            paddingTop: "4px",
            paddingBottom: "4px",
          }}>
          Do “acts of resilience” contribute to building a resilient and
          sustainable(and just and dignified) society ? If so, how ? How are
          they different from other more “usual” measures of resilience such as
          infrastructure development and security training ?
        </Text>
      </ul>
    </Details>
  )
}

const ListeningPartnership = () => {
  return (
    <Details>
      <Text heading3Alt component="h3" style={{ marginBottom: "24px" }}>
        Listening Partnerships: Living Fully and Leading with Integrity in a
        Time of Crisis
      </Text>
      <Text medium component="p" style={{ marginBottom: "24px" }}>
        The many crises facing the world’s peoples at present—climate change,
        severe social inequality and social division, challenges to democracy,
        and the resort to violence—do not require us to panic. Quite the
        opposite is true. We must be able to think clearly, join together with
        others, and take action. Forming listening partnerships with others is a
        very direct way of enabling us to do all three of these important tasks.
        They help us to realize that we can live beautiful lives and act with
        integrity in the midst of difficult times. Such partnerships allow us to
        see each other’s humanity, move us beyond our isolation and indulgence
        in consumer satisfactions, and give us the courage to act boldly.
      </Text>
      <Text medium component="p" style={{ marginBottom: "24px" }}>
        This workshop provides the basic instructions in how to create and
        maintain listening partnerships as effective tools of self-knowledge,
        transformation, and engagement with others and the wider world. This is
        a hands-on workshop, and participants will receive the guidance
        necessary to practice listening to others and being listened to safely
        and effectively within the workshop itself. Please sign up in advance,
        as the number of participants will be limited to 50.
      </Text>
    </Details>
  )
}

const Education = () => {
  return (
    <Details>
      <Text heading3Alt component="h3" style={{ marginBottom: "24px" }}>
        Education 4.0: Knowledge, Innovation and Civic Engagement toward Global
        Leadership
      </Text>
      <Text medium component="p" style={{ marginBottom: "24px" }}>
        In this globalized and digitalized world, or society 4.0, social and
        human phenomena are even more interconnected. Technological and
        scientific advances aim at connecting, not dividing, people and
        community toward shared missions, as shown in various projects under the
        UN’s SDGs. Today’s education is expected to produce higher social impact
        on social / human issues we face today. To nurture tomorrow’s leaders,
        how should educators transform its teaching and learning modalities?
      </Text>
      <Text medium component="p" style={{ marginBottom: "24px" }}>
        This session will first introduce two panels who share their efforts in
        experiential and participatory learning, followed by small group
        discussion with the participants. The session will conclude with the
        wrap-up discussion to consider what “Education 4.0” should be like.
      </Text>
      <Text heading4 component="h3" style={{ marginBottom: "12px" }}>
        Learning Objectives:
      </Text>
      <Text medium component="p">
        Upon attendance, the session participants will be able to
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
          Learn best practices;
        </Text>
        <Text
          medium
          component="li"
          style={{
            listStyle: "disc",
            paddingTop: "4px",
            paddingBottom: "4px",
          }}>
          Examine strengths and weaknesses, as well as potentials and pitfalls,
          of these case examples; and
        </Text>
        <Text
          medium
          component="li"
          style={{
            listStyle: "disc",
            paddingTop: "4px",
            paddingBottom: "4px",
          }}>
          Generate ideas for applying the knowledge to their local examples and
          beyond.
        </Text>
      </ul>
    </Details>
  )
}

const StrategicLens = () => {
  return (
    <Details>
      <Text heading3Alt component="h3" style={{ marginBottom: "24px" }}>
        Civic Engagement, a Strategic Lens
      </Text>
      <Text medium component="p" style={{ marginBottom: "24px" }}>
        Expert opinion. Tight budgets. Electoral platforms. Public input.
        Everyone agrees that public engagement is important, but decision-making
        can feel like a crowded space. To succeed, engagement efforts are under
        increasing expectations to find authentic questions, get beyond the
        “same ten people,” and account for the practical constraints faced by
        decision-makers.
      </Text>
      <Text medium component="p" style={{ marginBottom: "24px" }}>
        This workshop will provide senior staff in local government an
        opportunity to address the tough questions of sponsoring and planning
        public engagement initiatives. Participants will explore tools and
        principles to help design high-quality public engagement processes and
        to clarify strategic intentions before hitting the streets. Using
        applied case studies and connecting with their current projects,
        participants will leave with practical skills to apply in their
        communities.
      </Text>
      <Text heading4 component="h3" style={{ marginBottom: "12px" }}>
        Learning Objectives:
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
          Understanding when to engage, and creating role clarity between
          members of the public, experts, staff and elected officials
        </Text>
        <Text
          medium
          component="li"
          style={{
            listStyle: "disc",
            paddingTop: "4px",
            paddingBottom: "4px",
          }}>
          Defining your local government’s intended outcomes for public
          engagement
        </Text>
        <Text
          medium
          component="li"
          style={{
            listStyle: "disc",
            paddingTop: "4px",
            paddingBottom: "4px",
          }}>
          Integrating the IAP2 spectrum of participation into a wider strategic
          context
        </Text>
        <Text
          medium
          component="li"
          style={{
            listStyle: "disc",
            paddingTop: "4px",
            paddingBottom: "4px",
          }}>
          Reviewing the characteristics of highly effective public engagement,
          including structured questions to ask when starting a new engagement
          initiative
        </Text>
        <Text
          medium
          component="li"
          style={{
            listStyle: "disc",
            paddingTop: "4px",
            paddingBottom: "4px",
          }}>
          Supporting alignment of public engagement goals and planning across
          your organization
        </Text>
        <Text
          medium
          component="li"
          style={{
            listStyle: "disc",
            paddingTop: "4px",
            paddingBottom: "4px",
          }}>
          Planning post-engagement follow-through
        </Text>
      </ul>
    </Details>
  )
}

const UrbanFarming = () => {
  return (
    <Details>
      <Text heading3Alt component="h3" style={{ marginBottom: "24px" }}>
        Urban Farming: A way for City Planning to Achieve Food Security and
        Sovereignty
      </Text>
      <Text medium component="p" style={{ marginBottom: "24px" }}>
        Urbanization is happening to every country in Asia, especially over the
        past decade. The growth rate of the city is remarkable. The United
        Nations Food and Agriculture Organization (FAO) predicts that in 2050,
        up to 2.4 billion people or 66 percent of the world's population will
        live in cities. The expansion of the city takes over rural areas which
        are sources for food production. Urbanization thus directly impacts our
        food safety, security and sovereignty. It also affects food
        transportation and distribution systems.
      </Text>
      <Text medium component="p" style={{ marginBottom: "24px" }}>
        Urban agriculture is becoming an important tool for sustainable urban
        planning, which helps fight the challenge of rapid urbanization. Its
        roles in urban planning have been widely accepted in many parts of the
        world, including the Asia-Pacific region. Urban agriculture provides
        urban dwellers with better food security and sovereignty. It also
        provides urban residents, especially urban poor and marginalized groups,
        with rights to safe food, thus helping alleviate poverty. Urban
        agriculture is regarded as a mechanism to reduce social inequality and
        increase resilience. The United Nations Sustainable Development Goals
        (SDGs) target to create sustainable cities and communities. The SDGs
        promote investment in effective public transport systems, creation of
        green public spaces and improved urban planning and management in ways
        that are both participatory and inclusive. Urban agriculture can thus be
        a tool that can contribute to driving sustainable development.
      </Text>
      <Text medium component="p" style={{ marginBottom: "24px" }}>
        This seminar will be an opportunity to share and discuss experiences and
        lessons related to urban agriculture in some Asia-Pacific countries,
        including Thailand, Singapore and Indonesia. Focus will be on cases in
        which urban dwellers practice urban agriculture for themselves to
        achieve food safety, security, self-reliance and sovereignty. Their
        experiences and lessons will be viewed and discussed in the wider
        perspective of urban planning to create livable urban environment. Urban
        planning which provides urban residents with fair access to resources
        can reduce economic inequality and improve the quality of life. Such
        experiences and lessons learned also show key roles of civil society in
        achieving sustainable urban development.
      </Text>
    </Details>
  )
}

const ShowcasingInnovativeProducts = () => {
  return (
    <Details>
      <Text heading3Alt component="h3" style={{ marginBottom: "24px" }}>
        Showcasing Innovative Products for Urban Living
      </Text>
      <Text medium component="p" style={{ marginBottom: "24px" }}>
        The projection of sustainable, just, and smart urban living demands the
        creative and innovative initiatives that would be part of the
        realization of such dream. It appeals for the participation and civic
        engagement of the larger segment of society in addressing public concern
        and as the fabric of the sustainability.
      </Text>
      <Text medium component="p" style={{ marginBottom: "24px" }}>
        This session will be the showcasing of the two innovative initiatives
        produced by the concern citizens. They were the winner of the
        competition of “Sustainable, Just and Smart Urban Living Innovation
        Award” conducted on May and June 2019. The winner will tell their
        stories behind the product initiative, describe the specification and
        demonstrate the usage and utilization of the products. Through this
        presentation, it hopes to open the serious discussion of sustainable,
        just and smart urban living and moreover, to invite the larger public
        participation and engagement.
      </Text>
      <Text heading4 component="h3" style={{ marginBottom: "12px" }}>
        Learning Objectives:
      </Text>
      <Text medium component="p">
        Upon attendance, the session participants will be able to
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
          Update their knowledge for the new initiative of public participation
          on the innovation for the urban living;
        </Text>
        <Text
          medium
          component="li"
          style={{
            listStyle: "disc",
            paddingTop: "4px",
            paddingBottom: "4px",
          }}>
          Invite public and corporate investment to develop the product to
          ensure its sustainability; and
        </Text>
        <Text
          medium
          component="li"
          style={{
            listStyle: "disc",
            paddingTop: "4px",
            paddingBottom: "4px",
          }}>
          Activate the public awareness of the importance of the initiative and
          boost further the creative ideas.
        </Text>
      </ul>
    </Details>
  )
}

const MobilityChangingSEA = props => {
  return (
    <Details>
      <Text heading3Alt component="h3" style={{ marginBottom: "24px" }}>
        Mobility in the Changing Landscape of Southeast Asia
      </Text>
      <Text medium component="p" style={{ marginBottom: "24px" }}>
        Migration can be defined as the movement of people from one place to
        another, which can be either assisted or independent, and can be either
        domestic or international(Jayagupta, R. 2013).Within the globalization
        and the need for cheap labor for the competitive market, migrant workers
        are placed in a more precarious situation.Basically, economic disparity
        is often the motivation factor for migration.Free trade, among others,
        has been cited as an important contributing factor for migration(Public
        Citizen, 2013).Our session titled “Mobility in the Changing Landscape of
        Southeast Asia”, this session will begin by the illustration of an
        introduction of migration and trend in Cambodia and its effects in
        economy, social and environment.Followed by the dynamics of inter -
        region human mobility in secondary cities in Indonesia, focusing on the
        bi - locality of circular migrants.Globalization issue related to
        migration will be presented as a driving force for free movement of
        people.The presentation on labor migration from Southeast Asia to Taiwan
        on the issues, public responses and future development will be
        discussed.
      </Text>
    </Details>
  )
}

const GoodCity = () => {
  return (
    <Details style={{ marginTop: 0, marginBottom: 24 }}>
      <Text heading3Alt component="h3" style={{ marginBottom: "24px" }}>
        The Good City? From the City as Cradle of Civilisation to the
        Sustainable Cities of Tomorrow
      </Text>
      <Text medium component="p" style={{ marginBottom: "24px" }}>
        The nation state and business corporations came late to the party in the
        evolution of civilisations. All the great advances in civilisation until
        the twentieth century were birthed by civic organisations within cities
        such as city and craft guilds, religious houses, universities, and
        democratic assemblies. Cities were also their own financial masters,
        collecting taxes at city gates and bridges to pay for the city’s
        infrastructure, governance structures and so on. However the early
        modern spread of Empire, and of the modern private property regime,
        eventually gave rise to a new kind of political entity - the nation
        state which took over many of the ancient rights of cities, and to new
        powerful economic actors - business corporations - which exercise
        propertied dominion independent of the city authorities in which they
        are based. But with the rise of the ecological crisis, and the
        realisation that the centralised nation state favoured by many European
        nations and exported as a model to other nations, is often too
        centralised and remote to ensure the ecological health and economic
        prosperity of its constituent cities, there is growing recognition of
        the urgency of reviving the civic polity, and local economy, of the City
        as means to address the related crises of air and climate pollution,
        polluted ground water, diseases - including both malnutrition and
        obesity - caused by the non-availability of local, fresh food and
        over-reliance on industrially procured food supplies, and rising wealth
        inequality. In this talk Professor Northcott will show how the great
        civic advances of the past can inform and resource the urgent
        contemporary quest for just, participatory and ecologically sustainable
        urban settlements which also build on the latest Earth System science
        and engage sustainable and renewable technologies in shaping the future
        urban habitat.
      </Text>
    </Details>
  )
}

const ToBeConfirmed = () => (
  <footer
    style={{
      width: "fit-content",
      marginTop: "24px",
      marginBottom: "24px",
      fontSize: "12px",
      padding: "8px",
      backgroundColor: "rgba(0,0,0,.04)",
    }}>
    <strong>* To be confirmed</strong>
  </footer>
)

const SchedulesFull = ({ className, ...restProps }) => {
  return (
    <Box className={cx(styles.root)} {...restProps}>
      <Container narrow className={cx(styles.container)}>
        <ScheduleSection>
          <Day date="Day 0" day="Monday, August 19" />
          <ScheduleItem hour="All day" tag="">
            <SubTalk title="Arrival of Speakers and Invited Participants">
              <Text component="p" medium>
                Accomodation at{" "}
                <a
                  href="https://thesunanhotelsolo.com/"
                  target="_blank"
                  rel="noopener noreferrer">
                  The Sunan Hotel
                </a>
              </Text>
              <Text small>
                Jl. A. Yani No.40, Kerten, Laweyan, Kota Surakarta
                <br />
                Jawa Tengah 57143, Indonesia
              </Text>
            </SubTalk>
          </ScheduleItem>
        </ScheduleSection>

        <ScheduleSection>
          <Day
            date="Day 1"
            day="Tuesday, August 20"
            theme="Thematic Field Visit"
          />
          <ScheduleItem hour="8:00am - 1:00pm" tag="Field Experience">
            <Talk title="Thematic Site Visits">
              <SubTalk title="Locating Sustainability in Solo and Its Communities">
                <TalkSpeaker name="Facilitated by Kota Kita" />
              </SubTalk>
              <ScheduleVenue>Solo Vicinity</ScheduleVenue>
            </Talk>
          </ScheduleItem>
          <ScheduleItem hour="3:00pm - 4:30pm" tag="Executive Meeting">
            <Talk title="Meeting of Conveners">
              <Role label="Facilitators" />
              <TalkSpeaker
                name="Prof. Surichai Wun ‘Gaeo"
                job="Chulalongkorn University"
              />
              <TalkSpeaker name="Dr. Toshiyuki Doi" job="Mekong Watch" />
              <TalkSpeaker
                name="Mr. Ted Mayer"
                job="Institute of Transformative Learning, INEB"
              />
              <TalkSpeaker name="Dr. Dicky Sofjan" job="ICRS" />
              <TalkSpeaker
                name="Ms. Michiko Yoshida"
                job="Chulalongkorn University"
              />
              <TalkSpeaker name="Mr. Ahmad Rifai" job="Kota Kita Foundation" />
              <ScheduleVenue>The Sunan Hotel</ScheduleVenue>
            </Talk>
          </ScheduleItem>
          <ScheduleItem hour="6:00pm" tag="">
            <SubTalk title="Art Exhibition Opening">
              <Talk title="Urban Landscape, Our Communities"></Talk>
            </SubTalk>
            <Text component="p" medium>
              Opening address by Director of Exhibition,{" "}
              <strong>Dr. Mohamad</strong>, Graduate School Universitas Gadjah
              Mada (UGM)
            </Text>
            {/* <Role label="Navigators" />
            <TalkSpeaker
              name="Associate Professor Dr. Yeoh Seng Guan"
              job="School of Arts and Social Sciences, Monash University, Malaysia" />
            <TalkSpeaker
              name="Dr. Dicky Sofjan"
              job="ICRS" /> */}
            <ScheduleVenue>The Sunan Hotel</ScheduleVenue>
          </ScheduleItem>
          <ScheduleItem hour="7:00pm - 8:30pm">
            <Talk title="Opening Ceremony">
              <SubTalk title="Welcome Address">
                <TalkSpeaker
                  name="Mr. F.X. Hadi Rudyatmo"
                  job="Mayor of Surakarta (Solo)"
                />
                <TalkSpeaker
                  name="Mr. Ahmad Rifai"
                  job="Executive Director, Kota Kita Foundation"
                />
                <TalkSpeaker
                  name="Prof. Dr. Pirongrong Ramasoota"
                  job="Vice President for Social Outreach and Global Engagement, Chulalongkorn University"
                />
              </SubTalk>
              <SubTalk title="Reception and Cultural Performance">
                <Text
                  medium
                  component="li"
                  style={{ paddingLeft: 0, listStyle: "none" }}>
                  Hosted by City of Surakarta
                </Text>
              </SubTalk>
              <ScheduleVenue>Loji Gandrung</ScheduleVenue>
            </Talk>
          </ScheduleItem>
        </ScheduleSection>

        <ScheduleSection>
          <Day date="Day 2" day="Wednesday, August 21" theme="Public Forum" />
          <ScheduleItem hour="8:30am" tag="Plenary Session">
            <Text
              component="h3"
              heading5Alt
              style={{ marginBottom: "4px", textTransform: "capitalize" }}>
              Opening
            </Text>
            <Talk title="Civic Engagement 4.0: Creating an Innovative Platform">
              <ScheduleVenueAlt>Ballroom II</ScheduleVenueAlt>
              <Role
                label="MC: "
                name="Ms. Michiko Yoshida, Chulalongkorn University"
              />
              <SubTalk title="Welcome Address">
                <TalkSpeaker
                  name="Dr. Nualnoi Treerat"
                  job="Director, Institute of Asian Studies, Chulalongkorn University"
                />
              </SubTalk>
              <SubTalk title="Keynote Speech: Youth Leadership toward People-Centered Society">
                <br />
                <TalkSpeaker
                  label="SPEAKER I"
                  name="Prof. Michael Northcott"
                  job="Professor of Religion and Ecology"
                />
                <SubTalk title="The Good City? From the City as Cradle of Civilisation to the Sustainable Cities of Tomorrow" />
                <GoodCity />
                <TalkSpeaker
                  label="SPEAKER II"
                  name="Prof. Melani Budianta"
                  job="Professor of Interdisciplinary Humanities"
                />
                {/* <TalkSpeaker
                  label="Speaker III"
                  name="Mr. Adamas Belva Syah Devara*"
                  job="CEO and Founder of Ruang Guru" /> */}
              </SubTalk>
              {/* <ScheduleVenue>The Sunan Hotel</ScheduleVenue> */}
            </Talk>
          </ScheduleItem>
          <ScheduleItem
            hour="9:30am"
            tag="Plenary Session"
            venue="Sebelas Maret University, Solo">
            <ScheduleVenueAlt>Ballroom II</ScheduleVenueAlt>
            <Text
              component="h3"
              heading5Alt
              style={{ marginBottom: "4px", textTransform: "capitalize" }}>
              Civic Engagement 4.0: Overview
            </Text>
            <Talk
              title="Building on: From Yogya and Bangkok to Solo"
              facilitators>
              <TalkSpeaker
                name="Dr. Toshiyuki Doi"
                job="Senior Advisor, Mekong Watch, Japan; Academic Advisor, Institute of Asian Studies, Chulalongkorn University"
              />
              <TalkSpeaker
                name="Mr. Ted Mayer"
                job="Academic Director, Institute of Transformative Learning, International Network for Engaged Buddhists (INEB), Thailand"
              />
              <TalkSpeaker
                name="Associate Professor Dr. Yeoh Seng Guan"
                job="School of Arts and Social Sciences, Monash University, Malaysia"
              />
            </Talk>
          </ScheduleItem>
          <ScheduleItem hour="10:00am">
            <Text component="h3" heading4 style={{ marginBottom: "0px" }}>
              Group Photo and Coffee Break
            </Text>
          </ScheduleItem>
          <ScheduleItem hour="10:30am" tag="Parallel Session I">
            <Talk title="Mobility in the Changing Landscape of Southeast Asia">
              <ScheduleVenueAlt>Ballroom I</ScheduleVenueAlt>
              <Role label="Convener" />
              <TalkSpeaker
                name="Dr. Ratchada Jayagupta"
                job="Asian Research Center for Migration, Inst. of Asian Studies, Chulalongkorn University"
              />
              <Role label="Presenter" />
              <TalkSpeaker
                name="Ms. Rizqa Hidayani"
                job="Kota Kita Foundation"
              />
              <TalkSpeaker
                name="Dr. Keo Piseth"
                job="Director, Center for Sustainable Development Studies, Asian Vision Institute, Cambodia"
              />
              <TalkSpeaker
                name="Dr. Vissia Ita Yulianto"
                job="Center for Southeast Asian Social Studies, Universitas Gadjah Mada"
              />
              <MobilityChangingSEA />
            </Talk>

            <Talk title="Showcasing Innovative Products for Urban Living">
              <ScheduleVenueAlt>Wiryowidagdo I</ScheduleVenueAlt>
              <Role label="Convener" />
              <TalkSpeaker name="Dr. Leonard Chrysostomos" job="ICRS" />
              <Role label="Presenters" />
              <TalkSpeaker job="Awardees of “Sustainable, Just, Smart Urban Living Innovation Award”" />
              <TalkSpeaker name="Ms. Sri Yusnita Irda Sari" />
              <TalkSpeaker name="Mr. Yudhis Thiro Kabul Yunior" />
              <Role label="Discussants" />
              <TalkSpeaker
                name="Mr. Muhammad Ismail"
                job="Sasana Inklusi dan Gerakan Advokasi Difabel – SIGAB Indonesia [Inclusive Forum and Advocacy for Diffable in Indonesia]"
              />
              <TalkSpeaker
                name="Dr. Dian Arymami"
                job="Universitas Gadjah Mada"
              />
              <TalkSpeaker
                name="Dr. Wahju Satrio Wibowo"
                job="Universitas Kristen Duta Wacana"
              />
              <ShowcasingInnovativeProducts />
            </Talk>

            <Talk title="Education 4.0: Knowledge, Innovation and Civic Engagement toward Global Leadership">
              <ScheduleVenueAlt>Ballroom II</ScheduleVenueAlt>
              <Role label="Convener" />
              <TalkSpeaker
                name="Dr. Sachi Ando"
                job="Office of Global Education, Graduate School of Education, Kyoto University"
              />
              <Role label="Presenter" />
              <TalkSpeaker
                name="Dr. Wasana Wongsurawat"
                job="Deputy Director, IAS, Chulalongkorn University"
              />
              <TalkSpeaker
                name="Dr. Chhaeng Vannarith"
                job="President, Asian Vision Institute, Cambodia"
              />
              <TalkSpeaker
                name="Dr. Chatchawan Chaisuekul"
                job="Dept. of Biology, Chulalongkorn University"
              />
              <Role label="Discussant" />
              <TalkSpeaker name="Dr. Wasana Wongsurawat" />
              <Education />
            </Talk>

            <Talk title="Beyond Waste Management - Citizen Participation in the Use of Resources">
              <ScheduleVenueAlt>Wiryowidagdo II</ScheduleVenueAlt>
              <Role label="Convener" />
              <TalkSpeaker
                name="Dr. Kohei Watanabe"
                job="Teikyo University, Japan"
              />
              <Role label="Presenters" />
              <TalkSpeaker
                name="Dr. Eng. Kusumaningdyah Nurul Handayani, S.T., M.T."
                job="Urban Rural Design and Conservation Laboratory, Department of Architecture, Universitas Sebelas Maret"
              />
              <TalkSpeaker
                name="Prof. Tomoko Okayama"
                job="Taisho University, Japan"
              />
              <TalkSpeaker
                name="Mr. Supardi Asmorobangun"
                job="Rumah Kompos, Bali"
              />
              <TalkSpeaker
                name="Ms. Penchom Saetang"
                job="Director, Ecological Alert and Recovery, Thailand"
              />
            </Talk>
          </ScheduleItem>
          <ScheduleItem hour="00:30pm">
            <Text component="h3" heading4 style={{ marginBottom: "0px" }}>
              Lunch Break
            </Text>
          </ScheduleItem>
          <ScheduleItem hour="2:00pm" tag="Parallel Session II">
            <Talk
              workshop
              title="Memory as Resilience: Inter-spatial and generational Transmission of Disaster Experience to Build a Sustainable Society">
              <ScheduleVenueAlt>Wiryowidagdo II</ScheduleVenueAlt>
              <Role label="Conveners/Facilitators" />
              <TalkSpeaker name="Dr. Toshiyuki Doi" job="Mekong Watch" />
              <TalkSpeaker
                name="Ms. Hiroko Aihara"
                job="Japan Perspective News Inc."
              />
              <TalkSpeaker
                name="Ms. Mariko Komatsu"
                job="Hiroshima University"
              />
              <Role label="Resource Person" />
              <TalkSpeaker
                name="Ms. Keiko Takahashi"
                job="Hutaba Info., Fukushima, Japan"
              />
              <TalkSpeaker
                name="Ms. Mayu Seto"
                job="Former Youth Communicator, “World without Nuclear Weapons”"
              />
              <TalkSpeaker
                name="Ms. Kuniko Watanabe"
                job="Board member/staff, ANT-Hiroshima"
              />
              <TalkSpeaker
                name="Mr. Totok Pratopo"
                job="Pemerti Kali Code (River Forum)"
              />
              <TalkSpeaker name="Komunitas Wayang Sampah, Solo (TBC)" job="" />
              <MemoryResillence />
            </Talk>

            <Talk workshop title="Civic Engagement, a Strategic Lens">
              <ScheduleVenueAlt>Ballroom I</ScheduleVenueAlt>
              <Role label="Convener/Facilitator" />
              <TalkSpeaker
                name="Ms. Elodie Jacquet"
                job="Manager of Knowledge and Practice, Dialogue and Civic Engagement Program, Simon Fraser University, Canada"
              />
              <Role label="Resource Person" />
              <TalkSpeaker
                name="Mr. Ir. Ahyani, M.A."
                job="City of Surakarta Regional Secretary"
              />
              <TalkSpeaker
                name="Dr. Chhaeng Vannarith"
                job="President, Asian Vision Institute, Cambodia"
              />
              <StrategicLens />
            </Talk>

            <Talk
              workshop
              title="Urban Farming: Steps toward Food Safety, Security and Sovereignty">
              <ScheduleVenueAlt>Ballroom II</ScheduleVenueAlt>
              <Role label="Convener/Facilitator" />
              <TalkSpeaker
                name="Ms. Supa Yaimuang"
                job="Sustainable Agriculture Foundation, Thailand"
              />
              <Role label="Resource Person" />
              <TalkSpeaker
                name="Mr. Bjorn Low"
                job="Director, Citizen Farm, Singapore"
              />
              <TalkSpeaker
                name="Mr. Aryo Wiryawan"
                job="CEO, Indmira; Founder of Jala"
              />
              <TalkSpeaker
                name="Ms. Varangkanang Nimhutta"
                job="Sustainable Agriculture Foundation, Thailand"
              />
              <UrbanFarming />
            </Talk>

            <Talk
              workshop
              title="Listening Partnerships Living Fully and Leading with Integrity in a Time of Crisis">
              <ScheduleVenueAlt>Wiryowidagdo II</ScheduleVenueAlt>
              <Role label="Convenor/Facilitator" />
              <TalkSpeaker
                name="Mr. Ted Mayer"
                job="Institute of Transformative Learning (INEB)"
              />
              <Role label="Assistant Facilitators" />
              <TalkSpeaker
                name="Ms. Khudoh"
                job="Metta Development Foundation, Myanmar"
              />
              <TalkSpeaker
                name="Ms. Dewi Martina"
                job="Muhammadiyah University in Riau"
              />
              <ListeningPartnership />
            </Talk>
          </ScheduleItem>
          <ScheduleItem hour="4:00pm">
            <Text component="h3" heading4 style={{ marginBottom: "0px" }}>
              Coffee Break
            </Text>
          </ScheduleItem>
          <ScheduleItem hour="4:15pm - 5.15pm" tag="Plenary Session">
            <Talk title="Synthesis Building Linkages with Strategic Partners">
              <ScheduleVenue>Ballroom II</ScheduleVenue>
            </Talk>
          </ScheduleItem>
        </ScheduleSection>

        <ScheduleSection>
          <Day
            date="Day 3"
            day="Thursday, August 22"
            theme="Mayors' Symposium"
          />
          <ScheduleItem hour="8:30am" tag="Plenary Session">
            <Talk title="Opening: Co-Designing Sustainable, Just and Smart Urban Living”">
              <ScheduleVenueAlt>Syailendra Ballroom</ScheduleVenueAlt>
              <SubTalk title="Welcome Address">
                <TalkSpeaker name="Dr. Siti Syamsiyatun" job="Director, ICRS" />
              </SubTalk>
              <SubTalk title="Award giving ceremony “Sustainable, Just and Smart Urban Living Innovation Award"></SubTalk>
            </Talk>
            <Talk title="Roundtable: Mayors’ Innovation Pitch">
              <Country label="Cambodia" />
              <TalkSpeaker
                name="H. E. Prak Sovann"
                job="Governor of Preah Vihear Province"
                style={{ marginBottom: "24px" }}
              />

              <Country label="Indonesia" />
              <TalkSpeaker
                name="Mr. H. Ahyar Abduh"
                job="Mayor of Mataram (Nusa Tenggara Barat)"
              />
              <TalkSpeaker
                name="Mrs. Hj. Badingah, S.sos."
                job="Regent of Gunung Kidul (Yogyakarta)"
              />
              <TalkSpeaker
                name="Mr. F.X. Hadi Rudyatmo"
                job="Mayor of Surakarta (Central Java)"
              />
              <TalkSpeaker
                name="Mr. H. Ibnu Sina, S.Pi., M.Si."
                job="Mayor of Banjarmasin (South Kalimantan)"
              />
              <TalkSpeaker
                name="Dr. H. Najmul Akhyar, S.H., M.H."
                job="Regent of Lombok Utara (Nusa Tenggara Barat)"
              />
              <TalkSpeaker
                name="Dr.(H.C.) Ir. Tri Rismaharini, M.T.*"
                job="Mayor of Surabaya (East Java)"
                style={{ marginBottom: "24px" }}
              />

              {/* <Country label="Philippines" />
              <TalkSpeaker
                name="Mr. James B. Pooten, Jr."
                job="Mayor of Municipality of Sagada" style={{marginBottom: '24px'}}/> */}

              {/* <Country label="South Korea" />
              <TalkSpeaker
                name={<em>To be confirmed</em>} style={{marginBottom: '24px'}}/> */}

              <Country label="Thailand" />
              <TalkSpeaker
                name="Mr. Pongsak Yingchoncharoen"
                job="Mayor of Yala City Municipality"
                style={{ marginBottom: "24px" }}
              />

              <Role label="Facilitators" />
              <TalkSpeaker name="Dr. Siti Syamsiyatun" job="Director, ICRS" />
              <TalkSpeaker name="Dr. Dicky Sofjan" job="ICRS" />
              <TalkSpeaker name="Mr. Ahmad Rifai" job="Kota Kita Foundation" />

              <ScheduleVenue>The Sunan Hotel</ScheduleVenue>
              <ToBeConfirmed />
            </Talk>
          </ScheduleItem>
          <ScheduleItem hour="10:15am">
            <Text component="h3" heading4 style={{ marginBottom: "0px" }}>
              Coffee Break - Press Conference with City Mayors
            </Text>
            <ScheduleVenue>Ballroom III</ScheduleVenue>
          </ScheduleItem>
          <ScheduleItem hour="10:45am">
            <Talk title="Mayors’ Interface with Civil Society (Part I)">
              <SubTalk title="Inclusive and Sustainable City">
                <Role label="Speakers" />
                <TalkSpeaker
                  name="Ms. Endah Setyowati"
                  job="Executive Director, Ohana Indonesia"
                />
                <TalkSpeaker
                  name="Dr. Bernadia Irawati Tjandradewi*"
                  job="Secretary General, United Cities and Local Governance Asia Pacific"
                />
                <TalkSpeaker
                  name="Ajarn Heng Monychenda"
                  job="Founding Director, Buddhism for Development, Cambodia"
                />
                <TalkSpeaker
                  name="Dr. Sukanda Luangon Lewis"
                  job="Project Director, Development of Creative Tourism, Chulalongkorn University"
                />
              </SubTalk>
              <SubTalk title="Responses from mayors">
                <Role label="Moderator" />
                <TalkSpeaker
                  name="Dr. Leonard Chrysostomos"
                  job="Core Doctoral Faculty, ICRS"
                />
              </SubTalk>
              <ScheduleVenue>The Sunan Hotel</ScheduleVenue>
              <ToBeConfirmed />
            </Talk>
          </ScheduleItem>
          <ScheduleItem hour="12:45pm">
            <Text component="h3" heading4 style={{ marginBottom: "0px" }}>
              Lunch Break
            </Text>
          </ScheduleItem>
          <ScheduleItem hour="2:00pm">
            <Talk title="Mayors’ Interface with Civil Society (Part II)">
              <SubTalk title="Faith and Human Dignity in the City">
                <Role label="Speakers" />
                <TalkSpeaker
                  name="Dr. Elise Edwards"
                  job="Baylor University, United States"
                />
                <TalkSpeaker name="Dr. Jeanny Dewayani" job="ICRS" />
                <TalkSpeaker
                  name="Prof. Michael Northcott"
                  job="University of Edinburgh"
                />
                <TalkSpeaker
                  name="Dr. Ilyas Mohammed"
                  job="Lecturer in Criminology and Security, University of Liverpool, Singapore"
                />
              </SubTalk>
              <SubTalk title="Responses from mayors">
                <Role label="Moderator" />
                <TalkSpeaker
                  name="Associate Professor Dr. Yeoh Seng Guan"
                  job="School of Arts and Social Sciences, Monash University, Malaysia"
                />
              </SubTalk>
              <ScheduleVenue>The Sunan Hotel</ScheduleVenue>
            </Talk>
          </ScheduleItem>
          <ScheduleItem hour="4:00pm">
            <Text component="h3" heading4 style={{ marginBottom: "0px" }}>
              Coffee Break
            </Text>
          </ScheduleItem>
          <ScheduleItem hour="4:15pm">
            <Talk title="Mayors’ Symposium Synthesis"></Talk>
            <ScheduleVenue>The Sunan Hotel</ScheduleVenue>
          </ScheduleItem>
          <ScheduleItem hour="4:45pm">
            <SubTalk title="Solo Forum Wrap Up">
              <Talk
                title="Civic Engagement 4.0: A Call for Action"
                style={{
                  marginBottom: 0,
                  paddingBottom: 0,
                  paddingTop: 0,
                }}></Talk>
            </SubTalk>
            <SubTalk title="Closing Ceremony"></SubTalk>
            <ScheduleVenue>The Sunan Hotel</ScheduleVenue>
          </ScheduleItem>
        </ScheduleSection>

        <ScheduleSection>
          <Day date="Day 4" day="Friday, August 23" theme="Closed Event" />
          <ScheduleItem hour="9:00am - 11:00am" tag="Closed Event">
            <Talk title="Solo Community Cycling Visit with the Mayor of Surakarta (for invited participants only)">
              <Text
                medium
                component="li"
                style={{ paddingLeft: 0, listStyle: "none" }}>
                Hosted by the City Government of Solo
              </Text>
            </Talk>
            <Talk title="Adjourn and departure of participants"></Talk>
          </ScheduleItem>
        </ScheduleSection>
      </Container>
    </Box>
  )
}

export default SchedulesFull
