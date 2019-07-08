import styles from './AboutHeroAlt.module.scss'
import React from 'react'
import cx from 'classnames'

import Text from '../../primitives/Text/Text'
import Box from '../Box/Box'
import Container from '../../layouts/Container/Container'

import Cloud1 from './../images/cloud1--alt'
import Cloud2 from './../images/cloud2--alt'
import Cloud3 from './../images/cloud3--alt'

const AboutHeroAlt = ({
  className,
  ...restProps
  }) => {

  return (
    <div className={cx(styles.root)} {...restProps}>
      <Container narrow className={cx(styles.container)}>
        <Box alignCenter justifyStart style={{ height: '100%' }}>
          <Box column alignStart>
            <header className={styles.header}>
              <Text display3 component="h1" className={styles.title}>
                Civic Engagement 4.0
              </Text>
              <Text heading3Alt className={styles.tagline}>
                Dignity ~ Justice ~ Sustainability
              </Text>
            </header>
            <Text medium component="p" className={styles.overview}>
              <strong>Civic Engagement 4.0 (Four Point Zero) Dignity ~ Justice ~ Sustainability (Civic Engagement 4.0)</strong> is a project in the course of which participants from different sectors can share, discuss, and develop ideas and plans to achieve dignity, justice, and sustainability in Southeast Asia in the era of urbanization and technological advancement. Justice and dignity need to be championed as core values in pursuit of sustainability. This is because sustainability cannot be achieved in economic terms alone; environmental, socio-cultural, and spiritual aspects are equally essential. In a sustainable society, everyone should enjoy their life while being equally and mutually respected as humans.
            </Text>
            <Text medium component="p" className={styles.overview}>
              <strong>Civic Engagement 4.0</strong> will begin with a launching event in Surakarta (Solo), Central Java, Indonesia <strong>(2019 International Forum in Solo)</strong> on August 20 to 23, 2019. <strong>The 2019 International Forum in Solo</strong> is a public event, comprised of an opening ceremony, the Public Forum, the Mayors’ Symposium, an eco-cycling tour, an art exhibition, and thematic field visits (by invitation only). Approximately 250 participants, including academics and students, NGO activists, government officials, and general public, are expected from ASEAN as well as its partners such as Australia, Canada, Japan and United States.
            </Text>
            <Text heading2 component="h2" className={styles.subheading}>
              Urban Focus
            </Text>
            <Text medium component="p" className={styles.overview}>
              More than 50 percent of the world’s population live in urban spaces; this figure is expected to grow to more than 60 percent by 2030. As such, the benefits of city life, as well as its challenges—from poverty and inequality to climate-related disasters and the complex consequences of migration—are hyper-realized in urban areas. This reality must be urgently confronted with innovative and practical solutions in Southeast Asia. <strong>The 2019 International Forum in Solo</strong> invites several progressive city mayors from Indonesia, Malaysia, Thailand, the Philippines, and Japan to present their experiences and efforts in working towards a dignified, just, and sustainable society. Participants from the civil society will have the opportunity to exchange with the mayors directly to build upon common approaches and plan follow-up actions.
            </Text>
            <Text heading2 component="h2" className={styles.subheading}>
              Four Point Zero
            </Text>
            <Text medium component="p" className={styles.overview}>
              <strong>Civic Engagement 4.0</strong> alludes to the Fourth Industrial Revolution, which is triggering “a technological revolution that will fundamentally alter the way we live, work, and relate to one another” (Klaus 2016). Citizens can make use of new digital technologies to become more active and engage in meaningful participation to work towards a dignified, just, and sustainable society. <strong>Civic Engagement 4.0</strong>, however, does not single-mindedly celebrate or promote the benefits of technology, but rather challenges to contemplate and articulate how core values such as dignity and justice can be enabled and how the promises of sustainability can be fulfilled in the era of technology. <strong>The 2019 International Forum in Solo</strong> encourages participants to analyze both the potential and dangers of new forms of technologies, while making use of digital activism and virtual collaboration.
            </Text>
          </Box>
        </Box>
      </Container>
      <div className={styles.cloud1}>
        <Cloud1 />
      </div>
      <div className={styles.cloud2}>
        <Cloud2 />
      </div>
      <div className={styles.cloud3}>
        <Cloud3 />
      </div>
    </div>
  )
}

export default AboutHeroAlt