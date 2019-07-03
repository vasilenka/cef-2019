import styles from './Organizers.module.scss'
import React from 'react'
import cx from 'classnames'
import { Link } from 'gatsby'

import Box from '../Box/Box'
import Container from '../../layouts/Container/Container'
import Text from '../../primitives/Text/Text'

import IcrsWeb from './../images/organizers/icrs'
import KotaKitaWeb from './../images/organizers/kk'
import Combine from './../images/organizers/combine'
// import UnivWeb from './../images/organizers/univ'
// import Ias from './../images/organizers/ias'
// import Ornament from '../Ornament/Ornament';

const Organizers = ({
  className,
  ...restProps
  }) => {
  return (
    <Box className={cx(styles.root)}>
      {/* <Ornament /> */}
      <Container narrow className={cx(styles.container)}>
        <Box alignCenter className={styles.organizerContainer}>
          <Text heading5Alt component="h2" className={styles.title}>Co-organized by : </Text>
          <Box alignCenter className={cx(styles.columnRow)}>
            {/* <div className={styles.logoContainer}>
              <Link to="/organizers#chulalongkorn-university" className={cx(styles.logo, styles.logoUniv)}>
                <UnivWeb />
              </Link>
            </div> */}
            <div className={cx(styles.logoContainer, styles.combine)}>
              <Link to="/organizers#chulalongkorn-university" className={cx(styles.logo, styles.ias)}>
                <Combine />
              </Link>
            </div>
            <div className={styles.logoContainer}>
              <Link to="/organizers#icrs" className={cx(styles.logo)}>
                <IcrsWeb />
              </Link>
            </div>
            <div className={styles.logoContainer}>
              <Link to="/organizers#kotakita" className={cx(styles.logo)}>
                <KotaKitaWeb />
              </Link>
            </div>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Organizers