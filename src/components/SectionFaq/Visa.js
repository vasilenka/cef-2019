import React from 'react';
import Text from '../../primitives/Text/Text';
import Hack from '../Hack/Hack';

const Visa = ({
  className,
  ...restProps
  }) => {
  return (
    <section style={{maxWidth: '720px', paddingTop: '64px', position: 'relative'}}>
      <Hack id="visa-information" />
      <Text heading1 component="h2" style={{marginBottom: '24px'}}>Visa Information</Text>
      <Text medium component="p" style={{marginBottom: '24px'}}>
        Nationals from specific countries and territories may enter Indonesia without visa or can apply for visa on arrival at the airport. Please visit <strong><a href="https://www.indonesia.travel/gb/en/trip-ideas/visa-free-for-169-countries-to-travel-to-indonesia" rel="noopener noreferrer" target="_blank">the Indonesian Immigration website</a></strong> for further details.
      </Text>
      <Text medium component="p" style={{marginBottom: '0'}}>
        If you need a visa, please fill up the form (<strong><a href="https://drive.google.com/uc?authuser=0&id=1kli5kPVE6qUzPY4b53aqZH6hJJNsifBA&export=download" rel="noopener noreferrer" target="_blank">get the form here</a></strong>) and send it to the Secretariat at <strong><a href="mailto:info@civicengagementforum.net">info@civicengagementforum.net</a></strong> together with your passport copy (photo page).
        <br/>We will come back to you as soon as possible. In case you are not an invited speaker, the Organizing Committee is obliged to verify your background information prior to agreeing to issue the visa endorsement letter.
      </Text>
    </section>
  )
}

export default Visa