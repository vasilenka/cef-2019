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
    <SEO title="Co-Organizers" />
    <Cover
      title="Organizers"
      description=""
      />
    <Box style={{backgroundColor: '#fff2c6', paddingTop: '96px', paddingBottom: '96px'}}>
      <Container narrow >
        <CoOrganizers
          photo={
            <a href="https://www.chula.ac.th/en/" target="_blank" rel="noopener noreferrer">
              <UnivWeb />
            </a>
          }
          style={{ maxWidth: '720px' }}>
          <Text heading2 component="h2" style={{marginBottom: '12px'}}>Chulalongkorn University</Text>
          <Text medium component="p" style={{marginBottom: '48px'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eveniet repellat accusantium. Asperiores aspernatur dolorum nemo, atque debitis necessitatibus repellendus deleniti laboriosam nulla rerum vitae ipsa, quae laborum? Nemo laboriosam et debitis, vel esse obcaecati nesciunt doloremque consequuntur iste temporibus.
          </Text>
          <a href="https://www.chula.ac.th/en/" target="_blank" rel="noopener noreferrer">
            <Button primary>Visit website</Button>
          </a>
        </CoOrganizers>
        <CoOrganizers
          photo={
            <a href="http://kotakita.org" target="_blank" rel="noopener noreferrer">
              <KotaKitaWeb />
            </a>
          }
          style={{ maxWidth: '720px' }}>
          <Text heading2 component="h2" style={{marginBottom: '12px'}}>Kotakita</Text>
          <Text medium component="p" style={{marginBottom: '48px'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eveniet repellat accusantium. Asperiores aspernatur dolorum nemo, atque debitis necessitatibus repellendus deleniti laboriosam nulla rerum vitae ipsa, quae laborum? Nemo laboriosam et debitis, vel esse obcaecati nesciunt doloremque consequuntur iste temporibus.
          </Text>
          <a href="http://kotakita.org" target="_blank" rel="noopener noreferrer">
            <Button primary>Visit website</Button>
          </a>
        </CoOrganizers>
        <CoOrganizers
          photo={
            <a href="http://icrs.ugm.ac.id/" target="_blank" rel="noopener noreferrer">
              <IcrsWeb />
            </a>
          } style={{ maxWidth: '720px' }}>
          <Text heading2 component="h2" style={{marginBottom: '12px'}}>Indonesian Consortium for Religious Studies (ICRS)</Text>
          <Text medium component="p" style={{marginBottom: '48px'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eveniet repellat accusantium. Asperiores aspernatur dolorum nemo, atque debitis necessitatibus repellendus deleniti laboriosam nulla rerum vitae ipsa, quae laborum? Nemo laboriosam et debitis, vel esse obcaecati nesciunt doloremque consequuntur iste temporibus.
          </Text>
          <a href="http://icrs.ugm.ac.id/" target="_blank" rel="noopener noreferrer">
            <Button primary>Visit website</Button>
          </a>
        </CoOrganizers>
      </Container>
    </Box>
    <Footer />
  </Default>
)

export default NotFoundPage
