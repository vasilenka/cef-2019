import React from 'react';

import { FaqItemSection, Item, Email } from './SectionFaq';
import Text from '../../primitives/Text/Text';

const Logistics = ({
  className,
  ...restProps
  }) => {
  return (
    <FaqItemSection id="logistics" title="4. Forum Logistics" {...restProps}>
      <Item
        question={`Where Civic Engagement 4.0 2019 International Forum in Solo is taking place?`}
        answer={`Several locations in Solo City: Solo public places (details will be announced), Universitas Sebelas Maret, and The Sunan Hotel.`} />
      <Item
        question={`Where can I stay during the forum?  Will the organizers arrange my accommodation?`}
        answer={
          <>
            <Text component="p" medium>
              <strong>(i) Invited speakers and guests</strong> will hear from the Secretariat regarding their accommodation and logistical support.  The Organizer will cover the costs for five nights (check in on August 19, 2019, check out on August 24, 2019), unless otherwise agreed.  The Secretariat will announce further details soon.
            </Text>
            <Text component="p" medium>
              <strong>(ii) Not an invited speaker:</strong> You are responsible for your own accommodation. Surakarta is full of reasonably-priced accommodations and different parts of the city are easily accessible on foot or using taxi services (including app-based provider like Go-Jek and Grab). It is recommended that you utilize various online booking sites (e.g. Traveloka/Tiket.com, Booking.com, Agoda.com, etc). For queries, you can send us an email at <Email /> and we’d be happy to help.
            </Text>
          </>
        } />
      <Item
        question={`Is there any dress code?`}
        answer={`No. However, participants are expected to dress in business casual attire. Weather in Surakarta during this time of the year can be very warm and humid with occasional rain, participants should prepare for umbrella or raincoat. Participants are also suggested to observe local culture and modesty.`} />
    </FaqItemSection>
  )
}

export default Logistics