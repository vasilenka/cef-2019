import styles from './Join.module.scss';
import React from 'react';
import cx from 'classnames';
import Box from '../Box/Box';
import Container from '../../layouts/Container/Container';
import Text from '../../primitives/Text/Text';
import Button from '../../primitives/Button/Button';

const Join = ({
  className,
  ...restProps
  }) => {
  return (
    <Box className={cx(styles.root)}>
      <Container narrow className={styles.container}>
        <Box column alignStart style={{flex: 1, paddingRight: '32px' }}>
          <Text heading2 component="h2" style={{marginBottom: '12px'}}>
            Join the Event as Participant
          </Text>
          <Text heading5 style={{marginBottom: '48px'}}>
            Experience the amazing event and lorem ipsum dolor  sit amet conseqteteur
          </Text>
          <Button primary>Register as Participant</Button>
        </Box>
        <Box column alignStart style={{flex: 1, paddingRight: '32px'}}>
          <Text heading2 component="h2" style={{marginBottom: '12px'}}>
            Join the Event as Volunteer
          </Text>
          <Text heading5 style={{marginBottom: '48px'}}>
            Team up with amazing people around the world and together let’s prepare the best lorem ipsum
          </Text>
          <Button primary>Register as Volunteer</Button>
        </Box>
      </Container>
    </Box>
  )
}

export default Join