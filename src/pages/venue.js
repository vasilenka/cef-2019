import React from 'react';

import Default from './../layouts/Default'

import SEO from './../components/seo'
import Footer from './../components/Footer/Footer'
import TheSunanHotel from './../components/TheSunanHotel/TheSunanHotel'
import SoloGlance from '../components/SoloGlance/SoloGlance';
import PracticalGuide from '../components/PracticalGuide/PracticalGuide';


const venue = () => {
  return (
    <Default>
      <SEO title="Venue" description="Frequently asked questions for civic engagement 4.0 2019 International Forum in Solo"/>
      <TheSunanHotel/>
      <SoloGlance/>
      <PracticalGuide/>
      <Footer />
    </Default>
  )
}

export default venue