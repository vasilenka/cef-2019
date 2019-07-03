import React from 'react'

import { FaqItemSection, Item, Email } from './SectionFaq'
import Text from '../../primitives/Text/Text'

const Presentation = ({
  className,
  ...restProps
  }) => {
  return (
    <FaqItemSection id="forum-logistics" title="3. Presentations (for invited speakers)" {...restProps}>
      <Item
        question={`How much time do I have to present my material?`}
        answer={`Please consult your session convener(s), as the convener(s) are entrusted with the management of his/her session ensuring engaging and creative interaction with the participants, while common session guidelines are provided. The convener(s) will follow the usual method of alerting the speaker of the time s/he has left.`} />
      <Item
        question={`When and where should I send my PowerPoint and or presentation material?`}
        answer={
          <Text component="p" medium>
            Please send your files to the Secretariat at <Email/> before August 15, 2019 with the subject <strong>“Conference Presentation - Name of the Panel - Name of the Speaker”</strong>. You are requested to send the same files to your session convener and fellow presenters for their preparations in advance. You will be responsible for preparing your material on the computer at the session room.
          </Text>
        } />
    </FaqItemSection>
  )
}

export default Presentation