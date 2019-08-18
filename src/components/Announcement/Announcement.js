import styles from "./Announcement.module.scss"
import React from "react"
import cx from "classnames"

import Box from "../Box/Box"
import Container from "../../layouts/Container/Container"
import Text from "../../primitives/Text/Text"
// import Pattern from "./../images/pattern0"

const Announcement = ({ className, ...restProps }) => {
  return (
    <Box className={cx(styles.root)}>
      <Container bleed className={styles.container}>
        <Box column component="main" className={styles.box}>
          <Text
            heading2
            component="h2"
            style={{ marginBottom: 24, fontSize: 28 }}>
            Registration is now closed!
          </Text>
          <Text medium component="p">
            Organizers would like to express its sincere appreciation for your
            kind interests.
          </Text>
          <Text medium component="p" style={{ marginBottom: 24 }}>
            For those who have successfully registered online, you will receive
            a confirmation e-mail from the organizers.
          </Text>
          <Text heading4Alt component="p">
            Thank you!
          </Text>
        </Box>
      </Container>
    </Box>
  )
}

export default Announcement
