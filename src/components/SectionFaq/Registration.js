import React from 'react';
import { FaqItemSection, Item, Email } from './SectionFaq';
import {Link} from 'gatsby'
import Text from '../../primitives/Text/Text';

const Registration = ({
  className,
  ...restProps
  }) => {
  return (
    <FaqItemSection id="participation-and-registration" title="1. Participation and Registration" {...restProps}>
      <Item
        question={`Is Civic Engagement 4.0 2019 International Forum in Solo open to all?`}
        answer={`Yes. Civic Engagement 4.0 2019 International Forum in Solo welcomes participants from diverse backgrounds and disciplines. We invite active public participation. Everyone who has interests in social development, citizen-led initiatives, and innovation for social change can attend the forum.`} />
      <Item
        question={`How can I participate in Civic Engagement 4.0 2019 International Forum in Solo?`}
        answer={`You can participate in Civic Engagement 4.0 2019 International Forum in Solo as a volunteer or participant with prior registration.`} />
      <Item
        question={`How can I register?`}
        answer={
          <Text component="p" medium>A registration portal at <strong><Link to="/join-participant">https://civicenagegementforum.net/join-participant</Link></strong> will be open until August 12, 2019. So, please register as soon as possible. As a registered participant, you will receive a conference kit at the onsite registration desk at the event’s venue. The kit will include printed brochures, your name tag, and bag.</Text>
        } />
      <Item
        question={`How much is registration fee?`}
        answer={`There is no registration fee.`} />
      <Item
        question={`Can I do walk-in registration?`}
        answer={`It will be subjected to seat availability. Participants will be accepted “a first-come first-served” basis therefore the organizer highly recommends you register online soonest.`} />
      <Item
        question={`Can I bring my friend/family member to listen to my session only?`}
        answer={`Yes, of course. But each person you invite must register online.`} />
      <Item
        question={`What do I do if I can no longer attend the Forum after my registration?`}
        answer={
          <Text medium>
            Please email to <Email /> immediately, so the organizer can allocate your slot to other potential participants.
          </Text>
        } />
    </FaqItemSection>
  )
}

export default Registration