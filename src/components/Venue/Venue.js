import styles from './Venue.module.scss'
import React from 'react'
import cx from 'classnames'

import Box from '../Box/Box'
import Container from '../../layouts/Container/Container'
import Text from '../../primitives/Text/Text'

const Venue = ({
  className,
  ...restProps
  }) => {
  return (
    <Box className={cx(styles.root)}>
      <Container narrow className={styles.container}>
        <Text heading1 component="h2" className={styles.title}>
          Venue
        </Text>
        <Text heading4 className={styles.overview} component="h2">
          The Sunan Hotel<br />
          Solo, Central Java, Indonesia
        </Text>
        <div className={styles.mobileVenue}>
          <div className={styles.venue}>
            <Text heading3 component="h3" className={styles.venueName}>The Sunan Hotel</Text>
            <Text medium component="p">Solo, Central Java, Indonesia</Text>
            <a
              href="https://www.google.com/maps/place/The+Sunan+Hotel/@-7.5577948,110.7941942,15.9z/data=!4m12!1m6!3m5!1s0x2e7a16912e502e11:0xf9e5a89a42aab736!2sThe+Sunan+Hotel!8m2!3d-7.5573252!4d110.794305!3m4!1s0x2e7a16912e502e11:0xf9e5a89a42aab736!8m2!3d-7.5573252!4d110.794305"
              target="_blank"
              rel="noopener noreferrer"
              style={{marginRight: '12px'}}
              >
              View on Map
            </a>
          </div>
        </div>
      </Container>
    </Box>
  )
}

export default Venue