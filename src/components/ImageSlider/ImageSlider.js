import styles from "./ImageSlider.module.scss"
import React, { useContext } from "react"
import Image from "gatsby-image"
import { Captions } from "./caption"

import Container from "../../layouts/Container/Container"

import Overlapping from "../../primitives/Overlapping/Overlapping"
import OverlappingItem from "../../primitives/OverlappingItem/OverlappingItem"
import CarouselOverlapping from "../../primitives/CarouselOverlapping/CarouselOverlapping"
import CarouselControl from "../../primitives/CarouselControl/CarouselControl"

import ArrowRight from "./../icons/arrow-right.inline.svg"
import ArrowLeft from "./../icons/arrow-left.inline.svg"
import Play from "./../icons/play.inline.svg"
import Pause from "./../icons/pause.inline.svg"

import { OverlappingContext } from "./../../primitives/Overlapping/Overlapping"
import Text from "../../primitives/Text/Text"
import Hack from "../Hack/Hack"

const SliderCounter = ({ total }) => {
  let { activeIndex } = useContext(OverlappingContext)

  return (
    <div className={styles.counter}>
      <Text medium style={{ fontWeight: 600 }}>
        {activeIndex + 1} <span style={{ opacity: 0.44 }}> / {total}</span>
      </Text>
    </div>
  )
}

const ImageSlider = ({ eventPhotos, children, className, ...restProps }) => {
  let photos = eventPhotos.map(({ node: { childImageSharp: { fluid } } }, index) => ({
    fluid,
    id: `${index + 1}`,
  }))

  return (
    <section className={styles.root}>
      <Hack id="image-slider" />
      <Container narrow>
        <header style={{ paddingBottom: "48px" }}>
          <Text heading2 component="h1">
            Event Photos
          </Text>
        </header>
        <Overlapping autoplay data={photos} className={styles.iseng}>
          <CarouselOverlapping style={{ width: "100%", paddingBottom: `60%` }}>
            {data =>
              data.map((image, index) => (
                <OverlappingItem key={image.id} index={index} item={image}>
                  <Image fluid={image.fluid} alt={Captions[index]} />
                </OverlappingItem>
              ))
            }
          </CarouselOverlapping>
          <footer className={styles.footer}>
            <div className={styles.captionContainer}>
              <SliderCounter total={photos.length} />
              <div className={styles.caption}>
                <CarouselControl>
                  {({ activeIndex }) => (
                    <Text medium as="p">
                      {Captions[activeIndex]}
                    </Text>
                  )}
                </CarouselControl>
              </div>
            </div>
            <div className={styles.controlContainer}>
              <CarouselControl>
                {({ data, isTransitioning, prev }) => (
                  <button
                    type="button"
                    className={styles.controlLeft}
                    disabled={isTransitioning}
                    onClick={() => prev(data.length - 1)}>
                    <ArrowLeft style={{ display: "block", transform: "rotate(180deg)" }} />
                  </button>
                )}
              </CarouselControl>
              <CarouselControl>
                {({ isPlaying, setIsPlaying }) =>
                  isPlaying ? (
                    <button
                      type="button"
                      className={styles.controlLeft}
                      onClick={() => setIsPlaying(false)}>
                      <Pause style={{ display: "block" }} />
                    </button>
                  ) : (
                    <button
                      type="button"
                      className={styles.controlLeft}
                      onClick={() => setIsPlaying(true)}>
                      <Play style={{ display: "block" }} />
                    </button>
                  )
                }
              </CarouselControl>
              <CarouselControl>
                {({ data, isTransitioning, next }) => (
                  <button
                    type="button"
                    className={styles.controlRight}
                    disabled={isTransitioning}
                    onClick={() => next(data.length - 1)}>
                    <ArrowRight style={{ display: "block" }} />
                  </button>
                )}
              </CarouselControl>
            </div>
          </footer>
        </Overlapping>
      </Container>
    </section>
  )
}

export default ImageSlider
