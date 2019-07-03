import React from "react"

import Default from "../layouts/Default"
import SEO from "../components/seo"
import Footer from "../components/Footer/Footer";
import Cover from "../components/Cover/Cover";
import SchedulesFull from "../components/SchedulesFull/SchedulesFull";
import ScheduleParts from "../components/ScheduleParts/ScheduleParts";

const NotFoundPage = () => (
  <Default>
    <SEO title="Programs" />
    <Cover
      title="Programs"
      description="2019 International Forum in Solo will be running for a week in the city of Solo.  Most activities are open to  public with prior registration. Simultaneous interpretation between English and Bahasa Indonesia will be available for plenary sessions.  The main language to be used during the Forum is English."
      >
      <ScheduleParts />
    </Cover>
    <SchedulesFull />
    <Footer />
  </Default>
)

export default NotFoundPage
