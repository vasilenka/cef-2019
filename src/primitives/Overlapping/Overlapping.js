import styles from "./Overlapping.module.scss"
import React, { createContext, useState, useEffect } from "react"
import cx from "classnames"

export const OverlappingContext = createContext()

const Overlapping = ({
  data,
  autoplay = false,
  children,
  className,
  ...restProps
}) => {
  let [activeIndex, setActiveIndex] = useState(0)
  let [clippingIndex, setClippingIndex] = useState(null)
  let [translateIndex, setTranslateIndex] = useState(null)
  let [fromLeft, setFromLeft] = useState(false)
  let [fromRight, setFromRight] = useState(false)
  let [isTransitioning, setIsTransitioning] = useState(false)

  let [isPlaying, setIsPlaying] = useState(autoplay)

  useEffect(() => {
    if (isPlaying) {
      let timeout = setTimeout(() => {
        setIsTransitioning(true)
        setFromLeft(true)
        setClippingIndex(activeIndex)
        setActiveIndex((activeIndex + 1) % data.length)
        let secondTimeout = setTimeout(() => {
          if (activeIndex < data.length - 1) {
            setTranslateIndex(activeIndex + 1)
          } else {
            setTranslateIndex(0)
          }
          setFromLeft(false)
          setIsTransitioning(false)
        }, 800)
        return () => clearTimeout(secondTimeout)
      }, 3200)
      return () => clearTimeout(timeout)
    }
  }, [activeIndex, isPlaying])

  const next = max => {
    setIsTransitioning(true)
    setFromLeft(true)
    setClippingIndex(activeIndex)
    if (activeIndex < max) {
      setActiveIndex(activeIndex + 1)
    } else {
      setActiveIndex(0)
    }
    setTimeout(() => {
      if (activeIndex < max) {
        setTranslateIndex(activeIndex + 1)
      } else {
        setTranslateIndex(0)
      }
      setFromLeft(false)
      setIsTransitioning(false)
    }, 800)
  }

  const prev = max => {
    setIsTransitioning(true)
    setFromRight(true)
    setClippingIndex(activeIndex)
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1)
    } else {
      setActiveIndex(max)
    }
    setTimeout(() => {
      if (activeIndex > 0) {
        setTranslateIndex(activeIndex - 1)
      } else {
        setTranslateIndex(max)
      }
      setFromRight(false)
      setIsTransitioning(false)
    }, 800)
  }

  return (
    <OverlappingContext.Provider
      value={{
        data,
        next,
        prev,
        activeIndex,
        translateIndex,
        fromLeft,
        fromRight,
        clippingIndex,
        isTransitioning,
        isPlaying,
        setIsPlaying,
      }}>
      <div
        className={cx({
          [styles.root]: true,
          [className]: className,
        })}
        {...restProps}>
        {children}
      </div>
    </OverlappingContext.Provider>
  )
}

export default Overlapping
