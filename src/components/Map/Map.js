import styles from './Map.module.scss'
import React from 'react'
import cx from 'classnames'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { compose, withProps } from "recompose"
import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox"

import Text from '../../primitives/Text/Text';
import Arrow from '../../components/icons/arrow.inline.svg';

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
  }) => {

  const [width, setWidth] = React.useState(window.innerWidth)

  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", setWidth(window.innerWidth));
    }
  }, [])

  return (
    <GoogleMap
      defaultZoom={
        width < 600
          ? 12
          : 600 < width < 720
            ? 14
            : 14
      }
      defaultCenter={{ lat: -7.557286, lng: 110.7943181 }}
      defaultOptions={{
        // zoomControl: boolean,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        // fullscreenControl: boolean
      }}
    >
      <Marker position={{ lat: -7.557286, lng: 110.7943181 }} onClick={() => window.open("https://www.google.com/maps/place/The+Sunan+Hotel/@-7.5577948,110.7941942,15.9z/data=!4m12!1m6!3m5!1s0x2e7a16912e502e11:0xf9e5a89a42aab736!2sThe+Sunan+Hotel!8m2!3d-7.5573252!4d110.794305!3m4!1s0x2e7a16912e502e11:0xf9e5a89a42aab736!8m2!3d-7.5573252!4d110.794305")}>
        <InfoBox
          visible={width > 720}
          onCloseClick={() => console.log('Hiphophile')}
          options={{ closeBoxURL: ``, enableEventPropagation: true }}>
          <a
            href="https://www.google.com/maps/place/The+Sunan+Hotel/@-7.5577948,110.7941942,15.9z/data=!4m12!1m6!3m5!1s0x2e7a16912e502e11:0xf9e5a89a42aab736!2sThe+Sunan+Hotel!8m2!3d-7.5573252!4d110.794305!3m4!1s0x2e7a16912e502e11:0xf9e5a89a42aab736!8m2!3d-7.5573252!4d110.794305"
            target="_blank"
            rel="noopener noreferrer" >
            <div className={styles.infoBoxContainer}>
              <Text heading5Alt className={styles.venue} component="p">The Sunan Hotel</Text>
              <footer className={styles.infoFooter}>
                View on Map
                <Arrow className={styles.arrow} />
              </footer>
            </div>
          </a>
        </InfoBox>
      </Marker>
    </GoogleMap>
  )
})

export default Map