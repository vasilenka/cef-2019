import styles from './Map.module.scss'
import React from 'react'
import cx from 'classnames'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { compose, withProps } from "recompose"

const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBYlKPoFn7XLbbh_VrMZiek7QL-tYC_8wA",
    loadingElement: <div className={cx(styles.loadingElement)} style={{ height: `100%` }} />,
    containerElement: <div className={cx(styles.containerElement)}/>,
    mapElement: <div className={cx(styles.mapElement)} style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(({
  className,
  lat,
  lng,
  ...restProps
  }) =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: -7.5680261, lng: 110.8172257 }}
    defaultOptions={{
      // zoomControl: boolean,
      mapTypeControl: false,
      // scaleControl: boolean,
      // streetViewControl: boolean,
      // rotateControl: boolean,
      // fullscreenControl: boolean
    }}
  >
    <Marker position={{ lat: -7.5680261, lng: 110.8172257 }} />
  </GoogleMap>)

export default Map