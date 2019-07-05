import styles from './Partners.module.scss';
import React from 'react';
import cx from 'classnames';

import Box from '../Box/Box';
import Container from '../../layouts/Container/Container';
import Text from '../../primitives/Text/Text';
import { Chulalongkorn, Ford, Kyoto, AsiaCenter, Solo, Ayus  } from './../images/fundings'
import { SoloCity, Banjarmasin, Surabaya, Yala, Sagada, Wonosobo, Gunungkidul, Mataram  } from './../images/govs'

import {
  AsianVision,
  Chulalongkorn as ChulalongkornAlt,
  CitizenFarm,
  DutaWacana,
  EcologicalAlert,
  EngagedBuddhist,
  Gadjah,
  GraduateSchool,
  GraduateWordmark,
  Ias,
  Isis,
  Saft,
  Mekong,
  Monash,
  Morris,
  Participatory,
  Simon,
  Sunan  } from './../images/collaborators'

const PartnerContainer = ({children, className, ...restProps}) => {
  return (
    <div className={className}>
      <div className={cx(styles.partner)}>
        {children}
      </div>
    </div>
  )
}

const Partners = ({
  className,
  ...restProps
  }) => {
  return (
    <Box className={cx(styles.root)}>
      <Container narrow className={styles.container}>
        <Box column className={styles.mainPartner}>
          <Text heading2 component="h2" className={styles.title}>Collaborators</Text>
          <Box justifyCenter alignCenter className={styles.partnerRow}>
            <PartnerContainer className={styles.fundingSecond} children={<DutaWacana />} />
            <PartnerContainer className={styles.fundingSecond} children={<Gadjah />} />
            <PartnerContainer className={styles.fundingSecond} children={<Sunan />} />
            <PartnerContainer className={styles.fundingSecond} children={<ChulalongkornAlt />} />
            <PartnerContainer className={styles.fundingSecond} children={<EngagedBuddhist />} />
            <PartnerContainer className={styles.fundingSecond} children={<Mekong />} />
            <PartnerContainer className={styles.fundingSecond} children={<Monash />} />
            <PartnerContainer className={styles.fundingSecond} children={<Ias />} />
            <PartnerContainer className={styles.fundingSecond} children={<Isis />} />
            <PartnerContainer className={styles.fundingSecond} children={<Saft />} />
            <PartnerContainer className={styles.fundingSecond} children={<AsianVision />} />
            <PartnerContainer className={styles.fundingSecond} children={<CitizenFarm />} />
            <PartnerContainer className={styles.fundingSecond} children={<Participatory />} />
            <PartnerContainer className={styles.fundingSecond} children={<EcologicalAlert />} />
            <PartnerContainer className={styles.fundingSecond} children={<GraduateWordmark />} />
            <PartnerContainer className={styles.fundingSecond} children={<GraduateSchool />} />
            <PartnerContainer className={styles.fundingThird} children={<Morris />} />
            <PartnerContainer className={styles.fundingThird} children={<Simon />} />
          </Box>
          <Box justifyCenter alignCenter className={styles.partnerRow} style={{paddingTop: '64px'}}>
            <PartnerContainer className={styles.fundingCity} children={<Banjarmasin />} />
            <PartnerContainer className={styles.fundingCity} children={<Gunungkidul />} />
            <PartnerContainer className={styles.fundingCity} children={<Mataram />} />
            <PartnerContainer className={styles.fundingCity} children={<Sagada />} />
            <PartnerContainer className={styles.fundingCity} children={<SoloCity />} />
            <PartnerContainer className={styles.fundingCity} children={<Surabaya />} />
            <PartnerContainer className={styles.fundingCity} children={<Wonosobo />} />
            <PartnerContainer className={styles.fundingCity} children={<Yala />} />
          </Box>
        </Box>
        <Box column className={styles.mainPartner} style={{maxWidth: '720px' }}>
          <Text heading2 component="h2" className={styles.title}>Funding Partners</Text>
          <Box justifyCenter alignCenter className={styles.partnerRow}>
            <PartnerContainer className={styles.fundingFirst} children={<Chulalongkorn />} />
            <PartnerContainer className={styles.fundingFirst} children={<Ford />} />
            <PartnerContainer className={styles.fundingFirst} children={<AsiaCenter />} />
            <PartnerContainer className={styles.fundingFirst} children={<Kyoto />} />
            <PartnerContainer className={styles.fundingFirst} children={<Solo />} />
            <PartnerContainer className={styles.fundingFirst} children={<Ayus />} />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Partners