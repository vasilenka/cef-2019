import styles from './SoloGlance.module.scss';
import React from 'react';
import cx from 'classnames';

import Container from '../../layouts/Container/Container';
import Cover from '../Cover/Cover';
import Text from '../../primitives/Text/Text';

import CallIcon from './../icons/call.inline.svg';

const PlaceDetails = props => {
  return (
    <article className={styles.details}>
      <Text heading3 component="h3" className={styles.placeName}>{props.name}</Text>
      <Text medium component="p">{props.details}</Text>
      {props.additional &&
        <ul className={styles.listContainer}>
          {props.additional}
        </ul>
      }
    </article>
  )
}

const EatPlace = props => {
  return (
    <li className={styles.eatPlace}>
      <header className={styles.eatHeader}>
        <Text heading4 className={styles.eatName} component="h4">{props.name}</Text>
        {props.phone &&
          <a href={`tel:${props.phone}`} className={styles.eatPhoneLink}>
            <div className={styles.eatIcon}>
              <CallIcon />
            </div>
            <Text heading6 className={styles.eatCall} component="p">{props.phone}</Text>
          </a>
        }
      </header>
      <Text medium className={styles.eatAddress} component="p">{props.address}</Text>
    </li>
  )
}

const SoloGlance = ({
  className,
  ...restProps
  }) => {
  return (
    <section id="solo-at-a-glance" className={cx(styles.root)}>
      <Cover title={<Text heading1 component="h2">Solo at A Glance</Text>} />
      <div className={styles.gridContainer}>
        <div className={cx(styles.photo, styles.photo1)} />
        <div className={cx(styles.photo, styles.photo2)} />
        <div className={cx(styles.photo, styles.photo3)} />
        <div className={cx(styles.photo, styles.photo4)} />
        <div className={cx(styles.photo, styles.photo5)} />
        <div className={cx(styles.photo, styles.photo6)} />
      </div>
      <Container narrow>
        <div className={styles.row}>
          <Text heading2 component="h3" className={styles.subheading}>About Surakarta</Text>
          <article className={styles.article}>
            <Text medium component="p">
              Solo is a medium-sized city located in the middle of the province of Central Java, it sits along the riverbanks of the Bengawan River. Solo, also known as Surakarta, has been settled for over five centuries and was previously the seat of the Mataram Kingdom. Since then it has been an important political and economic center for the region. Manufacturing and trade are the largest sectors of the local economy in Solo.
            </Text>
            <Text medium component="p">
              Solo’s population was 570.876 inhabitants in 2016 and its built-up (or Greater Solo) area made of Surakarta Municipality (acronymized as Subosukawonosraten) and 59 districts spread on 1 city and 6 regencies was home to 5,984,519  inhabitants as of 2010 census.
            </Text>
            <Text medium component="p">
              Solo, as the spirit of Java is a home to two royal enclaves; that of the Kasunanan Kingdom and the Mangkunegaran Principality. In Solo, cultural heritage is also a “living” part of community life and local economic activities.
            </Text>
            <Text medium component="p">
              Solo is renowned because of its preserved Javanese character, also classical Javanese fine art and culture such as batik, ballet, drama, music, poetry and puppet shows.
            </Text>
          </article>
        </div>
        <div className={styles.row}>
          <Text heading2 component="h3" className={styles.subheading}>Places of Interest</Text>
          <section className={styles.article}>
            <PlaceDetails
              name="Gede Market (Pasar Gede)"
              details="Pasar Gede is the biggest traditional market in Solo. This market is located across the City Government Office and near to Chinese residence named Balong. It was built during Dutch colonization by Dutch architect named Thomas Karsten. This market consists of two buildings that are separated by Sudirman street and was named Pasar Gede or “big market” because it has big and large roof." />
            <PlaceDetails
              name="Kasunanan Palace"
              details="Kasunanan Palace was built in 1745 by Pakubuwono II as he moved the capital from Kartasura to a village named Sala. It was constructed gradually and reach its peak during the reign of Pakubuwono X (1893-1939). Although it was built gradually, the basic layout is never changed. Although it had been rebuilt from generation to generation, some buildings are still original, such as North and South Squar, Sasana Sumewa, Sithinggil, Kamandungan, Sri Manganti and Kedhaton. The Museum in Kasunanan Palace has the high valued collections like golden chart, the relic of weaponry and some artefacts."
            />
            <PlaceDetails
              name="Klewer Market"
              details="Klewer Market is the largest textile market in Solo. The market which is located beside Kasunanan Palace is also a shopping center for batik traders from several cities in Java such as Semarang and Surabaya. Klewer Market is not only a center of economy, but also a tourist destination and a symbol of Solo City."
              />
            <PlaceDetails
              name="Laweyan Batik Village"
              details="Laweyan is a center for batik industry with valuable historical values. In Pajang Palace era, people in Laweyan already had a tradition to make and trade batik. In this kampong, Syarekat Dagang Islam has noted as the pioneer for local organization. Laweyan Batik Village also has unique spatial. The tight alley with high old buildings offers a very interesting journey. The batik’s master house has a mixed architecture of Javanese, European, Chinese and Islamic style and now become a gallery for batik exhibition."
              />
            <PlaceDetails
              name="Mangkunegaran Palace"
              details="Mangkunegaran is a palace for KGPAA Sri Mangkunegara. It was built in 1757 after the Treaty of Salatiga that divided the territory of Surakarta (Solo) into Kasunanan Palace and Mangkunegaran Palace. The architecture of the palace is very unique, a mix of classical Javanese and European style. This palace has high-valued antique collections such as old gamelan instruments and ancient books from Majapahit and Mataram era."
              />
            <PlaceDetails
              name="Triwindu Antique Market"
              details="Triwindu Antique Market is located at Diponegoro street and is very near to Mangkunegaran Palace. As its name, this market offers antiques and also duplicates or reproduces something antique with limited amount. Old lamp cup, interior and porcelain, metal statue, leather puppet, and keris are few merchandise that could be found in this market. The market is open everyday from 10 a.m to 4 p.m."
              />
            <PlaceDetails
              name="Wayang Wong Sriwedari (Traditional Drama Performance)"
              details="Wayang Wong is one of traditional Javanese performances that still exists. This performance was created by Mangkunegara I, combining dance, vocal and characters with Mahabarata and Ramayana stories. Wayang Wong Sriwedari is a legendary community that was established since the early 20th century during the reign of Pakubuwono X."
              />
            <PlaceDetails
              name=""
              details=""
            />
          </section>
        </div>
        <div className={styles.row}>
          <Text heading2 component="h3" className={styles.subheading}>Locals'  Favorites</Text>
          <section className={styles.article}>
            <PlaceDetails
              name="Rumah Banjarsari"
              details="Rumah Banjarsari is an art & public space in Solo that is expected to be one of  the pockets of culture to share a common space in mutual cooperation as a space for ideas, physical space, ideas and also sharing enthusiasm."
            />
            <PlaceDetails
              name="Tumurun Private Museum"
              details="Tumurun is a private museum owned by H. M. Lukminto’s family, founder of the biggest textile company in Southeast Asia, PT. Sri Rejeki Isman, Tbk. (Sritex). At the beginning, this museum was built to display the antique car collections of Mr. H. M. Lukminto. But in 2015, his son, Mr. Iwan Lukminto started to collect fine arts and in 2018 decided to open this museum to public. There is no entrance fee, but visitors must do prior online registration."
            />
            <PlaceDetails
              name="Lokananta Records"
              details="Lokananta is the first record label of Indonesia. It was established on October 29, 1956 in Solo. At the beginning, its primary function was to offer a transcription service for RRI (Radio of the Republic of Indonesia) also manufacturing phonograph records and audio cassettes to be broadcasted by RRI stations throughout Indonesia; the master records were produced by the various RRI facilities and then sent to Surakarta for pressing."
            />
          </section>
        </div>
        <div className={styles.row}>
          <Text heading2 component="h3" className={styles.subheading}>Eat</Text>
          <section className={styles.article}>
            <PlaceDetails
              name="Soto"
              details="Soto is a traditional Indonesian soup mainly composed of broth, meat, and vegetables. Soto is considered Indonesia's national dish, as it is served from Sumatra to Papua in a wide range of variation.Soto is omnipresent, can be found from warungs on street corners to fine dining restaurants and luxurious hotels. Most commonly, Solonese eats soto for breakfast. Some of the most favorite soto stalls are:"
              additional={
                <>
                  <EatPlace name="Soto Triwindu" phone="+62 271 646006" address="Jl. Teuku Umar, Keprabon"/>
                  <EatPlace name="Soto Gading" phone="+62 271 642142" address="Jl. Brigjen Sudiarto No.75, Joyosuran"/>
                </>
              }
            />
            <PlaceDetails
              name="Timlo"
              details="Timlo Solo is a famous soup made from seasoned chicken liver, eggs and fried pastry with meat filling (‘Sosis Jawa’)."
              additional={<EatPlace name="Timlo Sastro" phone="+62 271 654820" address="Jl Kapt Mulyadi 28" />}
            />
            <PlaceDetails
              name="Wedangan"
              details="Wedangan comes from Javanese language “wedang” which means hot drinking water. Wedangan stall always serves wedang with various traditional snacks at the street corner."
              additional={
                <>
                  <EatPlace name="Wedangan Gareng" address="Jl. Belimbing 14, Kerten" />
                  <EatPlace name="Wedangan Pak Wiryo" address="Jl. Perintis Kemerdekaan No.21, Sondakan" />
                  <EatPlace name="Wedangan Pendopo" address="Jl. Srigading I No.7, Mangkubumen" />
                </>
              }
            />
            <PlaceDetails
              name="Tengkleng"
              details="Tengkleng is a kind of soup with mutton bones as its main ingredient. According to the elders, only the Nobles and the Dutch can enjoy mutton. The workers and cooks could only afford to enjoy the head, feet and bones as their meal. Didn’t run out of ideas, they process and cook those parts into a soup and named it “tengkleng” because the soup was made only from bones with a little meat left. Physically, tengkleng looks similar to gulai, but without boneless meat and the soup is more runny. Some of the most favorite tengkleng stalls are:"
              additional={
                <>
                  <EatPlace name="Tengkleng & Sate Kambing Pak Manto" address="Jl. Honggowongso No.36, Sriwedari" />
                  <EatPlace name="Tengkleng & Sate Kambing Bu Hj. Bejo" address="Jl. Sungai Sebakung No.10, Kedung Lumbu" />
                </>
              }
            />
            <PlaceDetails
              name="Nasi Liwet"
              details='Nasi Liwet is almost similar to "Nasi Uduk" which is very famous in Jakarta or West Java. It is rice, which is cooked with santan (coconut milk). The vendors for traditional nasi liwet can easily be found in Keprabon street. The most famous vendor is Bu Lemu, but along the Keprabon you can find many of the vendors add the name Lemu after their own name.'
              additional={
                <>
                  <EatPlace name="Nasi Liwet Wongso Lemu" address="Jl. Teuku Umar, Keprabon" />
                </>
              }
            />
          </section>
        </div>
      </Container>
    </section>
  )
}

export default SoloGlance