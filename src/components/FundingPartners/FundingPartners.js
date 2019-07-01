import styles from './FundingPartners.module.scss';
import React from 'react';
import cx from 'classnames';
import Box from '../Box/Box';
import Text from '../../primitives/Text/Text';

import { Chulalongkorn, Ford, Kyoto, AsiaCenter, Solo  } from './../images/fundings'
import Container from '../../layouts/Container/Container';

const PartnerContainer = ({children, className, ...restProps}) => {
  return (
    <div className={className}>
      <div className={cx(styles.partner)}>
        {children}
      </div>
    </div>
  )
}

const FundingPartners = ({
  className,
  ...restProps
  }) => {
  return (
    <>
    <section className={cx(styles.root)}>
      <div id="funding-partners" className={styles.hack}></div>
      <Container narrow>
        <Box column className={styles.mainPartner} >
          <Text heading1 component="h2" className={styles.title}>Funding Partners</Text>
          <Box justifyCenter alignCenter className={styles.partnerRow}>
            <PartnerContainer className={styles.fundingFirst} children={<Chulalongkorn />} />
            <PartnerContainer className={styles.fundingSecond} children={<AsiaCenter />} />
            <PartnerContainer className={styles.fundingFirst} children={<Ford />} />
            <PartnerContainer className={styles.fundingSecond} children={<Kyoto />} />
            <PartnerContainer className={styles.fundingSecond} children={<Solo />} />
          </Box>
        </Box>
      </Container>
    </section>
    </>
  )
}

export default FundingPartners