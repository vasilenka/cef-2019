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
        <div className={styles.row}>
          <Box column alignStart className={styles.section}>
            <Text heading2 component="h2" className={styles.title}>
              Join the Event as Participant
            </Text>
            <Text heading5 className={styles.description}>
              Experience the amazing event and lorem ipsum dolor  sit amet conseqteteur
            </Text>
            <Button primary>Register as Participant</Button>
          </Box>
          <Box column alignStart className={styles.section}>
            <Text heading2 component="h2" className={styles.title}>
              Join the Event as Volunteer
            </Text>
            <Text heading5 className={styles.description}>
              Team up with amazing people around the world and together let’s prepare the best
            </Text>
            <Button primary>Register as Volunteer</Button>
          </Box>
        </div>
      </Container>
    </Box>
  )
}

export default Join