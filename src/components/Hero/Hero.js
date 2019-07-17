import styles from './Hero.module.scss'
import React from 'react'
import cx from 'classnames'
import { Link } from 'gatsby'

import Text from '../../primitives/Text/Text'
import Box from '../Box/Box'
import Container from '../../layouts/Container/Container'
import Info from '../Info/Info'
import Countdown from '../Countdown/Countdown'
import Button from '../../primitives/Button/Button'

import Calendar from './../icons/calendar.inline.svg'
import Place from './../icons/place.inline.svg'

import Cloud1 from './../images/cloud1--alt'
import Cloud2 from './../images/cloud2--alt'
import Cloud3 from './../images/cloud3--alt'
// import Ornament from '../Ornament/Ornament';

const Hero = ({
  className,
  ...restProps
  }) => {
  return (
    <div className={cx(styles.root)}>
      <div className={styles.cloud1}>
        <Cloud1 />
      </div>
      <div className={styles.cloud2}>
        <Cloud2 />
      </div>
      <div className={styles.cloud3}>
        <Cloud3 />
      </div>
      <Container narrow className={cx(styles.container)}>
        <Box style={{ height: '100%', borderBottom: '1px solid rgba(0,0,0,.12)', paddingBottom: '48px', marginBottom: '48px' }} alignCenter justifyStart>
          <Box column alignStart>
            <Text display3 component="h1" className={styles.title}>
              Civic Engagement 4.0
            </Text>
            <Text heading4 className={styles.tagline}>
              Justice ~ Dignity ~ Sustainability
            </Text>
            <div className={styles.overview__container}>
              <Text medium className={styles.overview} component="p">
                A regional platform for mutual learning, action and advocacy, working toward achieving dignity, justice and sustainability in Southeast Asian (SEA) society.
              </Text>
              <Link to="/about">
                <Button secondaryAlt small>Read more...</Button>
              </Link>
            </div>
            <footer style={{padding: "12px 0px"}}>
              <Text heading3 component="h2" style={{ marginBottom: '16px', }}>
                2019 International Forum in Solo
              </Text>
              <Info icon={<Calendar />} label="Date" value="August 20 - 23, 2019" />
              <Info icon={<Place/>} label="Venue" value="The Sunan Hotel, Solo, Central Java, Indonesia" />
            </footer>
          </Box>
        </Box>
        <Countdown />
      </Container>
    </div>
  )
}

export default Hero