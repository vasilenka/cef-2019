import React from "react"

import Default from "../layouts/Default"
import SEO from "../components/seo"
import Footer from "../components/Footer/Footer";
import Cover from "../components/Cover/Cover";
import SchedulesFull from "../components/SchedulesFull/SchedulesFull";

const NotFoundPage = () => (
  <Default>
    <SEO title="Schedule" />
    <Cover
      title="Schedules"
      description="The event will be divided into three parts, which are Thematic Site Visits in day one, Civil Society Open Forum in day two, and Mayor’s Symposium in day three. Alongside with that, there will also be a competition designed by ICRS, titled “Co-Designing Sustainable, Just and Smart Urban Living through ICRS Education, Civic Engagement and Policy Advocacy”."
      />
    <SchedulesFull />
    <Footer />
  </Default>
)

export default NotFoundPage
