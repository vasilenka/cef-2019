import styles from './MapContainer.module.scss'
import React from 'react'
import cx from 'classnames'
import { useInView } from 'react-intersection-observer'
import loadable from '@loadable/component'

import Box from '../Box/Box'
import Spinner from '../../primitives/preloader/Spinner/Spinner';
const MapComponent = loadable(() => import('./../Map/Map'), {
  fallback: <div className={styles.fallbackContainer}>
    <div className={styles.container}>
      <Spinner />
    </div>
  </div>,
})

const MapContainer = ({
  className,
  ...restProps
  }) => {

  const [ref, inView] = useInView({
    rootMargin: "0px 0px 0px 0px",
    threshold: 0,
    triggerOnce: true,
  })

  return (
    <div ref={ref}>
      <Box className={cx(styles.root)}>
        {inView && <MapComponent />}
      </Box>
    </div>
  )
}

export default MapContainer