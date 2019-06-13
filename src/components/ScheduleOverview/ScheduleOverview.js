import styles from './ScheduleOverview.module.scss'
import React from 'react'
import cx from 'classnames'

import Box from '../Box/Box'
import Container from '../../layouts/Container/Container'
import Text from '../../primitives/Text/Text'
import SectionLink from '../SectionLink/SectionLink';
import ScheduleOverviewItem from '../ScheduleOverviewItem/ScheduleOverviewItem';

const ScheduleOverview = ({
  className,
  ...restProps
  }) => {
  return (
    <Box className={cx(styles.root)}>
      <Container narrow className={styles.container}>
        <Text heading1 component="h2" className={styles.title}>
          Schedule Overview
        </Text>
        <Box justifyCenter>
          <Box column className={styles.schedules}>

            <ScheduleOverviewItem title="August 19, 2019">
              <Box column className={styles.item}>
                <Text heading5Alt component="h5">
                  Arrival of Participants
                </Text>
              </Box>
              <Box column className={styles.item}>
                <Text heading5Alt component="h5" style={{marginBottom: '4px'}}>
                  Art Exhibition Opening
                </Text>
                <Text medium>
                  Urban Landscape, Our Communities
                </Text>
              </Box>
            </ScheduleOverviewItem>

            <ScheduleOverviewItem title="August 20, 2019">
              <Box column className={styles.item}>
                <Text heading5Alt component="h5" style={{marginBottom: '4px'}}>
                  Thematic site visits
                </Text>
                <Text medium>
                  Sensing Sustainability in Solo Communities
                </Text>
              </Box>
              <Box column className={styles.item}>
                <Text heading5Alt component="h5" style={{marginBottom: '4px'}}>
                  Opening Plenary
                </Text>
                <Text medium>
                  Civic Engagement 4.0: Creating an Innovative Platform
                </Text>
              </Box>
            </ScheduleOverviewItem>

            <ScheduleOverviewItem title="August 21, 2019">
              <Box column className={styles.item}>
                <Text heading5Alt component="h5" style={{marginBottom: '4px'}}>
                  Civil Society Open Forum
                </Text>
                <Text medium>
                  More Critical Issues, Voices and Practices from the Ground
                </Text>
              </Box>
            </ScheduleOverviewItem>

            <ScheduleOverviewItem title="August 22, 2019">
              <Box column className={styles.item}>
                <Text heading5Alt component="h5" style={{marginBottom: '4px'}}>
                  Mayor’s Symposium
                </Text>
                <Text medium>
                  Co-Designing Sustainable, Just and Smart Urban Living
                </Text>
              </Box>
            </ScheduleOverviewItem>

            <ScheduleOverviewItem title="August 23, 2019">
              <Box column className={styles.item}>
                <Text heading5Alt component="h5" style={{marginBottom: '4px'}}>
                  Free Public Event (With Prior Registration)
                </Text>
                <Text medium>
                  More Critical Issues, Voices and Practices from the Ground
                </Text>
              </Box>
            </ScheduleOverviewItem>

          </Box>
        </Box>
        <SectionLink to="/schedule">
          View to Full Schedules
        </SectionLink>
      </Container>
    </Box>
  )
}

export default ScheduleOverview