import styles from './Footer.module.scss'
import React from 'react'
import cx from 'classnames'
import Box from '../Box/Box'
import Container from '../../layouts/Container/Container'
import Text from '../../primitives/Text/Text'

import Facebook from './icons/facebook.inline.svg'
import Twitter from './icons/twitter.inline.svg'
import Instagram from './icons/instagram.inline.svg'
import Youtube from './icons/youtube.inline.svg'
import Medium from './icons/medium.inline.svg'

const Footer = ({
  className,
  ...restProps
  }) => {
  return (
    <Box className={cx(styles.root)}>
      <Container narrow className={styles.container}>
        <Box column alignStart justifyStart style={{marginBottom: '48px'}}>
          <Text component="h2" heading2 style={{color: "#FFFFFF", marginBottom: '8px'}}>Contact us</Text>
          <Text medium style={{color: "#f8f8f8"}}>For more informations and inquiries, please send an email or give us a call.</Text>
        </Box>
        <Box alignCenter>
          <Box column alignStart style={{flex: 2}}>
            <a href="tel:+6282377296969" rel="noopener noreferrer" style={{marginBottom: '12px'}}>
              <Text heading4 style={{color: "#FFFFFF"}}>+62 823 7729 6969</Text>
            </a>
            <a href="mailto:civicengagementforum.com" rel="noopener noreferrer">
              <Text heading4 style={{color: "#FFFFFF"}}>hello@civicengagementforum.com</Text>
            </a>
          </Box>
          <Box justifyEnd style={{flex: 1, flexWrap: 'wrap'}}>
            {/* <Text heading5 style={{color: "#FFFFFF"}}>Socmed icon goes here</Text> */}
            <Instagram style={{color: "#FFFFFF", height: '24px', marginRight: '24px'}} />
            <Facebook style={{color: "#FFFFFF", height: '24px', marginRight: '24px'}} />
            <Twitter style={{color: "#FFFFFF", height: '24px', marginRight: '24px'}} />
            <Youtube style={{color: "#FFFFFF", height: '24px', marginRight: '24px'}} />
            <Medium style={{color: "#FFFFFF", height: '24px', }} />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer