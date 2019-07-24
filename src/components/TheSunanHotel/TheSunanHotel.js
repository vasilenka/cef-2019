import styles from './TheSunanHotel.module.scss';
import React from 'react';
import cx from 'classnames';

import Text from './../../primitives/Text/Text'

import Cover from './../Cover/Cover'
import Container from '../../layouts/Container/Container';

import CallIcon from './../icons/call.inline.svg';
import PlaceIcon from './../icons/place.inline.svg';
import StationIcon from './../icons/station.inline.svg';
import AirportIcon from './../icons/airport.inline.svg';
import { SunanHotel } from './../images/photos/sunan'

const TheSunanHotel = ({
  className,
  ...restProps
  }) => {
  return (
    <section className={cx(styles.root)} id="about-the-sunan-hotel" {...restProps}>
      <Cover
        title={<Text heading1 component="h2" style={{marginBottom: '12px'}}>About The Sunan Hotel</Text>}
      />
      <Container narrow>
        <SunanHotel />
      </Container>
      <Container narrow className={styles.about}>
        <header className={styles.header}>
          <div className={styles.headerItem}>
            <PlaceIcon className={styles.icon}/>
            <a href="https://www.google.com/maps/place/The+Sunan+Hotel/@-7.5577948,110.7941942,15.9z/data=!4m12!1m6!3m5!1s0x2e7a16912e502e11:0xf9e5a89a42aab736!2sThe+Sunan+Hotel!8m2!3d-7.5573252!4d110.794305!3m4!1s0x2e7a16912e502e11:0xf9e5a89a42aab736!8m2!3d-7.5573252!4d110.794305" target="_blank" rel="noopener noreferrer">
              <Text heading5 component="p" className={styles.itemText}>
                Jalan Ahmad Yani No.40, Kerten, Kec. Laweyan, Kota Surakarta, Jawa Tengah 57143, Indonesia
              </Text>
            </a>
          </div>
          <div className={styles.headerItem}>
            <CallIcon className={styles.icon}/>
              <a href="tel:+62271731312">
                <Text heading5 component="p" className={styles.itemText}>
                  (+62-271) 731312
                </Text>
              </a>
          </div>
        </header>
        <main className={styles.main}>
          <Text medium component="p" style={{marginBottom: '24px'}}>
            Located at the west gate of Solo, The Sunan Hotel is very strategic and close to Solo’s city center and public facilities. The hotel is located 4 km from Mangkunegaran Palace, 5 km from Kasunanan Palace, and 5 km from Government Center. It’s only 15 minutes from Adi Soemarmo Airport and 6 minutes from Solo Balapan Railway Station.
          </Text>
          <Text medium component="p">
            From the airport, take the official airport taxi (at the taxi counter) and go to the city center heading straight on to Jalan Ahmad Yani. The Sunan Hotel is across Lokananta Records.
          </Text>
          <footer className={styles.footer}>
            <Text heading3 component="p" style={{marginBottom: '24px'}}>
              Accessible by public transport
            </Text>
            <div className={styles.access}>
              <StationIcon className={styles.accessIcon}/>
              <div className={styles.accessText}>
                <Text small className={styles.accessTitle}>Train Station</Text>
                <Text heading5 component="h4" className={styles.accessName}>Solo Balapan Station (4.00 Km)‎</Text>
              </div>
            </div>
            <div className={styles.access}>
              <AirportIcon className={styles.accessIcon}/>
              <div className={styles.accessText}>
                <Text small className={styles.accessTitle}>Airport</Text>
                <Text heading5 component="h4" className={styles.accessName}>Adi Soemarmo International Airport (11.00 Km)‎</Text>
              </div>
            </div>
          </footer>
        </main>
      </Container>
    </section>
  )
}

export default TheSunanHotel