import styles from './PracticalGuide.module.scss';
import React from 'react';
import cx from 'classnames';

import Container from '../../layouts/Container/Container';
import Cover from '../Cover/Cover';
import Text from '../../primitives/Text/Text';

import CallIcon from './../icons/call.inline.svg';

import { PlaceDetails, EatPlace } from './../SoloGlance/SoloGlance'
import Hack from '../Hack/Hack';

const ContactNumber = props => {
  return (
    <div className={styles.contact}>
      <div className={styles.contactIcon}>
        <CallIcon/>
      </div>
      <a href={`tel:${props.contact.trim().replace('-', '')}`} >
      <Text heading5 component="p" className={styles.contactNumber}>{props.contact}</Text>
      </a>
      {
        props.additionalContact &&
        <a href={`tel:${props.contact.trim().replace('-', '')}`} style={{marginLeft: '12px'}}>
          <Text heading5 component="p" className={styles.contactNumber}>{props.additionalContact}</Text>
        </a>
      }
    </div>
  )
}

const EmergencyRoom = props => {
  return (
    <li className={styles.erContainer}>
      <div className={styles.emergencyRoom}>
        <header className={styles.emergencyHeader}>
          <Text heading3 component="h4" style={{marginBottom: '8px'}}>{props.name}</Text>
          {props.contact &&
            <ContactNumber contact={props.contact} additionalContact={props.additionalContact}/>
          }
        </header>
        {props.address &&
          <Text medium component="p" className={styles.contactAddress}>{props.address}</Text>
        }
      </div>
    </li>
  )
}

const EmergencyContact = props => {
  return (
    <li className={styles.emergencyContact}>
      <header className={styles.emergencyHeader}>
        <Text heading3 component="h4" style={{marginBottom: '8px'}}>{props.name}</Text>
        {props.contact &&
          <ContactNumber contact={props.contact} additionalContact={props.additionalContact}/>
        }
      </header>
      {props.address &&
        <Text medium component="p" className={styles.contactAddress}>{props.address}</Text>
      }
    </li>
  )
}

