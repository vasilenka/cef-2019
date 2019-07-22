import React from 'react';

import { FaqItemSection, Item } from './SectionFaq';
import Text from '../../primitives/Text/Text';

const Logistics = ({
  className,
  ...restProps
  }) => {
  return (
    <FaqItemSection id="logistics" title="4. Forum Logistics" {...restProps}>
      <Item
        question={`Where Civic Engagement 4.0 2019 International Forum in Solo is taking place?`}
        answer={`There will be multiple venues designated for its various activities which includes The Sunan Hotel as the main venue. Further announcement will follow.`} />
      <Item
        question={`Where can I stay during the forum? Will the organizers arrange my accommodation?`}
        answer={
          <>
            <Text component="p" medium>
              <strong>(i) Invited speakers and guests</strong> will hear from the Secretariat regarding their accommodation and logistical support.  The Organizer will cover the costs up to four nights (check in on August 19, 2019, check out on August 23, 2019), unless otherwise agreed.  The Secretariat will announce further details soon.
            </Text>
            <Text component="p" medium>
              <strong>(ii) Not an invited speaker:</strong> You are responsible for your own accommodation. Surakarta is full of reasonably-priced accommodations and different parts of the city are easily accessible on foot or using taxi services (including app-based provider like Go-Jek and Grab). It is recommended that you utilize various online booking sites (e.g. Traveloka/Tiket.com, Booking.com, Agoda.com, etc).
            </Text>
          </>
        } />
      <Item
        question={`Is there any dress code?`}
        answer={`There is no particular dress code, however, participants are kindly requested to choose attire respecting and observing the local culture and etiquette. Weather in Surakarta during this time of the year can be very warm and humid with occasional rain, participants should prepare for umbrella or raincoat.`} />
    </FaqItemSection>
  )
}

export default Logistics