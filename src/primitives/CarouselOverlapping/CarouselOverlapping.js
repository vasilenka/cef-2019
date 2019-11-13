import styles from "./CarouselOverlapping.module.scss"
import React, { useContext } from "react"
import cx from "classnames"
import { OverlappingContext } from "./../Overlapping/Overlapping"

const CarouselOverlapping = ({ children, className, ...restProps }) => {
  let { data } = useContext(OverlappingContext)

  return (
    <div
      className={cx({
        [styles.root]: true,
        [className]: className,
      })}
      {...restProps}>
      {children(data)}
    </div>
  )
}

export default CarouselOverlapping