const PracticalGuide = ({
  className,
  ...restProps
  }) => {
  return (
    <section className={cx(styles.root)} {...restProps}>
      <Hack id="pratical-information" />
      <Cover containerStyle={{ backgroundColor: '#fff2c6', paddingTop: '64px', paddingBottom: '64px' }} title={<Text heading1 component="h2">Practical Information</Text>} />
      <Container narrow>
        <div className={styles.row}>
          <Text heading2 component="h3" className={styles.subheading}>Places of Worship</Text>
          <article className={styles.article}>
            <PlaceDetails
              name="Mosque"
              details="The Sunan Hotel provides small mosque (Mushala) in their basement. The Mushala is accessible for everyone, both guests and visitors."/>
            <PlaceDetails
              name="Catholic Church"
              details="The Sunan Hotel is only 8 minutes walking (600 meters) to Gereja Katolik Santo Paulus Kleca."/>
            <PlaceDetails
              name="Protestant Church"
              details="The Sunan Hotel is only 4 minutes walking (350 meters) to Gereja Bethel Indonesia at Jalan Ahmad Yani."/>
            <PlaceDetails
              name="Buddhist Temple"
              details="The closest Buddhist temple from The Sunan Hotel is Vihara Maitri Dharma. It can be reached by conventional taxi or online taxi (Go-jek/Grab). It is located in Banyuanyar area and 3.1 km from the hotel."/>
            <PlaceDetails
              name="Hindu Temple"
              details="The closest Hindu temple from The Sunan Hotel is Pura Indra Prasta. It can be reached by conventional taxi or online taxi (Go-jek/Grab). It is located in Sondakan area and 3.7 km from the hotel."/>
          </article>
        </div>
        <div className={styles.row}>
          <Text heading2 component="h3" className={styles.subheading}>Emergency Contact</Text>
          <ul className={styles.article}>
            <EmergencyContact name="Ambulance" contact="118" />
            <EmergencyContact name="Police" contact="110" />
            <EmergencyContact name="Solo Police HQ" contact="+62-271-712600" address="Jl. Adisucipto 2, Manahan (1.20 km from The Sunan Hotel)" />
            <EmergencyContact name="Surakarta Police Station (SATLANTAS)" contact="+62-271-740683" additionalContact="+62-271-713003" address="Jalan Slamet Riyadi 376 (2.70 km from The Sunan Hotel)"/>
          </ul>
        </div>
        <div className={styles.row}>
          <Text heading2 component="h3" className={styles.subheadingAlt}>Hospitals with 24-hours emergency room (Ruang Darurat)</Text>
          <EmergencyRoom name="RS Panti Waluyo" contact="+62-271-712077" address="Jl A. Yani No. 1 (Distance from The Sunan Hotel: 1.5km by car; 450 meters walking)" />
          <EmergencyRoom name="RS Kasih Ibu" contact="+62-271-714422" address="Jl. Slamet Riyadi No. 354 (2.4km from The Sunan Hotel)"/>
          <EmergencyRoom name="RS Dr. Oen I" contact="+62-271-643139" address="Jl. Brig Katamso No 55 (5.5km from The Sunan Hotel)"/>
          <EmergencyRoom name="RSUD Moewardi" contact="+62-271-634634" address="Jl. Kol. Sutarto 132. Jebres (5.9km from The Sunan Hotel)"/>
          <EmergencyRoom name="RS Dr. Oen II" contact="+62-271-620220" address="Komplek Perum Solo Baru (9.2km from The Sunan Hotel)"/>
        </div>
        <div className={styles.row}>
          <Text heading2 component="h3" className={styles.subheading}>Get There</Text>
          <article className={styles.article}>
            <PlaceDetails
              name="By Plane"
              rawDetails={
                <>
                  <header className={styles.emergencyContact} style={{paddingTop: '24px'}}>
                    <div className={styles.emergencyHeader}>
                      <Text heading5Alt component="h4" style={{marginBottom: '8px'}}>Bandar Udara Internasional Adi Soemarmo (Adi Soemarmo International Airport)</Text>
                      <ContactNumber contact="+62 271 - 780400" />
                    </div>
                    <Text medium component="p" className={styles.contactAddress}>Jl. Cendrawasih, Ngemplak, Boyolali 57375</Text>
                  </header>
                  <Text medium component="p">
                    Solo's Adisumarmo International Airport (IATA Code: SOC), 10 km north of town, is a small airport. There are 8 flights a day to Jakarta provided by Garuda Indonesia, Sriwijaya Air, Lion Air and Citilink. Silk Air provides a direct service to Singapore. Malaysia's low-cost airline, AirAsia flies daily to Kuala Lumpur. There is a tourist information desk, ATM and taxi stand in the arrival hall. Official airport taxis are available for around IDR 90,000-200,000 depending on your destination, pay at the taxi desk in arrival terminal and then head for the official taxi rank.
                  </Text>
                  <Text medium component="p">
                    The distance between Yogyakarta and Solo is only 60 km, and it is possible to fly to/from Yogyakarta’s Adisucipto International Airport. Yogyakarta airport is one of the two rail-connected airports in Indonesia, besides Kuala Namu in Medan, North Sumatra. Those arriving from (and departing into) the airport can take the commuter train service between Yogyakarta and Solo. The commuter train ticket is ranged from IDR 8,000 to 30,000.
                  </Text>
                </>
              }/>
            <PlaceDetails
              name="By Train"
              details="Solo Balapan Railway Station is a major train station in Solo. It provides express trains to/from several cities in Java. Argo Lawu, Argo Dwipangga, Bima and Gajayana provide express trains to/from Jakarta, all AC; Argo Wilis and Lodaya provide express trains to/from Bandung, all AC; and Argo Wilis and Sancaka provide express trains to/from Surabaya."/>
          </article>
        </div>
        <div className={styles.row}>
          <Text heading2 component="h3" className={styles.subheading}>Get Around</Text>
          <article className={styles.article}>
            <PlaceDetails
              rawDetails={
                <>
                  <Text medium component="p">
                    The city has the longest slow lanes (a special lane dedicated for pedestrian and non-motorized transportation) in Indonesia, covering 28 kilometres across the city . The city's main avenue, Jalan Slamet Riyadi is also equipped with slow lane. On Sundays, it is closed to traffic between 06:00 and 09:00 (Car Free Day) for various leisure activities for the town's citizens. Many hotels, restaurants, shopping malls and tourist attractions are on this street. At the end of the street is the entrance to the alun-alun (palace square) and the royal palace complex.
                  </Text>
                  <Text medium component="p">
                    Because it is still quite small, travelling within Solo is relatively easy.
                  </Text>
                </>
              }/>
            <PlaceDetails
              name="By ride-hailing app"
              details="Go-jek and Grab are all active in Solo. It is worth getting an Indonesian SIM card with data, to allow you to use the apps. It is also good to have a little Indonesian or Javanese, as the driver will normally call you after taking the job, to confirm your location."/>
            <PlaceDetails
              name="By Taxi"
              details="Taxis are cheap, and you can book for the whole trip. You can negotiate for the price. Ask at your hotel reception if they can arrange one for you. Taxis are available on the airport and train stations. Flagfall for the first kilometre is Rp 5,500 and Rp 3,750/kilometre. Minimum payment Rp 25,000 for order by phone."
              additional={
                <>
                  <Text component="p" medium style={{marginBottom: '24px'}}>Their phone numbers are:</Text>
                  <ul>
                    <EatPlace name="Kosti Solo" phone="+62-271-856300"/>
                    <EatPlace name="Bengawan" phone="+62-271-734666"/>
                    <EatPlace name="Sakura" phone="+62-271-644194"/>
                    <EatPlace name="Angkasa" phone="+62-271-781315"/>
                    <EatPlace name="Mahkota Ratu" phone="+62-271-655666"/>
                  </ul>
                </>
              }
              />
            <PlaceDetails
              name="By bus"
              details="Batik Solo Trans, the only scheduled bus that serves the inner city. It goes to and from the airport and along Jl Slamet Riyadi. The Batik Solo Trans (BST) bus network is subsidized by the local government, and is the cheapest transport in town, Rp4,500. There are eight corridors."
              />
            <PlaceDetails
              name="By Car"
              details=""
              rawDetails={
                <>
                  <Text component="p" medium>
                    The organizers suggest to opt with a taxi or rent a driver to easily navigate within the city.
                  </Text>
                </>
              }
              additional={
                <>
                  <Text component="p" heading5 style={{marginBottom: '12px'}}>Charter with driver</Text>
                  <ul>
                    <EatPlace name="Happy Tour and Travel" phone="+6282136699255"/>
                  </ul>
                </>
              }
            />
          </article>
        </div>
      </Container>
    </section>
  )
}

export default PracticalGuide