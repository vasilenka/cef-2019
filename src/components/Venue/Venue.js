import styles from './Venue.module.scss'
import React from 'react'
import cx from 'classnames'
// import {Link} from 'gatsby'

import Box from '../Box/Box'
import Container from '../../layouts/Container/Container'
import Text from '../../primitives/Text/Text'

import Button from '../../primitives/Button/Button';

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
          Sunan Hotel &amp; Universitas Sebelas Maret (UNS)<br />
          Solo, Central Java, Indonesia
        </Text>
        <Box>
          {/* <Link to={'/venue'}><Button primary small style={{marginRight: '12px'}}>How to get there?</Button></Link> */}
          <a
            href="https://www.google.com/maps/place/The+Sunan+Hotel/@-7.5577948,110.7941942,15.9z/data=!4m12!1m6!3m5!1s0x2e7a16912e502e11:0xf9e5a89a42aab736!2sThe+Sunan+Hotel!8m2!3d-7.5573252!4d110.794305!3m4!1s0x2e7a16912e502e11:0xf9e5a89a42aab736!8m2!3d-7.5573252!4d110.794305"
            target="_blank"
            rel="noopener noreferrer"
            style={{marginRight: '12px'}}
            >
            <Button secondaryAlt small>View Sunan Hotel on Maps</Button>
          </a>
          <a
            href="https://www.google.com/maps/place/Sebelas+Maret+University/@-7.5603858,110.8560903,15.93z/data=!4m5!3m4!1s0x2e7a14234667a3fd:0xbda63b32997616ad!8m2!3d-7.5596031!4d110.8565448"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Button secondaryAlt small>View UNS on Maps</Button>
          </a>
        </Box>
      </Container>
    </Box>
  )
}

export default Venue