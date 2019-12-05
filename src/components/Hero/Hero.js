import styles from "./Hero.module.scss"
import React, { useRef, useEffect, useState } from "react"
import cx from "classnames"
import { Link } from "gatsby"
import Image from "gatsby-image"

import Text from "../../primitives/Text/Text"
import Box from "../Box/Box"
import Container from "../../layouts/Container/Container"
import Button from "../../primitives/Button/Button"

// import Play from "./../icons/play.inline.svg"

// import Cloud1 from "./../images/cloud1--alt"
// import Cloud2 from "./../images/cloud2--alt"
// import Cloud3 from "./../images/cloud3--alt"

const VideoBackground = ({ cover }) => {
  let [loaded, setLoaded] = useState(false)

  let videoRef = useRef(null)

  useEffect(() => {
    videoRef.current.addEventListener(
      "loadeddata",
      function() {
        setLoaded(true)
      },
      false
    )
  }, [])

  return (
    <>
      <video
        ref={videoRef}
        src="https://www.civicengagementforum.net/solo/video/ce-highlight.mp4"
        className={styles.video}
        autoPlay={true}
        loop={true}
        muted></video>
      {loaded ? null : (
        <div className={styles.beforeLoad}>
          <Image className={styles.imageCover} fluid={cover} />
        </div>
      )}
    </>
  )
}

const Hero = ({ cover, className, setShowVideo, ...restProps }) => {
  return (
    <div className={cx(styles.root)}>
      <VideoBackground cover={cover} />
      <section className={styles.overlay}>
        <div className={styles.overlayColor} />
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
                <Button primary className={styles.cta} onClick={() => setShowVideo(true)}>
                  View 2019 Forum Video
                </Button>
                <Link to="/#image-slider">
                  <Button primary className={styles.cta}>
                    View 2019 Forum Photos
                  </Button>
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
