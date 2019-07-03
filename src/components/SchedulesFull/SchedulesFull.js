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

const Role = props => <Text component="h4" heading6 className={styles.role}>{props.label}</Text>
const Country = props => <Text component="h4" heading6 className={styles.country}>{props.label}</Text>

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
            <Text small>
              Jl. A. Yani No.40, Kerten, Laweyan, Kota Surakarta
              <br/>
              Jawa Tengah 57143, Indonesia
            </Text>
          </SubTalk>
        </ScheduleItem>
        <ScheduleItem hour="3:00pm" tag="">
          <SubTalk title="Art Exhibition Opening">
            <Talk title="Urban Landscape, Our Communities"></Talk>
          </SubTalk>
          <Role label="Navigators" />
          <TalkSpeaker
            name="Dr. Yeoh Seng Guan"
            job="Monash University, Malaysia" />
          <TalkSpeaker
            name="Dr. Dicky Sofjan"
            job="ICRS" />
          <ScheduleVenue>Sunan Hotel</ScheduleVenue>
        </ScheduleItem>
      </ScheduleSection>

        <ScheduleSection>
          <Day date="Day 1" day="Tuesday, August 20" theme="Thematic Field Visit"/>
          <ScheduleItem hour="8:00am - 3:00pm" tag="Field Experience">
            <Talk title="Thematic site visits">
              <SubTalk title="Sensing Sustainability in Solo Communities">
                <TalkSpeaker name="Facilitated by Kota Kita, Indonesia Consortium for Religious Studies (ICRS), and local communities."/>
                <Role label="Navigators"/>
                <TalkSpeaker name="Paulista Surjadi" job="Kota Kita" />
                <TalkSpeaker name="Dr.Kohei Watanabe" job="Teikyo University" />
                <TalkSpeaker name="Prof. Tomoko Okayama" job="Taisho University" />
              </SubTalk>
              <ScheduleVenue>Solo Vicinity</ScheduleVenue>
            </Talk>
          </ScheduleItem>
          <ScheduleItem hour="4:00pm - 6:00pm" tag="Executive Meeting">
            <Talk title="Meeting of Conveners">
              <Role label="Facilitators" />
              <TalkSpeaker
                name="Prof. Surichai Wun ‘Gaeo"
                job="Chulalongkorn University" />
              <TalkSpeaker
                name="Dr. Toshiyuki Doi"
                job="Mekong Watch" />
              <TalkSpeaker
                name="Mr. Ted Mayer"
                job="Institute of Transformative Learning, INEB" />
              <TalkSpeaker
                name="Dr. Dicky Sofjan"
                job="ICRS" />
              <TalkSpeaker
                name="Ms. Michiko Yoshida"
                job="Chulalongkorn University" />
              <ScheduleVenue>Sunan Hotel</ScheduleVenue>
            </Talk>
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
              <ScheduleVenue>Loji Gandrung</ScheduleVenue>
            </Talk>
          </ScheduleItem>
        </ScheduleSection>

        <ScheduleSection>
          <Day date="Day 2" day="Wednesday, August 21" theme="Public Forum"/>
          <ScheduleItem hour="8:30am" tag="Plenary Session">
            <Text component="h3" heading5Alt style={{marginBottom: '4px', textTransform: 'capitalize', }}>Opening</Text>
            <Talk title="Civic Engagement 4.0: Creating an Innovative Platform">
              <Role label="MC: Michiko Yoshida, Chulalongkorn University" />
              <SubTalk title="Welcome Address">
                <TalkSpeaker
                  name="Representative from School of Social and Political Science"
                  job="Sebelas Maret University*" />
                <TalkSpeaker
                  name="Dr. Nualnoi Treerat"
                  job="Director, Institute of Asian Studies, Chulalongkorn University" />
              </SubTalk>
              <SubTalk title="Keynote Speech: Youth Leadership toward People-Centered Society">
                <TalkSpeaker
                  name="Najwa Shihab"
                  job="Founder of Narasi, Indonesia’s Literacy Ambassador" />
              </SubTalk>
            </Talk>
          </ScheduleItem>
          <ScheduleItem hour="9:30am" tag="Plenary Session" venue="Sebelas Maret University, Solo">
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
          <ScheduleItem hour="10:00am">
            <Text component="h3" heading4 style={{marginBottom: '0px'}}>Group Photo and Coffee Break</Text>
          </ScheduleItem>
          <ScheduleItem hour="10:30am" tag="Parallel Session I">

            <Talk title="Memory as Resilience: Inter- spatial and generational Transmission of Disaster Experience to Build a Sustainable Society">
              <Role label="Convener"/>
              <TalkSpeaker
                name="Dr. Toshiyuki Doi"
                job="Mekong Watch" />
              <TalkSpeaker
                name="Ms. Hiroko Aihara"
                job="Japan Perspective News Inc." />
              <TalkSpeaker
                name="Ms. Mariko Komatsu"
                job="Hiroshima University" />
              <Role label="Presenter" />
              <TalkSpeaker
                name="Ms. Keiko Takahashi"
                job="Hutaba Info., Fukushima, Japan"/>
              <TalkSpeaker
                name="Ms. Mayu Seto"
                job="Former Youth Communicator, “World without Nuclear Weapons”"/>
              <ScheduleVenue><strong>TBC</strong>, University Sebelas Maret</ScheduleVenue>
            </Talk>

            <Talk title="Showcasing Innovative Products for Urban Living">
            <Role label="Convener"/>
              <TalkSpeaker
                name="Dr.Leonard Chrysostomos"
                job="ICRS" />
              <TalkSpeaker
                name="Awardees of “Sustainable,Just, Smart Urban Living Innovation Award”"/>
              <Role label="Presenter: TBC" />
              <ScheduleVenue><strong>TBC</strong>, University Sebelas Maret</ScheduleVenue>
            </Talk>

            <Talk title="Education 4.0: Knowledge, Innovation and Civic Engagement toward Global Leadership">
              <Role label="Convener" />
              <TalkSpeaker
                name="Dr. Sachi Ando"
                job="Office of Global Education, Graduate School of Education, Kyoto University" />
              <Role label="Presenter" />
              <TalkSpeaker
                name="Dr. Chatchawan Chaisuekul"
                job="Dept. of Biology, Chulalongkorn University"/>
              <TalkSpeaker
                name="Mr. Khampoui Saythalat"
                job="Executive Director, Participatory Development Training Centre, Lao PDR"/>
              <ScheduleVenue><strong>TBC</strong>, University Sebelas Maret</ScheduleVenue>
            </Talk>

            <Talk workshop title="Urban Farming: Steps toward Food Safety, Security and Sovereignty">
              <Role label="Convener" />
              <TalkSpeaker
                name="Ms. Supa Yaimuang"
                job="Sustainable Agriculture Foundation, Thailand" />
              <Role label="Presenter" />
              <TalkSpeaker
                name="Mr. Bjorn Low"
                job="Director, Citizen Farm, Singapore" />
              <TalkSpeaker
                name="Rep. from Kebun Kumara"
                job="TBC" />
              {/* <TalkSpeaker
                name="Dr. Alvin Mannisi"
                job="RMIT Urban Design School" /> */}
              <ScheduleVenue><strong>TBC</strong>, University Sebelas Maret</ScheduleVenue>
            </Talk>

            <Talk workshop title="Listening Partnerships Living Fully and Leading with Integrity in a Time of Crisis">
              <Role label="Facilitators" />
              <TalkSpeaker
                name="Mr. Ted Mayer"
                job="Institute of Transformative Learning (INEB)" />
              <Role label="Assistant Facilitators" />
              <TalkSpeaker
                name="Ms. Khudoh"
                job="Metta Development Foundation, Myanmar" />
              <TalkSpeaker
                name="Ms. Dewi Martina"
                job="Muhammadiyah University in Riau" />
              <ScheduleVenue><strong>TBC</strong>, University Sebelas Maret</ScheduleVenue>
            </Talk>

          </ScheduleItem>
          <ScheduleItem hour="00:30pm">
            <Text component="h3" heading4 style={{marginBottom: '0px'}}>Lunch Break</Text>
          </ScheduleItem>
          <ScheduleItem hour="2:00pm" tag="Parallel Session II">

            <Talk title="Mobility in Changing Landscape of Southeast Asia">
              <Role label="Convener" />
              <TalkSpeaker
                name="Dr. Rachada Jayagupta"
                job="Asian Research Center for Migration, Inst. of Asian Studies, Chulalongkorn University"
                />
              <ScheduleVenue><strong>TBC</strong>, University Sebelas Maret</ScheduleVenue>
            </Talk>

            <Talk workshop title="Civic Engagement, a Strategic Lens">
              <Role label="Convener" />
              {/* <TalkSpeaker
                name="Ms. Shauna Sylvester"
                job="Executive Director of Simon Fraser University, Canada" /> */}
              <TalkSpeaker
                name="Ms. Elodie Jacquet"
                job="Manager of Knowledge and Practice, Dialogue and Civic Engagement Program, Simon Fraser University, Canada" />
              <ScheduleVenue><strong>TBC</strong>, University Sebelas Maret</ScheduleVenue>
            </Talk>

            <Talk title="Pushing the Boundaries: Asian Youth in Trans-Culture 4.0">
              <Role label="Co-Convener" />
              <TalkSpeaker
                name="Dr. Wasana Wongsutarat"
                job="Chulalongkorn University" />
              <TalkSpeaker
                name="Dr. Chhaeng Vannarith"
                job="President, Asian Vision Institute, Cambodia" />
              <ScheduleVenue><strong>TBC</strong>, University Sebelas Maret</ScheduleVenue>
            </Talk>

            <Talk title="Beyond Waste Management">
              <Role label="Convener" />
              <TalkSpeaker
                name="Dr. Kohei Watanabe"
                job="Teikyo University, Japan" />
              <Role label="Presenter" />
              <TalkSpeaker
                name="Bank Sampah (Waste Bank Women’s Group)" />
              <TalkSpeaker
                name="Prof. Tomoko Okayama"
                job="Taisho University (TBC)" />
              <TalkSpeaker
                name="Mr. Supardi Asmorobangun"
                job="Rumah Kompos, Bali" />
              <TalkSpeaker
                name="Ms. Penchom Saetang"
                job="Director, Ecological Alert and Recovery, Thailand" />
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
              {/* <TalkSpeaker
                  name="INDONESIA" /> */}
              <Country label="Indonesia" />
              <TalkSpeaker
                name="Ahyar Abduh*"
                job="Mayor of Mataram (Nusa Tenggara Barat)" />
              <TalkSpeaker
                name="Badingah*"
                job="Regent of Gunung Kidul (Yogyakarta)" />
              <TalkSpeaker
                name="Eko Purnomo*"
                job="Regent of Wonosobo (Central Java)" />
              <TalkSpeaker
                name="F.X. Hadi Rudyatmo"
                job="Mayor of Surakarta (Central Java) " />
              <TalkSpeaker
                name="Ibnu Sina*"
                job="Mayor of Banjarmasin (South Kalimantan)" style={{marginBottom: '24px'}}/>
              <TalkSpeaker
                name="Tri Rismaharini*"
                job="Mayor of Surabaya (East Java)" />

              <Country label="Philippines" />
              <TalkSpeaker
                name="James Pooten, Jr.*"
                job="Mayor of Municipality of Sagada" style={{marginBottom: '24px'}}/>

              <Country label="South Korea" />

              <Country label="Thailand" />
              <TalkSpeaker
                name="Mr. Pongsak Yingchoncharoen"
                job="Mayor of Yala City Municipality" style={{marginBottom: '24px'}}/>

              <Role label="Facilitators" />
              <TalkSpeaker
                name="Dr. Dicky Sofjan"
                job="ICRS" />
              <TalkSpeaker
                name="Mr. Ahmad Rifai"
                job="Kota Kita Foundation" />

              <ScheduleVenue><strong>TBC</strong>, The Sunan Hotel</ScheduleVenue>
            </Talk>
          </ScheduleItem>
          <ScheduleItem hour="10:15am">
            <Text component="h3" heading4 style={{marginBottom: '0px'}}>Coffe Break - Press Conference with City Mayors</Text>
          </ScheduleItem>
          <ScheduleItem hour="10:45am">
            <Talk title="Mayors’ Interface with Civil Society (Part I)">
              <SubTalk title="Inclusive and Sustainable City">
                <Role label="Speakers"/>
                <TalkSpeaker
                  name="Ms. Endah Setyowati"
                  job="Executive Director, Ohana Indonesia*" />
                <TalkSpeaker
                  name="Dr. Bernadia Irawati Tjandradewi"
                  job="Secretary General, United Cities and Local Governance Asia Pacific*" />
                <TalkSpeaker
                  name="Dr. Sukanda Luangon Lewis"
                  job="Project Director, Development of Creative Tourism, Chulalongkorn University" />
              </SubTalk>
              <SubTalk title="Responses from mayors">
                <Role label="Moderator" />
                <TalkSpeaker
                  name="Dr. Hezri Adnan*"
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
              <SubTalk title="Faith and Human Dignity in the City">
                <Role label="Speakers"/>
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
              <SubTalk title="Responses from mayors">
                <Role label="Moderator"/>
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
          <Day date="Day 4" day="Friday, August 23" theme="Closed Event"/>
          <ScheduleItem hour="" tag="Closed Event">
            <Talk title="Eco Cycling Tour: For Sustainable Memories of Solo"></Talk>
            <Talk title="Adjourn and departure of participants"></Talk>
          </ScheduleItem>
        </ScheduleSection>
      </Container>
    </Box>
  )
}

export default SchedulesFull