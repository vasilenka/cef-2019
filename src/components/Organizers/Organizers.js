import styles from './Organizers.module.scss'
import React from 'react'
import cx from 'classnames'

import Box from '../Box/Box'
import Container from '../../layouts/Container/Container'
import Text from '../../primitives/Text/Text'

import IcrsWeb from './../images/organizers/icrs-webp'
import KotaKitaWeb from './../images/organizers/kk-webp'
import UnivWeb from './../images/organizers/univ-webp'

const Organizers = ({
  className,
  ...restProps
  }) => {
  return (
    <Box className={cx(styles.root)}>
      <Container narrow className={cx(styles.container)}>
        <Box alignCenter className={styles.organizerContainer}>
          <Text heading5Alt component="h2" className={styles.title}>Co-organized by : </Text>
          <Box alignCenter className={cx(styles.columnRow)}>
            <div className={styles.logoContainer}>
              <a href="https://www.chula.ac.th/en/" target="_blank" rel="noopener noreferrer" className={cx(styles.logo, styles.logoUniv)}>
                <UnivWeb />
              </a>
            </div>
            <div className={styles.logoContainer}>
              <a href="http://kotakita.org" target="_blank" rel="noopener noreferrer" className={cx(styles.logo)}>
                <KotaKitaWeb />
              </a>
            </div>
            <div className={styles.logoContainer}>
              <a href="http://icrs.ugm.ac.id/" target="_blank" rel="noopener noreferrer" className={cx(styles.logo)}>
                <IcrsWeb />
              </a>
            </div>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Organizers