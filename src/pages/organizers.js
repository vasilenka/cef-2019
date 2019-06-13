import React from "react"

import Default from "../layouts/Default"
import SEO from "../components/seo"
import Text from "../primitives/Text/Text"
import Footer from "../components/Footer/Footer";

import UnivWeb from './../components/images/organizers/univ-webp'
import IcrsWeb from './../components/images/organizers/icrs-webp'
import KotaKitaWeb from './../components/images/organizers/kk-webp'

import CoOrganizers from "../components/CoOrganizers/CoOrganizers";
import Cover from "../components/Cover/Cover";
import Button from "../primitives/Button/Button";
import Container from "../layouts/Container/Container";
import Box from "../components/Box/Box";

const NotFoundPage = () => (
  <Default>
    <SEO title="Co-Organizers | Civic Engagement Forum 4.0 Solo" />
    <Cover
      title="Organizers"
      description="2019 International Forum of Civic Engagement 4.0, is co-organized by Chulalongkorn University with Kota Kita Foundation and Indonesian Consortium for Religious Studies."
      />
    <Box style={{backgroundColor: '#fff2c6', paddingTop: '96px', paddingBottom: '96px'}}>
      <Container narrow >
        <CoOrganizers
          id="chulalongkorn-university"
          photo={
            <a href="https://www.chula.ac.th/en/" target="_blank" rel="noopener noreferrer">
              <UnivWeb />
            </a>
          }
          style={{ maxWidth: '720px' }}>
          <Text heading2 component="h2" style={{marginBottom: '12px'}}>Chulalongkorn University</Text>
          <Text medium component="p" style={{marginBottom: '32px'}}>
            Chulalongkorn University (CU) was officially established in March 1917 by King Vajiravudh (RamaVI) and named after his father, King Chulalongkorn (Rama V), who laid the foundations for modern education in Thailand.
          </Text>
          <a href="https://www.chula.ac.th/en/" target="_blank" rel="noopener noreferrer">
            <Button primary>Visit website</Button>
          </a>
        </CoOrganizers>
        <CoOrganizers
          id="icrs"
          photo={
            <a href="http://icrs.ugm.ac.id/" target="_blank" rel="noopener noreferrer">
              <IcrsWeb />
            </a>
          } style={{ maxWidth: '720px' }}>
          <Text heading2 component="h2" style={{marginBottom: '12px'}}>Indonesian Consortium for Religious Studies (ICRS)</Text>
          <Text medium component="p" style={{marginBottom: '32px'}}>
            The Indonesian Consortium for Religious Studies (ICRS) is a consortium of three universities: Universitas Gadjah Mada (UGM), State Islamic University Sunan Kalijaga (UIN), and Duta Wacana Christian University (UKDW). Together they offer an integrative, international Ph.D. program in inter-religious studies. This is the only Religious Studies Ph.D. Program that is co-sponsored by Muslim, Christian, and national-secular universities.
          </Text>
          <a href="http://icrs.ugm.ac.id/" target="_blank" rel="noopener noreferrer">
            <Button primary>Visit website</Button>
          </a>
        </CoOrganizers>
        <CoOrganizers
          id="kotakita"
          photo={
            <a href="http://kotakita.org" target="_blank" rel="noopener noreferrer">
              <KotaKitaWeb />
            </a>
          }
          style={{ maxWidth: '720px' }}>
          <Text heading2 component="h2" style={{marginBottom: '12px'}}>Kotakita</Text>
          <Text medium component="p" style={{marginBottom: '12px'}}>
            Kota Kita is a non-governmental organization (NGO) based in Solo, Indonesia with expertise in urban planning and citizen participation in the design and development of cities.
          </Text>
          <Text medium component="p" style={{marginBottom: '32px'}}>
            Over the years, we have worked in more than 15 rapidly urbanizing Indonesian cities. We have developed effective methodologies for fine-grained analysis of cities and settlements. We leverage spatial analysis tools and participatory processes to tap into the knowledge of communities and local government alike, producing insights that can lead to inclusive solutions. Read more.
          </Text>
          <a href="http://kotakita.org" target="_blank" rel="noopener noreferrer">
            <Button primary>Visit website</Button>
          </a>
        </CoOrganizers>
      </Container>
    </Box>
    <Footer />
  </Default>
)

export default NotFoundPage
