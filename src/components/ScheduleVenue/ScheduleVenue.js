import styles from "./ScheduleVenue.module.scss"
import React from "react"
import cx from "classnames"

import Room from "./../icons/room.inline.svg"
import Text from "../../primitives/Text/Text"
import Box from "../Box/Box"

const ScheduleVenue = ({ children, className, ...restProps }) => {
  return (
    <div className={cx(styles.root)}>
      <Box alignCenter justifyStart className={styles.container}>
        <div className={styles.iconContainer}>
          <Room />
        </div>
        <Text medium className={styles.venue}>
          {children}
        </Text>
      </Box>
    </div>
  )
}

export const ScheduleVenueAlt = ({ children, className, ...restProps }) => {
  return (
    <div className={cx(styles.rootAlt)}>
      <Box alignCenter justifyStart className={styles.containerAlt}>
        <Text medium className={styles.venue}>
          Venue: {children}
        </Text>
      </Box>
    </div>
  )
}

export default ScheduleVenue
