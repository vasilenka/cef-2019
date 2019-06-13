import styles from './Footer.module.scss'
import React from 'react'
import cx from 'classnames'
import {Link} from 'gatsby'

import Box from '../Box/Box'
import Container from '../../layouts/Container/Container'
import Text from '../../primitives/Text/Text'

import Facebook from './icons/facebook.inline.svg'
import Twitter from './icons/twitter.inline.svg'
import Instagram from './icons/instagram.inline.svg'
import Youtube from './icons/youtube.inline.svg'

const Footer = ({
  className,
  ...restProps
  }) => {
  return (
    <Box className={cx(styles.root)}>
      <Container narrow className={styles.container}>
        <Box column alignStart justifyStart style={{marginBottom: '48px'}}>
          <Text component="h2" heading2 className={styles.title} style={{ marginBottom: '24px'}}>Contact us</Text>
          <Text medium>For general questions, please refer to <Link to="/faq">FAQs</Link> page.</Text>
          <Text medium>If your inquiry/question is not yet addressed by the FAQs, please contact us at</Text>
        </Box>
        <Box alignCenter className={styles.footer}>
          <Box column alignStart className={styles.contact}>
            <a href="mailto:civicengagementforum.com" rel="noopener noreferrer">
              <Text heading3Alt style={{fontWeight: 500, letterSpacing: '0'}}>info@civicengagementforum.net</Text>
            </a>
          </Box>
          <Box className={styles.socmed}>
            <Instagram style={{ height: '24px', marginRight: '40px'}} />
            <Facebook style={{ height: '24px', marginRight: '40px'}} />
            <Twitter style={{ height: '24px', marginRight: '40px'}} />
            <Youtube style={{ height: '24px', marginRight: '40px'}} />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer