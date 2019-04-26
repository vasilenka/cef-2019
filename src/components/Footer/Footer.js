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
          <Text component="h2" heading2 className={styles.title} style={{ marginBottom: '8px'}}>Contact us</Text>
          <Text medium>For more informations and inquiries, please send an email or give us a call.</Text>
        </Box>
        <Box alignCenter>
          <Box column alignStart style={{flex: 2}}>
            <a href="tel:+6282377296969" rel="noopener noreferrer" style={{marginBottom: '12px', color: '#FFFFFF' }}>
              <Text heading4 style={{fontWeight: 500, letterSpacing: '0'}}>+62 823 7729 6969</Text>
            </a>
            <a href="mailto:civicengagementforum.com" rel="noopener noreferrer" style={{color: '#FFFFFF'}}>
              <Text heading4 style={{fontWeight: 500, letterSpacing: '0'}}>hello@civicengagementforum.com</Text>
            </a>
          </Box>
          <Box justifyEnd style={{flex: 1, flexWrap: 'wrap'}}>
            <Instagram style={{ height: '24px', marginRight: '24px'}} />
            <Facebook style={{ height: '24px', marginRight: '24px'}} />
            <Twitter style={{ height: '24px', marginRight: '24px'}} />
            <Youtube style={{ height: '24px', marginRight: '24px'}} />
            <Medium style={{ height: '24px', }} />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer