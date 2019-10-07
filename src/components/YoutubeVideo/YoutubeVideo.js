import styles from "./YoutubeVideo.module.scss"
import React, { useLayoutEffect } from "react"
import cx from "classnames"

import Container from "../../layouts/Container/Container"
import Button from "../../primitives/Button/Button"

const YoutubeVideo = ({ setShowVideo, children, className, ...restProps }) => {
  useLayoutEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <section className={cx(styles.root)} {...restProps}>
      <Container bleed className={styles.container}>
        <Container narrow>
          <nav className={styles.nav}>
            <Button
              primary
              onClick={() => setShowVideo(false)}
              style={{ textTransform: "uppercase" }}>
              Close Video
            </Button>
          </nav>
        </Container>
        <iframe
          title="Civic Engagement 4.0 event highlight video"
          className={styles.video}
          src="https://www.youtube.com/embed/ZJHXMp6Alu0?&autoplay=1"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture, full-screen"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen></iframe>
      </Container>
    </section>
  )
}

export default YoutubeVideo
