import styles from './FundingPartners.module.scss';
import React from 'react';
import cx from 'classnames';
import Box from '../Box/Box';
import Text from '../../primitives/Text/Text';

import { Chulalongkorn, Ford, AsiaCenter, Solo, Ayus  } from './../images/fundings'
import { GraduateWordmark  } from './../images/collaborators'
import Container from '../../layouts/Container/Container';

const PartnerContainer = ({to, name, children, className, ...restProps}) => {
  return (
    to
    ?
      <div className={className}>
        <a href={to} target="_blank" rel="noopener noreferrer">
          <div className={cx(styles.partner)}>
            {children}
          </div>
          {name && <Text heading6 className={styles.partnerName} >{name}</Text>}
        </a>
      </div>
    : <div className={className}>
        <div className={cx(styles.partner)}>
          {children}
        </div>
        {name && <Text heading6 className={styles.partnerName} >{name}</Text>}
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
            <PartnerContainer className={styles.partnerFunding} children={<Chulalongkorn />} to="https://www.chula.ac.th/en/"/>
            <PartnerContainer className={styles.partnerFunding} children={<Ford />} to="https://www.fordfoundation.org/"/>
            <PartnerContainer className={styles.partnerFunding} children={<AsiaCenter />} to="https://www.jpf.go.jp/e/index.html"/>
            <PartnerContainer
              className={styles.partnerFunding}
              children={<Solo />}
              name="The City of Surakarta"
              to="http://surakarta.go.id/"
              />
            <PartnerContainer
              className={styles.partnerFunding}
              children={<GraduateWordmark />}
              // to="http://www.kyoto-u.ac.jp/ja/"
              />
            <PartnerContainer
              className={styles.partnerFunding}
              name="Ayus: Network of Buddhists Volunteers on International Cooperation"
              to="http://jneb.jp/english/japan/ayus"
              children={<Ayus />} />
          </Box>
        </Box>
      </Container>
    </section>
    </>
  )
}

export default FundingPartners