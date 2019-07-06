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
  // Chulalongkorn as ChulalongkornAlt,
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
            <PartnerContainer className={styles.fundingSecond} children={<DutaWacana />} to="https://www.ukdw.ac.id/" />
            <PartnerContainer className={styles.fundingSecond} children={<Gadjah />} to="https://ugm.ac.id/" />
            <PartnerContainer className={styles.fundingSecond} children={<Sunan />} to="http://uin-suka.ac.id/" />
            <PartnerContainer className={styles.fundingSecond} children={<Ias />} to="http://www.ias.chula.ac.th/ias/en/index.php"/>
            {/* <PartnerContainer className={styles.fundingSecond} children={<ChulalongkornAlt />} to="https://www.chula.ac.th/en/" /> */}
            <PartnerContainer className={styles.fundingSecond} children={<EngagedBuddhist />} to="http://inebnetwork.org/" />
          </Box>
          <Box justifyCenter alignCenter className={styles.partnerRow}>
            <PartnerContainer className={styles.fundingSecond} children={<Monash />} to="https://monash.edu.my/" />
            <PartnerContainer className={styles.fundingSecond} children={<Isis />} to="https://www.isis.org.my/" />
            <PartnerContainer className={styles.fundingSecond} children={<Morris />} to="https://www.sfu.ca/dialogue.html"/>
            <PartnerContainer className={styles.fundingSecond} children={<Simon />} to="https://www.sfu.ca/" />
            <PartnerContainer className={styles.fundingSecond} children={<AsianVision />} to="https://www.asianvision.org/" />
            <PartnerContainer className={styles.fundingSecond} children={<CitizenFarm />} to="https://www.citizenfarm.com.sg/"/>
          </Box>
          <Box justifyCenter alignCenter className={styles.partnerRow}>
            <PartnerContainer
              className={styles.fundingSecond}
              children={<EcologicalAlert />}
              name="Ecological Alert and Recovery - Thailand"
              to="http://www.earththailand.org/en/"
              />
            <PartnerContainer
              className={styles.fundingSecond}
              children={<Kyoto />}
              name="Kyoto University"
              to="https://www.kyoto-u.ac.jp/en/"
              />
            <PartnerContainer
              className={styles.fundingSecond}
              children={<GraduateSchool />}
              name="Graduate School of Education, Kyoto University"
              to="https://www.educ.kyoto-u.ac.jp/en/graduate-school-of-education"
              />
            <PartnerContainer
              className={styles.fundingSecond}
              children={<Saft />}
              name="Sustainable Agriculture Foundation Thailand"
              to="http://www.sathai.org/joomla/"
              />
            <PartnerContainer
              className={styles.fundingSecond}
              children={<Mekong />}
              name="Mekong Watch"
              to="http://www.mekongwatch.org/english/"/>
            <PartnerContainer
              className={styles.fundingSecond}
              children={<Participatory />}
              name="Participatory Development Training Centre"
              to="https://www.padetc.org/"
              />
          </Box>
        </Box>
        <Box column className={styles.mainPartner}>
          <Text heading3 component="h2" className={cx(styles.title, styles.subtitle)}>City Governments of:</Text>
          <Box justifyCenter alignCenter className={styles.partnerRow}>
            <PartnerContainer className={styles.partnerCity} children={<Banjarmasin />} name="Banjarmasin" to="http://banjarmasinkota.go.id/"/>
            <PartnerContainer className={styles.partnerCity} children={<Mataram />} name="Mataram" to="http://mataramkota.go.id/"/>
            <PartnerContainer className={styles.partnerCity} children={<Surabaya />} name="Surabaya" to="https://www.surabaya.go.id/" />
            <PartnerContainer className={styles.partnerCity} children={<SoloCity />} name="Surakarta" to="http://surakarta.go.id/"/>
            <PartnerContainer className={styles.partnerCity} children={<Gunungkidul />} name="Gunungkidul Regency" to="https://gunungkidulkab.go.id/"/>
            <PartnerContainer className={styles.partnerCity} children={<Sagada />} name="Municipality of Sagada"/>
            <PartnerContainer className={styles.partnerCity} children={<Wonosobo />} name="Wonosobo Regency" to="https://wonosobokab.go.id/" />
            <PartnerContainer className={styles.partnerCity} children={<Yala />} name="Yala Municipality" to="http://www.yalacity.go.th/frontpage"/>
          </Box>
          {/* <Box justifyCenter alignCenter className={styles.partnerRow}>
            <PartnerContainer className={styles.partnerCity} children={<Gunungkidul />} name="Gunungkidul Regency" to="https://gunungkidulkab.go.id/"/>
            <PartnerContainer className={styles.partnerCity} children={<Sagada />} name="Municipality of Sagada"/>
            <PartnerContainer className={styles.partnerCity} children={<Wonosobo />} name="Wonosobo Regency" to="https://wonosobokab.go.id/" />
            <PartnerContainer className={styles.partnerCity} children={<Yala />} name="Yala Municipality" to="http://www.yalacity.go.th/frontpage"/>
          </Box> */}
        </Box>
        <Box column className={styles.mainPartner} style={{maxWidth: '720px' }}>
          <Text heading2 component="h2" className={styles.title}>Funding Partners</Text>
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
          {/* <Box justifyCenter alignCenter className={styles.partnerRow}>
            <PartnerContainer
              className={styles.partnerFunding}
              children={<Solo />}
              name="The City of Surakarta"
              to="http://surakarta.go.id/"
              />
            <PartnerContainer
              className={styles.partnerFunding}
              children={<GraduateWordmark />}
              to="http://www.kyoto-u.ac.jp/ja/"
              />
            <PartnerContainer
              className={styles.partnerFunding}
              name="Ayus: Network of Buddhists Volunteers on International Cooperation"
              to="http://jneb.jp/english/japan/ayus"
              children={<Ayus />} />
          </Box> */}
        </Box>
      </Container>
    </Box>
  )
}

export default Partners