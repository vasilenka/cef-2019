import styles from './Hero.module.scss';
import React from 'react';
import cx from 'classnames';
import Text from '../../primitives/Text/Text';
import Box from '../Box/Box';
import Container from '../../layouts/Container/Container';
import Info from '../Info/Info';

const Hero = ({
  className,
  ...restProps
  }) => {
  return (
    <div className={cx(styles.root)}>
      <Container narrow className={cx(styles.container)}>
        <Box alignCenter justifyStart style={{ height: '100%' }}>
          <Box column alignStart style={{maxWidth: '696px'}}>
            <Text display3 component="h1" className={styles.title}>
              Civic Engagement 4.0
            </Text>
            <Text heading4 className={styles.tagline}>
              Justice ~ Dignity ~ Sustainability
            </Text>
            <Text medium className={styles.overview} component="p">
              A regional platform for mutual learning, action and advocacy, working toward achieving dignity, justice and sustainability in Southeast Asian (SEA) society.
            </Text>
            <Info label="Date" value="August 20 - 23, 2019" />
            <Info label="Venue" value="Novotel hotel and public facilities at Solo, Central Java, Indonesia" />
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default Hero