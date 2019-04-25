import styles from './MapContainer.module.scss'
import React from 'react'
import cx from 'classnames'
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
  trigger,
  inView,
  ...restProps
  }) => {

  return (
    <div>
      <Box className={cx(styles.root)}>
        {inView && <MapComponent />}
      </Box>
    </div>
  )
}

export default MapContainer