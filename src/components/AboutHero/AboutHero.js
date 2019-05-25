import styles from './AboutHero.module.scss'
import React from 'react'
import cx from 'classnames'
import { useInView } from 'react-intersection-observer'

import Text from '../../primitives/Text/Text'
import Box from '../Box/Box'
import Container from '../../layouts/Container/Container'

import Cloud1 from './../images/cloud1'
import Cloud2 from './../images/cloud2'
import Cloud3 from './../images/cloud3'
import Button from '../../primitives/Button/Button';

import Poster from './../images/poster'
// const Poster = loadable(() => import('./../images/poster'), {
//   fallback: <div className={styles.fallbackContainer}>
//     <div className={styles.container}>
//       <Spinner />
//     </div>
//   </div>,
// })

const AboutHero = ({
  className,
  ...restProps
  }) => {

  const [showPoster, setShowPoster] = React.useState(false)
  const [text, setText] = React.useState("Show me the Side Event")

  React.useEffect(() => {
    if(showPoster) {
      setText("Hide the Side Event")
    } else {
      setText("Show me the Side Event")
    }
  }, [showPoster])

  const [ref, inView] = useInView({
    rootMargin: "0px 0px 0px 0px",
    threshold: 0,
    triggerOnce: true,
  })

  return (
    <div className={cx(styles.root)} >
      <Container narrow className={cx(styles.container)}>
        <Box alignCenter justifyStart style={{ height: '100%' }}>
          <Box column alignStart>
            <Text display3 component="h1" className={styles.title}>
              Civic Engagement 4.0
            </Text>
            <Text medium component="p" className={styles.overview}>
              <strong>Civic Engagement 4.0 (Four Point Zero): Dignity ~ Justice ~ Sustainability</strong> is a regional platform for mutual learning, action and advocacy, working toward achieving dignity, justice and sustainability in Southeast Asian (SEA) society, where the wave of Fourth Industrial Revolution is affecting each of us living in the region, we become increasingly aware of the need for multi-stakeholder collaboration which can effectively respond to it. The platform is expected to facilitate exchanges of knowledge for further collaboration in implementing actions and advocacy to achieve dignity, justice and sustainability among active members of communities working on the ground at the national, regional and international levels.
            </Text>
            <Text medium component="p" className={styles.overview}>
              Therefore, it aims to promote critical and constructive debates about the role and opportunities of civic engagement and transformative learning in attaining societies with these core values. Aiming to build an effective community of practitioners—bringing together academics, policymakers, civil society, development partners, foundations and members of communities in rural and urban—<strong ref={ref}>“we are launching the Civic Engagement 4.0: Dignity ~ Justice ~ Sustainability in August 2019.</strong>”
            </Text>
            <Text medium component="p" className={styles.overview}>
              There will also be a side event of the program entitled <br/>
              Co-Designing Sustainable, Just and Smart Urban Living through ICRS Education, Civic Engagement and Policy Advocacy.
            </Text>
            <Button onClick={() => setShowPoster(!showPoster)} primary className={cx(styles.mainContent, styles.togglePoster)}>
              {text}
            </Button>
            {showPoster &&
              <div className={styles.imageContainer}>
                {inView && <Poster/>}
              </div>
            }
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

export default AboutHero