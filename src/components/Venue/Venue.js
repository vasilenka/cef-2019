import styles from './Venue.module.scss'
import React from 'react'
import cx from 'classnames'
import {Link} from 'gatsby'

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
          Novotel hotel<br />
          Solo, Central Java, Indonesia
        </Text>
        <Box>
          <Link to={'/venue'}><Button primary small style={{marginRight: '12px'}}>How to get there?</Button></Link>
          <a
            href="https://www.google.com/maps/place/Novotel+Solo/@-7.5679198,110.8149673,17z/data=!3m1!4b1!4m5!3m4!1s0x2e7a1687812c1277:0x69f00f2d4cfc3485!8m2!3d-7.5679198!4d110.817156"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Button secondaryAlt small>Open in Google Maps</Button>
          </a>
        </Box>
      </Container>
    </Box>
  )
}

export default Venue