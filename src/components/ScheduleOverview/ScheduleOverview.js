import styles from './ScheduleOverview.module.scss'
import React from 'react'
import cx from 'classnames'

import Box from '../Box/Box'
import Container from '../../layouts/Container/Container'
import Text from '../../primitives/Text/Text'
import SectionLink from '../SectionLink/SectionLink';

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
            <Box justifyBetween className={styles.schedule}>
              <Box className={styles.overview}>
                <Text heading4Alt component="h4">
                  Augustus 20, 2019
                </Text>
              </Box>
              <Box column className={styles.details}>
                <Box column className={styles.item}>
                  <Text medium>
                    Thematic site visits: Sensing Sustainability in Solo Communities
                  </Text>
                </Box>
                <Box column className={styles.item}>
                  <Text heading5Alt component="h5" style={{marginBottom: '4px'}}>
                    OPENING PLENARY
                  </Text>
                  <Text medium>
                    Civic Engagement 4.0: Creating an Innovative Platform
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box justifyBetween className={styles.schedule}>
              <Box className={styles.overview}>
                <Text heading4Alt component="h4">
                  Augustus 21, 2019
                </Text>
              </Box>
              <Box column className={styles.details}>
                <Box column className={styles.item}>
                  <Text heading5Alt component="h5" style={{marginBottom: '4px'}}>
                    CIVIL SOCIETY OPEN FORUM
                  </Text>
                  <Text medium>
                    More Critical Issues, Voices and Practices from the Ground
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box className={styles.schedule}>
              <Box className={styles.overview}>
                <Text heading4Alt component="h4">
                  Augustus 22, 2019
                </Text>
              </Box>
              <Box column className={styles.details}>
                <Box column className={styles.item}>
                  <Text heading5Alt component="h5" style={{marginBottom: '4px'}}>
                    MAYOR’S SYMPOSIUM
                  </Text>
                  <Text medium>
                    Co-Designing Sustainable, Just and Smart Urban Living
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box justifyBetween className={styles.schedule}>
              <Box className={styles.overview}>
                <Text heading4Alt component="h4">
                  Augustus 23, 2019
                </Text>
              </Box>
              <Box column className={styles.details}>
                <Box column className={styles.item}>
                  <Text heading5Alt component="h5" style={{marginBottom: '4px'}}>
                    FREE PUBLIC EVENT (WITH PRIOR REGISTRATION)
                  </Text>
                  <Text medium>
                    More Critical Issues, Voices and Practices from the Ground
                  </Text>
                </Box>
              </Box>
            </Box>
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