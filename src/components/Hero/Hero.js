import styles from "./Hero.module.scss"
import React from "react"
import cx from "classnames"
import { Link } from "gatsby"

import Text from "../../primitives/Text/Text"
import Box from "../Box/Box"
import Container from "../../layouts/Container/Container"
import Button from "../../primitives/Button/Button"

import Play from "./../icons/play.inline.svg"

// import Cloud1 from "./../images/cloud1--alt"
// import Cloud2 from "./../images/cloud2--alt"
// import Cloud3 from "./../images/cloud3--alt"

const Hero = ({ className, setShowVideo, ...restProps }) => {
  return (
    <div className={cx(styles.root)}>
      {/* <div className={styles.cloud1}>
        <Cloud1 />
      </div>
      <div className={styles.cloud2}>
        <Cloud2 />
      </div>
      <div className={styles.cloud3}>
        <Cloud3 />
      </div> */}
      <video
        src="https://www.civicengagementforum.net/solo/video/ce-highlight.mp4"
        className={styles.video}
        autoPlay={true}
        loop={true}
        muted
      />
      <section className={styles.overlay}>
        <Container narrow className={cx(styles.container)}>
          <Box style={{ height: "100%" }} alignCenter justifyStart>
            <Box column alignStart>
              <Text display3 component="h1" className={styles.title}>
                Civic Engagement 4.0
              </Text>
              <Text heading4 className={styles.tagline}>
                Justice ~ Dignity ~ Sustainability
              </Text>
              <div className={styles.overview__container}>
                <Text medium className={styles.overview} component="p">
                  A regional platform for mutual learning, action and advocacy, working toward
                  achieving dignity, justice and sustainability in Southeast Asian (SEA)
                  society.
                </Text>
                <Link to="/about">Read more...</Link>
              </div>
              <footer style={{ padding: "12px 0px" }}>
                <Button
                  primary
                  style={{ borderRight: "1px solid rgb(0,0,0)" }}
                  onClick={() => setShowVideo(true)}>
                  <Play style={{ display: "block", marginRight: 8 }} /> View 2019 Forum Video
                </Button>
                <Link to="/presentation-materials">
                  <Button primary>View 2019 Forum Photos</Button>
                </Link>
              </footer>
            </Box>
          </Box>
        </Container>
      </section>
    </div>
  )
}

export default Hero
