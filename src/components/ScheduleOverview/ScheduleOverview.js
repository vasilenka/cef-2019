import styles from './ScheduleOverview.module.scss'
import React from 'react'
import cx from 'classnames'

import Box from '../Box/Box'
import Container from '../../layouts/Container/Container'
import Text from '../../primitives/Text/Text'
import SectionLink from '../SectionLink/SectionLink';
import ScheduleOverviewItem from '../ScheduleOverviewItem/ScheduleOverviewItem';

import Cloud1 from './../images/cloud1--alt'
import Cloud2 from './../images/cloud2--alt'
import Cloud3 from './../images/cloud3--alt'

const ScheduleOverview = ({
  className,
  ...restProps
  }) => {
  return (
    <Box className={cx(styles.root)}>
      <div className={styles.cloud1}><Cloud1 /></div>
      <div className={styles.cloud2}><Cloud2 /></div>
      <div className={styles.cloud3}><Cloud3 /></div>
      <div className={styles.cloud4}><Cloud3 /></div>
      <div className={styles.cloud5}><Cloud1 /></div>
      <div className={styles.cloud6}><Cloud2 /></div>
      <Container narrow className={styles.container}>
        <Text heading1 component="h2" className={styles.title}>
          Schedule Overview
        </Text>
        <Box justifyCenter>
          <Box column className={styles.schedules}>

            <ScheduleOverviewItem title="August 19, 2019">
              <Box column className={styles.item}>
                <Text heading4 component="h5" style={{fontWeight: '700', marginBottom: '4px'}}>
                  Arrival of Participants
                </Text>
                <Text medium>
                  at Sunan Hotel
                </Text>
              </Box>
              <Box column className={styles.item}>
                <Text heading4 component="h5" style={{fontWeight: '700', marginBottom: '4px'}}>
                  Art Exhibition Opening
                </Text>
                <Text medium>
                  Urban Landscape, Our Communities
                </Text>
              </Box>
            </ScheduleOverviewItem>

            <ScheduleOverviewItem title="August 20, 2019">
              <Box column className={styles.item}>
                <Text heading4 component="h5" style={{fontWeight: '700', marginBottom: '4px'}}>
                  Thematic site visits
                </Text>
              </Box>
              <Box column className={styles.item}>
                <Text heading4 component="h5" style={{fontWeight: '700', marginBottom: '4px'}}>
                  Meeting of Conveners
                </Text>
              </Box>
              <Box column className={styles.item}>
                <Text heading4 component="h5" style={{fontWeight: '700', marginBottom: '4px'}}>
                  Opening Ceremony
                </Text>
              </Box>
              <Box column className={styles.item}>
                <Text heading4 component="h5" style={{fontWeight: '700', marginBottom: '4px'}}>
                  Reception and Cultural performance
                </Text>
              </Box>
            </ScheduleOverviewItem>

            <ScheduleOverviewItem title="August 21, 2019">
              <Box column className={styles.item}>
                <Text heading4 component="h5" style={{fontWeight: '700', marginBottom: '4px'}}>
                  Public Forum
                </Text>
              </Box>
              <Box column className={styles.item}>
                <Text heading4 component="h5" style={{fontWeight: '700', marginBottom: '4px'}}>
                  Opening Plenary
                </Text>
                <Text medium>
                  Civic Engagement 4.0: Creating an Innovative Platform
                </Text>
              </Box>
              <Box column className={styles.item}>
                <Text heading4 component="h5" style={{fontWeight: '700', marginBottom: '4px'}}>
                  Note Speech
                </Text>
                <Text medium>
                  “Youth Leadership toward People-Centered Society”
                </Text>
              </Box>
              <Box column className={styles.item}>
                <Text heading4 component="h5" style={{fontWeight: '700', marginBottom: '4px'}}>
                  Civic Engagement 4.0: Overview
                </Text>
                <Text medium>
                  Building on: From Yogya and Bangkok to Solo
                </Text>
              </Box>
              <Box column className={styles.item}>
                <Text heading4 component="h5" style={{fontWeight: '700', marginBottom: '4px'}}>
                  Parallel Session I
                </Text>
              </Box>
              <Box column className={styles.item}>
                <Text heading4 component="h5" style={{fontWeight: '700', marginBottom: '4px'}}>
                  Parallel Session II
                </Text>
              </Box>
              <Box column className={styles.item}>
                <Text heading4 component="h5" style={{fontWeight: '700', marginBottom: '4px'}}>
                  Synthesis
                </Text>
                <Text medium>
                  Building Linkages with Strategic Partners
                </Text>
              </Box>
            </ScheduleOverviewItem>

            <ScheduleOverviewItem title="August 22, 2019">
              <Box column className={styles.item}>
                <Text heading4 component="h5" style={{fontWeight: '700', marginBottom: '4px'}}>
                  Mayors’ Symposium
                </Text>
                <Text medium>
                  at Sunan Hotel
                </Text>
              </Box>
              <Box column className={styles.item}>
                <Text heading4 component="h5" style={{fontWeight: '700', marginBottom: '4px'}}>
                  Opening
                </Text>
                <Text medium>
                  Co-Designing Sustainable, Just and Smart Urban Living
                </Text>
              </Box>
              <Box column className={styles.item}>
                <Text heading4 component="h5" style={{fontWeight: '700', marginBottom: '4px'}}>
                  Roundtable: Mayors’ Innovation Pitch
                </Text>
                <Text medium>
                  Mayors from Indonesia, Thailand, Philippines, and Malaysia
                </Text>
              </Box>
              <Box column className={styles.item}>
                <Text heading4 component="h5" style={{fontWeight: '700', marginBottom: '4px'}}>
                  Press Conference with City Mayors
                </Text>
              </Box>
              <Box column className={styles.item}>
                <Text heading4 component="h5" style={{fontWeight: '700', marginBottom: '4px'}}>
                  Mayors’ Interface with Civil Society (Part I)
                </Text>
                <Text medium>
                  Inclusive and Sustainable City
                </Text>
              </Box>
              <Box column className={styles.item}>
                <Text heading4 component="h5" style={{fontWeight: '700', marginBottom: '4px'}}>
                  Mayors’ Interface with Civil Society (Part II)
                </Text>
                <Text medium>
                  Faith and Human Dignity in the City
                </Text>
              </Box>
              <Box column className={styles.item}>
                <Text heading4 component="h5" style={{fontWeight: '700', marginBottom: '4px'}}>
                  Mayors’ Symposium Wrap Up
                </Text>
              </Box>
              <Box column className={styles.item}>
                <Text heading4 component="h5" style={{fontWeight: '700', marginBottom: '4px'}}>
                  Solo Forum Wrap Up
                </Text>
                <Text medium>
                  Civic Engagement 4.0: A Call for Action
                </Text>
              </Box>
              <Box column className={styles.item}>
                <Text heading4 component="h5" style={{fontWeight: '700', marginBottom: '4px'}}>
                  Closing Ceremony
                </Text>
              </Box>
            </ScheduleOverviewItem>

            <ScheduleOverviewItem title="August 23, 2019">
              <Box column className={styles.item}>
                <Text heading4 component="h5" style={{fontWeight: '700', marginBottom: '4px'}}>
                  Eco Cycling Tour: For Sustainable Memories of Solo
                </Text>
              </Box>
            </ScheduleOverviewItem>

          </Box>
        </Box>
        <SectionLink to="/programs">
          See full program details
        </SectionLink>
      </Container>
    </Box>
  )
}

export default ScheduleOverview