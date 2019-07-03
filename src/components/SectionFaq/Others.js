import React from 'react'
import { FaqItemSection, Item } from './SectionFaq'

const Others = ({
  className,
  ...restProps
  }) => {
  return (
    <FaqItemSection id="others" title="5. Others" {...restProps}>
      <Item
        question={`Will there be any exhibition during the Forum?`}
        answer={`Yes. An art exhibition that complements the theme of the Forum will be organized at The Sunan Hotel’s public space. Further information will be announced.`} />
    </FaqItemSection>
  )
}

export default Others