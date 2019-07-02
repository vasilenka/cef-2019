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
        answer={`Yes, an art exhibition. It will take place in The Sunan Hotel and is open to public. Further information about the Art Exhibition will be published soon.`} />
    </FaqItemSection>
  )
}

export default Others