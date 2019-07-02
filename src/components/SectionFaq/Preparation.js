import React from 'react';
import { Link } from 'gatsby'

import { FaqItemSection, Item, Email } from './SectionFaq';
import Text from '../../primitives/Text/Text';

const Preparation = ({
  className,
  ...restProps
  }) => {
  return (
    <FaqItemSection id="preparation-for-attendance" title="2. Preparation for attendance" {...restProps}>
      <Item
        question={`Can you issue an official letter of invitation for every participant?`}
        answer={`No. The Secretariat will only issue official invitation letters to the invited speakers and guests.`} />
      <Item
        question={`I need to apply for a visa to enter Indonesia.  Will you issue me a visa endorsement letter?`}
        answer={
          <Text component="p" medium>Yes. Please go to the <strong><Link to="/faq#visa-information">FAQs Visa below</Link></strong>, download the visa application form and send the request to the Secretariat at <Email />. If you are not an invited paper presenter/invited guest, the organizer is obliged to verify your application information first. Please attend to these steps as soon as possible.</Text>
        } />
    </FaqItemSection>
  )
}

export default Preparation