import styles from './SchedulesFull.module.scss'
import React from 'react'
import cx from 'classnames'

import Box from '../Box/Box'
import Container from '../../layouts/Container/Container';
import Text from '../../primitives/Text/Text';
import ScheduleItem from '../ScheduleItem/ScheduleItem';
import Day from '../Day/Day';
import ScheduleSection from '../ScheduleSection/ScheduleSection';
import Talk from '../Talk/Talk';

const SchedulesFull = ({
  className,
  ...restProps
  }) => {
  return (
    <Box className={cx(styles.root)} {...restProps}>
      <Container narrow className={cx(styles.container)}>
        <ScheduleSection>
          <Day date="Day 1" day="Tuesday, August 20"/>
          <ScheduleItem hour="8:30am - 3:00pm" tag="Field Experience">
            <Text component="h3" heading5Alt style={{marginBottom: '4px', textTransform: 'capitalize', }}>Thematic site visits</Text>
            <Text component="h3" heading4 style={{marginBottom: '24px'}}>Sensing Sustainability in Solo Communities</Text>
            <Text component="p" medium>Facilitation by Kota Kita Foundation, Indonesia Consortium for Religious Studies (ICRS) and local communities (Details to be announced)</Text>
          </ScheduleItem>
          <ScheduleItem hour="6:30pm" tag="Opening Program">
            <Text component="h3" heading5Alt style={{marginBottom: '4px', textTransform: 'capitalize', }}>Opening plenary</Text>
            <Text component="h3" heading4 style={{marginBottom: '24px'}}>Civic Engagement 4.0: Creating an Innovative Platform</Text>
            {/* <Text component="p" medium>Facilitation by Kota Kita Foundation, Indonesia Consortium for Religious Studies (ICRS) and local communities (Details to be announced)</Text> */}
            <Talk title="WELCOME ADDRESS">
              <Text heading5 component="li" style={{paddingLeft: 0, listStyle: 'none'}}>Kota Kita Foundation</Text>
              <Text heading5 component="li" style={{paddingLeft: 0, listStyle: 'none'}}>Prof. Dr. Pirongrong Ramasoota, Vice President for Social Outreach and Global Engagement, Chulalongkorn University</Text>
            </Talk>
            <Talk title="KEYNOTE SPEECH">
              <Text heading5 component="li" style={{paddingLeft: 0, listStyle: 'none'}}>
                “Youth Leadership toward People-Centered Society”
                Speaker from Indonesia (TBC)
              </Text>
              <Text heading5 component="li" style={{paddingLeft: 0, listStyle: 'none'}}>
                “Cross-Border Challenges of Our Time: Making a Difference via Civic Engagement”
                Mdme Lahpai Seng Raw, Founder, Metta Foundation, Myanmar (TBC)
              </Text>
            </Talk>
            <Talk title="GROUP PHOTO">
            </Talk>
          </ScheduleItem>
          <ScheduleItem hour="7:30pm" tag="Welcome Reception">
            <Text component="h3" heading5Alt style={{marginBottom: '4px', textTransform: 'capitalize', }}>Dinner reception with cultural performance</Text>
            <Text component="h3" heading4>Toast by Mayor of Surakarta (Solo)</Text>
          </ScheduleItem>
        </ScheduleSection>

        <ScheduleSection>
          <Day date="Day 2" day="Wednesday, August 21"/>
          <ScheduleItem hour="8:30am" tag="Plenary Session">
            <Text component="h3" heading5Alt style={{marginBottom: '4px', textTransform: 'capitalize', }}>Welcome and Overview</Text>
            <Text component="h3" heading4 style={{marginBottom: '24px'}}>Building on: From Yogya and Bangkok to Solo</Text>
            <Text component="p" medium>Facilitation by Kota Kita Foundation, Indonesia Consortium for Religious Studies (ICRS) and local communities (Details to be announced)</Text>
          </ScheduleItem>
          <ScheduleItem hour="9:00am" tag="Parallel Session">
            <Talk title="Memory as Resilience: Inter- spatial and generational Transmission of Disaster Experience to Build a Sustainable Society">
              <Text heading5 component="li" style={{paddingLeft: 0, listStyle: 'none'}}>Dr.Toshiyuki Doi</Text>
            </Talk>
            <Talk title="Education 4.0: Knowledge, Innovation and Civic Engagement toward Global Leadership">
              <Text heading5 component="li" style={{paddingLeft: 0, listStyle: 'none'}}>Dr. Sachi Ando, Kyoto University</Text>
            </Talk>
            <Talk title="Mobility in Changing Landscapes of Southeast Asia">
              <Text heading5 component="li" style={{paddingLeft: 0, listStyle: 'none'}}>WIEGO</Text>
            </Talk>
          </ScheduleItem>
          <ScheduleItem hour="11:00am">
            <Text component="h3" heading5Alt style={{marginBottom: '4px', textTransform: 'capitalize', }}>Lunch Break</Text>
          </ScheduleItem>
          <ScheduleItem hour="12:30pm" tag="Parallel Session II (Workshops)">
            <Talk title="Listening Partnerships: Living Fully and Leading with Integrity in a Time of Crisis">
              <Text heading5 component="li" style={{paddingLeft: 0, listStyle: 'none'}}>Mr. Theodore Mayer, Institute of Transformative Learning, Int’l Network for Engaged Buddhists (INEB)</Text>
            </Talk>
            <Talk title="Urban Farming: Steps toward Food Safety, Security and Sovereignty">
              <Text heading5 component="li" style={{paddingLeft: 0, listStyle: 'none'}}>Sustainable Agriculture Foundation in collaboration with Pemerti Kali Code and Ashoka Fellow from Singapore</Text>
            </Talk>
            <Talk title="Workshop : Civic Engagement on Strategic Lens">
              <Text heading5 component="li" style={{paddingLeft: 0, listStyle: 'none'}}>Dialogue and Civic Engagement Program, Simon Fraser University (TBC)</Text>
            </Talk>
          </ScheduleItem>
          <ScheduleItem hour="2:30pm">
            <Text component="h3" heading5Alt style={{marginBottom: '4px', textTransform: 'capitalize', }}>Coffee Break</Text>
          </ScheduleItem>
          <ScheduleItem hour="2:45pm" tag="Parallel Session III">
            <Talk title="Showcasing Innovative Products for Urban Living (Presentations by Awardees)">
              <Text heading5 component="li" style={{paddingLeft: 0, listStyle: 'none'}}>Dr. Leonard Chrysostomos, ICRS</Text>
            </Talk>
            <Talk title="Youth Leadership in Digital Age">
              <Text heading5 component="li" style={{paddingLeft: 0, listStyle: 'none'}}>Kota Kita Foundation, Dr. Cheang Vannarith</Text>
            </Talk>
            <Talk title="Beyond Waste Management">
              <Text heading5 component="li" style={{paddingLeft: 0, listStyle: 'none'}}>Dr. Kohei Watanabe, Teikyo University</Text>
            </Talk>
          </ScheduleItem>
          <ScheduleItem hour="4:45pm" tag="Plenary Session">
            <Text component="h3" heading5Alt style={{marginBottom: '4px', textTransform: 'capitalize', }}>Synthesis (in poster style)</Text>
            <Text component="h3" heading4 style={{marginBottom: '24px'}}>For a Dialogue with the Mayors</Text>
            <Text heading5 component="li" style={{paddingLeft: 0, listStyle: 'none'}}>Dr. Toshiyuki Doi</Text>
            <Text heading5 component="li" style={{paddingLeft: 0, listStyle: 'none'}}>Mr. Theodore Mayer</Text>
          </ScheduleItem>
          <ScheduleItem hour="-" tag="Optional Event">
            <Text component="h3" heading4 style={{marginBottom: '24px'}}>Evening of Alternative Films and Talks</Text>
            <Text heading5 component="li" style={{paddingLeft: 0, listStyle: 'none'}}>Facilitation by Dr. Yeoh Seng Guan, Monash University Malaysia</Text>
          </ScheduleItem>
        </ScheduleSection>

        <ScheduleSection>
          <Day date="Day 3" day="Thursday, August 22"/>
          <ScheduleItem hour="8:30am" tag="Opening Session">
            <Talk title="Welcome Address">
              <Text heading5 component="li" style={{paddingLeft: 0, listStyle: 'none'}}>Dr. Siti Syamsiyatun, Director, ICRS</Text>
            </Talk>
            <Talk title="Award giving ceremony “Sustainable, Just and Smart Urban Living Innovation Award" />
            <Talk title="Talk by awardees from Lombok and Yogyakarta" />
            <Talk title="Mayors’ innovation pitch à la Davos Style conference" />
          </ScheduleItem>
          <ScheduleItem hour="10:15am">
            <Text component="h3" heading5Alt style={{marginBottom: '4px', textTransform: 'capitalize', }}>Coffee Break</Text>
          </ScheduleItem>
          <ScheduleItem hour="10:45am">
            <Talk title="Interface with the civil society (Part I)">
              <Text component="p" medium>Inviting civil societies and diffable leaders as panelists</Text>
              <Text heading5 component="li" style={{paddingLeft: 0, listStyle: 'none'}}>Facilitation by Dr. Hezri Adnan, Langkawi Development Agency (LADA) Malaysia</Text>
            </Talk>
          </ScheduleItem>
          <ScheduleItem hour="12:35pm">
            <Text component="h3" heading5Alt style={{marginBottom: '4px', textTransform: 'capitalize', }}>Lunch Break</Text>
          </ScheduleItem>
          <ScheduleItem hour="2:00pm">
            <Talk title="Interface with the civil society - Faith and Human Dignity in the city">
              <Text heading5 component="li" style={{paddingLeft: 0, marginBottom: '12px', listStyle: 'none'}}>Inviting Elise Edwards (Baylor University) and Brett Scharffs (Brigham Young University) USA. Yeoh Seng Guan (Monash University, Malaysia), Jeanny Dewayani (ICRS, Yogyakarta)</Text>
              <Text component="p" medium style={{marginBottom: 0}}>Moderator: Dicky Sofjan</Text>
            </Talk>
          </ScheduleItem>
          <ScheduleItem hour="4:00pm">
            <Text component="h3" heading5Alt style={{marginBottom: '4px', textTransform: 'capitalize', }}>Coffee Break</Text>
          </ScheduleItem>
          <ScheduleItem hour="4:15pm" tag="Plenary Session">
            <Text component="h3" heading5Alt style={{marginBottom: '4px', textTransform: 'capitalize', }}>Closing session</Text>
            <Text component="h3" heading4 style={{marginBottom: '24px'}}>Civic Engagement 4.0: A Sustainable Platform toward a Sustainable Society</Text>
            <Talk title="Concluding remarks (TBC)" />
            <Talk title="Meeting in 2020 (TBC)" />
            <Talk title="Closing address (TBC)" />
          </ScheduleItem>
          <ScheduleItem hour="5.00pm">
            <Text component="h3" heading5Alt style={{marginBottom: '4px', textTransform: 'capitalize', }}>Free Evening</Text>
          </ScheduleItem>
        </ScheduleSection>

        <ScheduleSection>
          <Day date="Day 4" day="Friday, August 23"/>
          <ScheduleItem hour="-">
            <Text component="h3" heading5Alt style={{marginBottom: '4px', textTransform: 'capitalize', }}>Free Public Event (with Prior Registration)</Text>
            <Text component="h3" heading4 style={{marginBottom: '24px'}}>Eco Cycling Tour: For Sustainable Memories of Solo</Text>
            <Text component="p" medium>Facilitation by Kota Kita Foundation (Details to be announced)</Text>
          </ScheduleItem>
        </ScheduleSection>
      </Container>
    </Box>
  )
}

export default SchedulesFull