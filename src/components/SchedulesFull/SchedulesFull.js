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
import ScheduleVenue from '../ScheduleVenue/ScheduleVenue';
import TalkSpeaker from '../TalkSpeaker/TalkSpeaker';
import SubTalk from '../SubTalk/SubTalk';

const SchedulesFull = ({
  className,
  ...restProps
  }) => {
  return (
    <Box className={cx(styles.root)} {...restProps}>
      <Container narrow className={cx(styles.container)}>

      <ScheduleSection>
        <Day date="Day 0" day="Monday, August 19"/>
        <ScheduleItem hour="All day" tag="">
          <SubTalk title="Arrival of Participants">
            <Text component="p" medium>Accomodation at <a href="https://thesunanhotelsolo.com/" target="_blank" rel="noopener noreferrer">The Sunan Hotel</a></Text>
          </SubTalk>
        </ScheduleItem>
        <ScheduleItem hour="3:00pm" tag="">
          <SubTalk title="Art Exhibition Opening">
            <Talk title="Urban Landscape, Our Communities"></Talk>
          </SubTalk>
          <ScheduleVenue>Sunan Hotel</ScheduleVenue>
        </ScheduleItem>
      </ScheduleSection>

        <ScheduleSection>
          <Day date="Day 1" day="Tuesday, August 20" theme="Thematic Field Visit"/>
          <ScheduleItem hour="8:00am - 3:00pm" tag="Field Experience">
            <Talk title="Thematic site visits">
              <SubTalk title="Sensing Sustainability in Solo Communities" />
            </Talk>
            <ScheduleVenue>Solo Vicinity</ScheduleVenue>
          </ScheduleItem>
          <ScheduleItem hour="7:00pm - 8:30pm">
            <Talk title="Opening Ceremony">
              <SubTalk title="Welcome Address">
                <TalkSpeaker
                  name="Mr. F.X. Hadi Rudyatmo"
                  job="Mayor of Surakarta (Solo)" />
                <TalkSpeaker
                  name="Mr. Ahmad Rifai"
                  job="Executive Director, Kota Kita Foundation" />
                <TalkSpeaker
                  name="Prof. Dr. Pirongrong Ramasoota"
                  job="Vice President for Social Outreach and Global Engagement, Chulalongkorn University" />
              </SubTalk>
              <SubTalk title="Reception and Cultural Performance">
                <Text medium component="li" style={{paddingLeft: 0, listStyle: 'none'}}>
                  Hosted by City of Surakarta
                </Text>
              </SubTalk>
            </Talk>
          </ScheduleItem>
        </ScheduleSection>

        <ScheduleSection>
          <Day date="Day 2" day="Wednesday, August 21" theme="Public Forum"/>
          <ScheduleItem hour="8:30am" tag="Plenary Session">
            <Text component="h3" heading5Alt style={{marginBottom: '4px', textTransform: 'capitalize', }}>Opening</Text>
            <Talk title="Civic Engagement 4.0: Creating an Innovative Platform">
              <SubTalk title="Welcome Address">
                <TalkSpeaker
                  name="President"
                  job="Sebelas Maret University" />
                <TalkSpeaker
                  name="Dr. Nualnoi Treerat"
                  job="Director, Institute of Asian Studies, Chulalongkorn University" />
              </SubTalk>
              <SubTalk title="Keynote Speech: Youth Leadership toward People-Centered Society">
                <TalkSpeaker
                  name="H.E. Mr. Gita Wirjawan"
                  job="Founder, Ancora Foundation; Former Minister of Trade, Indonesia" />
              </SubTalk>
            </Talk>
          </ScheduleItem>
          <ScheduleItem hour="9:30am">
            <Text component="h3" heading4 style={{marginBottom: '0px'}}>Group Photo and Coffee Break</Text>
          </ScheduleItem>
          <ScheduleItem hour="8:30am" tag="Plenary Session" venue="Sebelas Maret University, Solo">
            <Text component="h3" heading5Alt style={{ marginBottom: '4px', textTransform: 'capitalize' }}>Civic Engagement 4.0: Overview</Text>
            <Talk title="Building on: From Yogya and Bangkok to Solo" facilitators>
              <TalkSpeaker
                name="Dr. Toshiyuki Doi"
                job="Senior Advisor, Mekong Watch, Japan; Academic Advisor, Institute of Asian Studies, Chulalongkorn University" />
              <TalkSpeaker
                name="Mr. Ted Mayer"
                job="Academic Director, Institute of Transformative Learning, International Network for Engaged Buddhists (INEB), Thailand" />
              <TalkSpeaker
                name="Dr. Yeoh Seng Guan"
                job="Associate Professor, Monash University, Malaysia" />
            </Talk>
          </ScheduleItem>
          <ScheduleItem hour="10:10am" tag="Parallel Session I">
            <Talk title="Memory as Resilience: Inter- spatial and generational Transmission of Disaster Experience to Build a Sustainable Society">
              <ScheduleVenue><strong>TBC</strong>, University Sebelas Maret</ScheduleVenue>
            </Talk>
            <Talk title="Showcasing Innovative Products for Urban Living">
              <ScheduleVenue><strong>TBC</strong>, University Sebelas Maret</ScheduleVenue>
            </Talk>
            <Talk title="Education 4.0: Knowledge, Innovation and Civic Engagement toward Global Leadership">
              <ScheduleVenue><strong>TBC</strong>, University Sebelas Maret</ScheduleVenue>
            </Talk>
            <Talk workshop title="Urban Farming: Steps toward Food Safety, Security and Sovereignty">
              <ScheduleVenue><strong>TBC</strong>, University Sebelas Maret</ScheduleVenue>
            </Talk>
            <Talk workshop title="Listening Partnerships Living Fully and Leading with Integrity in a Time of Crisis">
              <ScheduleVenue><strong>TBC</strong>, University Sebelas Maret</ScheduleVenue>
            </Talk>
          </ScheduleItem>
          <ScheduleItem hour="11:00am">
            <Text component="h3" heading4 style={{marginBottom: '0px'}}>Lunch Break</Text>
          </ScheduleItem>
          <ScheduleItem hour="14:00pm" tag="Parallel Session II">
            <Talk title="Mobility in Changing Landscape of Southeast Asia">
              <ScheduleVenue><strong>TBC</strong>, University Sebelas Maret</ScheduleVenue>
            </Talk>
            <Talk title="Climate Change Adaptation, Disaster Mitigation">
              <ScheduleVenue><strong>TBC</strong>, University Sebelas Maret</ScheduleVenue>
            </Talk>
            <Talk workshop title="Civic Engagement, a Strategic Lens">
              <ScheduleVenue><strong>TBC</strong>, University Sebelas Maret</ScheduleVenue>
            </Talk>
            <Talk title="Pushing the Boundaries: Asian Youth in Trans-Culture 4.0">
              <ScheduleVenue><strong>TBC</strong>, University Sebelas Maret</ScheduleVenue>
            </Talk>
            <Talk title="Beyond Waste Management">
              <ScheduleVenue><strong>TBC</strong>, University Sebelas Maret</ScheduleVenue>
            </Talk>
          </ScheduleItem>
          <ScheduleItem hour="4:00pm">
            <Text component="h3" heading4 style={{marginBottom: '0px'}}>Coffee Break</Text>
          </ScheduleItem>
          <ScheduleItem hour="4:15pm - 5.15pm" tag="Plenary Session">
            <Talk title="Synthesis Building Linkages with Strategic Partners">
              <ScheduleVenue><strong>TBC</strong>, University Sebelas Maret</ScheduleVenue>
            </Talk>
          </ScheduleItem>
        </ScheduleSection>

        <ScheduleSection>
          <Day date="Day 3" day="Thursday, August 22" theme="Mayors' Symposium"/>
          <ScheduleItem hour="8:30am" tag="Plenary Session">
            <Talk title="Opening: Co-Designing Sustainable, Just and Smart Urban Living”">
              <SubTalk title="Welcome Address">
                <TalkSpeaker
                  name="Dr. Siti Syamsiyatun"
                  job="Director, ICRS" />
              </SubTalk>
              <SubTalk title="Award giving ceremony “Sustainable, Just and Smart Urban Living Innovation Award"></SubTalk>
              <ScheduleVenue><strong>TBC</strong>, The Sunan Hotel</ScheduleVenue>
            </Talk>
            <Talk title="Roundtable: Mayors’ Innovation Pitch">
              <TalkSpeaker
                  name="6 Mayors from Indonesia" />
              <TalkSpeaker
                name="Mr. Pongsak Yingchoncharoen"
                job="Mayor of Yala City Municipality, Thailand" />
              <TalkSpeaker
                name="(TBC) Dr. Tatsuo Igarashi"
                job="Mayor of Tsukuba City, Japan" />
              <TalkSpeaker
                name="(TBC)"
                job="Mayor of Ipoh City Council, Malaysia" />
              <TalkSpeaker
                name="(TBC) Mr. James Pooten, Jr."
                job="Mayor of Municipality of Sagada, Philippines (TBC)" style={{marginBottom: '12px'}}/>
              <Text className={styles.subheader} medium>
                Facilitated by
              </Text>
              <TalkSpeaker
                name="Dr. Dicky Sofjan"
                job="ICRS" />
              <TalkSpeaker
                name="Mr. Ahmad Rifai"
                job="Kota Kita Foundation" />
              <TalkSpeaker
                name="Dr. Fatimah Hussein"
                job="Islamic University, Yogyakarta (TBC)" />
              <ScheduleVenue><strong>TBC</strong>, The Sunan Hotel</ScheduleVenue>
            </Talk>
          </ScheduleItem>
          <ScheduleItem hour="10:15am">
            <Text component="h3" heading4 style={{marginBottom: '0px'}}>Coffe Break - Press Conference with City Mayors</Text>
          </ScheduleItem>
          <ScheduleItem hour="10:45am">
            <Talk title="Mayors’ Interface with Civil Society (Part I)">
              <SubTalk title="Inclusive and Sustainable City" speaker>
                <TalkSpeaker
                  name="Ms. Endah Setyowati"
                  job="Executive Director, Ohana Indonesia TBC" />
                <TalkSpeaker
                  name="Dr. Bernadia Irawati Tjandradewi"
                  job="Secretary General, United Cities and Local Governance Asia Pacific" />
                <TalkSpeaker
                  name="Dr. Sukanda Luangon Lewis"
                  job="Project Director, Development of Creative Tourism, Chulalongkorn University" />
              </SubTalk>
              <SubTalk moderator title="Responses from mayors">
                <TalkSpeaker
                  name="(TBC) Dr. Hezri Adnan"
                  job="Chief Executive Officer, Langkawi Development Agency (LADA), Malaysia" />
              </SubTalk>
              <ScheduleVenue><strong>TBC</strong>, The Sunan Hotel</ScheduleVenue>
            </Talk>
          </ScheduleItem>
          <ScheduleItem hour="12:45pm">
            <Text component="h3" heading4 style={{marginBottom: '0px'}}>Lunch Break</Text>
          </ScheduleItem>
          <ScheduleItem hour="2:00pm">
            <Talk title="Mayors’ Interface with Civil Society (Part II)">
              <SubTalk title="Faith and Human Dignity in the City" speaker>
                <TalkSpeaker
                  name="Dr. Elise Edwards"
                  job="Baylor University, United States" />
                <TalkSpeaker
                  name="Dr. Brett Scharffs"
                  job="Brigham University, United States" />
                <TalkSpeaker
                  name="Dr. Jeanny Dewayani"
                  job="ICRS" />
              </SubTalk>
              <SubTalk moderator title="Responses from mayors">
                <TalkSpeaker
                  name="Dr. Yeoh Seng Guan"
                  job="Monash University, Malaysia" />
              </SubTalk>
              <ScheduleVenue><strong>TBC</strong>, The Sunan Hotel</ScheduleVenue>
            </Talk>
          </ScheduleItem>
          <ScheduleItem hour="4:00pm">
            <Text component="h3" heading4 style={{marginBottom: '0px'}}>Coffee Break</Text>
          </ScheduleItem>
          <ScheduleItem hour="4:15pm">
            <Talk title="Mayors’ Symposium Wrap Up"></Talk>
            <ScheduleVenue><strong>TBC</strong>, The Sunan Hotel</ScheduleVenue>
          </ScheduleItem>
          <ScheduleItem hour="4.45pm">
            <SubTalk title="Solo Forum Wrap Up">
              <Talk title="Civic Engagement 4.0: A Call for Action" style={{marginBottom: 0, paddingBottom: 0, paddingTop: 0,}}></Talk>
            </SubTalk>
            <SubTalk title="Closing Ceremony"></SubTalk>
            <ScheduleVenue><strong>TBC</strong>, The Sunan Hotel</ScheduleVenue>
          </ScheduleItem>
        </ScheduleSection>

        <ScheduleSection>
          <Day date="Day 4" day="Friday, August 23" theme="Public Event"/>
          <ScheduleItem hour="" tag="Free Public Event (with Prior Registration)">
            <Talk title="Eco Cycling Tour: For Sustainable Memories of Solo"></Talk>
            <Talk title="Adjourn and departure of participants"></Talk>
          </ScheduleItem>
        </ScheduleSection>
      </Container>
    </Box>
  )
}

export default SchedulesFull