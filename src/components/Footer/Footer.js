import styles from "./Footer.module.scss"
import React from "react"
import cx from "classnames"
import { Link } from "gatsby"

import Box from "../Box/Box"
import Container from "../../layouts/Container/Container"
import Text from "../../primitives/Text/Text"

import Facebook from "./icons/facebook.inline.svg"
import Instagram from "./icons/instagram.inline.svg"
import Youtube from "./icons/youtube.inline.svg"

const Footer = ({ className, ...restProps }) => {
  return (
    <div className={cx(styles.root)}>
      <Container narrow className={styles.container}>
        <Box column alignStart justifyStart style={{ marginBottom: "48px" }}>
          <Text
            component="h2"
            heading2
            className={styles.title}
            style={{ marginBottom: "24px" }}>
            Contact Us
          </Text>
          <Text medium>
            For general questions, please refer to <Link to="/faqs">FAQs</Link> page.
          </Text>
          <Text medium>
            If your inquiry/question is not yet addressed by the FAQs, please contact us at
          </Text>
        </Box>
        <Box alignCenter className={styles.footer}>
          <Box column alignStart className={styles.contact}>
            <a href="mailto:civicengagementforum.com" rel="noopener noreferrer">
              <Text heading4 style={{ fontWeight: 500, letterSpacing: "0" }}>
                info@civicengagementforum.net
              </Text>
            </a>
          </Box>
          <Box className={styles.socmed}>
            <a
              href="https://www.instagram.com/civicengagement4.0"
              target="_blank"
              rel="noopener noreferrer">
              <Instagram style={{ height: "24px", marginRight: "40px" }} />
            </a>
            <a
              href="https://www.facebook.com/civicengagement2019"
              target="_blank"
              rel="noopener noreferrer">
              <Facebook style={{ height: "24px", marginRight: "40px" }} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCZuDtCskSl2UDsoqGAdAhag"
              target="_blank"
              rel="noopener noreferrer">
              <Youtube style={{ height: "24px", marginRight: "40px" }} />
            </a>
          </Box>
        </Box>
      </Container>
      <div className={styles.pattern}></div>
    </div>
  )
}

export default Footer
