import React from "react"

import Default from "./../layouts/Default"
import SEO from "../components/seo"
import Footer from "../components/Footer/Footer";
import AboutHero from "../components/AboutHero/AboutHero";

const About = () => (
  <Default>
    <SEO title="About" description="Civic Engagement 4.0: Dignity ~ Justice ~ Sustainability is a regional platform for mutual learning, action and advocacy, working toward achieving dignity, justice and sustainability in Southeast Asian (SEA) society, where the wave of Fourth Industrial Revolution is affecting each of us living in the region, we become increasingly aware of the need for multi-stakeholder collaboration which can effectively respond to it. The platform is expected to facilitate exchanges of knowledge for further collaboration in implementing actions and advocacy to achieve dignity, justice and sustainability among active members of communities working on the ground at the national, regional and international levels." keywords={[`civic engagement forum`, `kotakita`, `chula university`, `solo`, `event`, `2019`, `civic engagement 4`, `justice`, `dignity`, `sustainability`]} />
    <AboutHero />
    <Footer />
  </Default>
)

export default About
