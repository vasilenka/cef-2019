import styles from "./Mission.module.scss"
import React from "react"
import cx from "classnames"
import Box from "../Box/Box"
import Text from "../../primitives/Text/Text"
import Container from "../../layouts/Container/Container"
// import Join from "../Join/Join"

// import IconOne from '../images/icon1';
// import IconTwo from '../images/icon2';
// import IconThree from '../images/icon3';
// import IconFour from '../images/icon4';
// import IconFive from '../images/icon5';

import Cloud1 from "./../images/cloud1--alt"
import Cloud2 from "./../images/cloud2--alt"
import Cloud3 from "./../images/cloud3--alt"
import Announcement from "../Announcement/Announcement"
// import Ornament from '../Ornament/Ornament';

// import Pattern from './../images/pattern0'

const Mission = ({ className, ...restProps }) => {
  return (
    <Box className={cx(styles.root)}>
      {/* <Ornament /> */}
      <div className={styles.cloud1}>
        <Cloud1 />
      </div>
      <div className={styles.cloud2}>
        <Cloud2 />
      </div>
      <div className={styles.cloud3}>
        <Cloud3 />
      </div>
      <div className={styles.cloud4}>
        <Cloud3 />
      </div>
      <div className={styles.cloud5}>
        <Cloud1 />
      </div>
      <div className={styles.cloud6}>
        <Cloud2 />
      </div>
      <Container narrow className={cx(styles.container)}>
        <main>
          <section className={styles.mainSection}>
            <Text heading1 component="h2" className={styles.title}>
              Mission
            </Text>
            <Text component="p" medium className={styles.content}>
              <strong>
                <span className={styles.dropcap}>C</span>ivic Engagement 4.0
                (Four Point Zero) Dignity ~ Justice ~ Sustainability (Civic
                Engagement 4.0)
              </strong>{" "}
              is a project in the course of which participants from different
              sectors can share, discuss, and develop ideas and plans to achieve
              dignity, justice, and sustainability in Southeast Asia in the era
              of urbanization and technological advancement. Justice and dignity
              need to be championed as core values in pursuit of sustainability.
              This is because sustainability cannot be achieved in economic
              terms alone; environmental, socio-cultural, and spiritual aspects
              are equally essential. In a sustainable society, everyone should
              enjoy their life while being equally and mutually respected as
              humans.
            </Text>
            <Text component="p" medium className={styles.content}>
              <strong>Civic Engagement 4.0</strong> will begin with a launching
              event in Surakarta (Solo), Central Java, Indonesia{" "}
              <strong>(2019 International Forum in Solo)</strong> on August 20
              to 23, 2019. <strong>The 2019 International Forum in Solo</strong>{" "}
              is a public event, comprised of an opening ceremony, the Public
              Forum, the Mayors’ Symposium, an eco-cycling tour, an art
              exhibition, and thematic field visits (by invitation only).
              Approximately 250 participants, including academics and students,
              NGO activists, government officials, and general public, are
              expected from ASEAN as well as its partners such as Australia,
              Canada, Japan and United States.
            </Text>
          </section>
          <div className={styles.double}>
            <section className={styles.section}>
              <Text heading3Alt component="h3" style={{ marginBottom: "12px" }}>
                Urban Focus
              </Text>
              <Text medium component="p" style={{ marginBottom: 0 }}>
                More than 50 percent of the world’s population live in urban
                spaces; this figure is expected to grow to more than 60 percent
                by 2030. As such, the benefits of city life, as well as its
                challenges—from poverty and inequality to climate-related
                disasters and the complex consequences of migration—are
                hyper-realized in urban areas. This reality must be urgently
                confronted with innovative and practical solutions in Southeast
                Asia. <strong>The 2019 International Forum in Solo</strong>{" "}
                invites several progressive city mayors from Indonesia,
                Malaysia, Thailand, the Philippines, and Japan to present their
                experiences and efforts in working towards a dignified, just,
                and sustainable society. Participants from the civil society
                will have the opportunity to exchange with the mayors directly
                to build upon common approaches and plan follow-up actions.
              </Text>
            </section>
            <section className={styles.section}>
              <Text heading3Alt component="h3" style={{ marginBottom: "12px" }}>
                “Four Point Zero”
              </Text>
              <Text medium component="p" style={{ marginBottom: 0 }}>
                <strong>Civic Engagement 4.0</strong> alludes to the Fourth
                Industrial Revolution, which is triggering “a technological
                revolution that will fundamentally alter the way we live, work,
                and relate to one another” (Klaus 2016). Citizens can make use
                of new digital technologies to become more active and engage in
                meaningful participation to work towards a dignified, just, and
                sustainable society. <strong>Civic Engagement 4.0</strong>,
                however, does not single-mindedly celebrate or promote the
                benefits of technology, but rather challenges to contemplate and
                articulate how core values such as dignity and justice can be
                enabled and how the promises of sustainability can be fulfilled
                in the era of technology.{" "}
                <strong>The 2019 International Forum in Solo</strong> encourages
                participants to analyze both the potential and dangers of new
                forms of technologies, while making use of digital activism and
                virtual collaboration.
              </Text>
            </section>
          </div>
        </main>
        {/* <Announcement /> */}
      </Container>
    </Box>
  )
}

export default Mission
