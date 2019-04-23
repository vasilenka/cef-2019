import styles from './MapContainer.module.scss'
import React from 'react'
import cx from 'classnames'

import Map from './../Map/Map'
import Box from '../Box/Box'

const MapContainer = ({
  className,
  ...restProps
  }) => {
  return (
    <Box className={cx(styles.root)}>
      <Map
        lat={ -7.5680261 }
        lng={ 110.8172257 }
        isMarkerShown={true}
        />
    </Box>
  )
}

export default MapContainer