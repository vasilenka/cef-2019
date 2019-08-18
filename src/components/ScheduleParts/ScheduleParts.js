import styles from "./ScheduleParts.module.scss"
import React from "react"
import cx from "classnames"

import FullPrograms from "../FullPrograms/FullPrograms"
import SectionLink from "../SectionLink/SectionLink"
import Box from "../Box/Box"
import Text from "../../primitives/Text/Text"

const ScheduleParts = ({ className, ...restProps }) => {
  const [showPrograms, setShowPrograms] = React.useState(false)

  return (
    <>
      <ul className={cx(styles.root)}>
        <li className={cx(styles.item)}>- Thematic Site Visits</li>
        <li className={cx(styles.item)}>- Public Forum</li>
        <li className={cx(styles.item)}>- Mayors’ Symposium</li>
      </ul>
      <Text strong heading5 component="p">
        Simultaneous Interpretation will be available (Bahasa Indonesia and
        English) for Plenary Sessions.
      </Text>
      <Box component="footer">
        <SectionLink
          onClick={() => setShowPrograms(true)}
          containerClassName={styles.containerFooter}>
          Download Program as PDF
        </SectionLink>
      </Box>
      {showPrograms && <FullPrograms setShowPrograms={setShowPrograms} />}
    </>
  )
}

export default ScheduleParts
