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
        answer={`Each of the sessions has its own Rules & Regulations and Terms of Conditions. PowerPoint presentation is encouraged although not mandatory. The convener of each panel will be provided with common guidelines for managing the session effectively. The convener will follow the usual method of alerting the speaker of the time s/he has left.`} />
      <Item
        question={`When and where should I send my PowerPoint and or presentation material?`}
        answer={
          <Text component="p" medium>
            Please send your files to the Secretariat at <Email/> before August 15, 2019 with the subject <strong>“Conference Presentation - Name of the Panel - Name of the Speaker”</strong>. The files will be sent to your convener for their preparations in advance. You will be responsible for preparing your material on the computer at the session room.
          </Text>
        } />
    </FaqItemSection>
  )
}

export default Presentation