import React, { useContext } from "react"
import { OverlappingContext } from "./../Overlapping/Overlapping"

const CarouselNext = ({ children, ...restProps }) => {
  let context = useContext(OverlappingContext)
  return <React.Fragment {...restProps}>{children(context)}</React.Fragment>
}

export default CarouselNext
