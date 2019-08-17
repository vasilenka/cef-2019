import styles from "./Join.module.scss"
import React from "react"
import cx from "classnames"
// import { Link } from "gatsby"

import Box from "../Box/Box"
import Container from "../../layouts/Container/Container"
import Button from "../../primitives/Button/Button"
// import Text from '../../primitives/Text/Text'

// import Pattern from './../images/pattern0'

const Join = ({ className, ...restProps }) => {
  return (
    <Box className={cx(styles.root)}>
      <Container bleed className={styles.container}>
        {/* <Link className={styles.buttonContainer} to="/join-participant"> */}
        <Button disabled className={styles.button} primary>
          Join as a Participant
        </Button>
        {/* </Link> */}
      </Container>
    </Box>
  )
}

export default Join
