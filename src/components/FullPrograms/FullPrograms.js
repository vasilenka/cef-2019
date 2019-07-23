
import React from 'react';
import Container from '../../layouts/Container/Container';
import Text from '../../primitives/Text/Text';
import Button from '../../primitives/Button/Button';
import Dialog from '../../primitives/Dialog/Dialog';

import Arrow from './../icons/close.inline.svg'
import Box from '../Box/Box';

const FullPrograms = ({
  className,
  setShowPrograms,
  ...restProps
  }) => {
  return (
    <Dialog>
      <header style={{  position:'sticky', top: 0, padding: '12px 0px', backgroundColor: '#E8C23D', boxShadow: '0px 16px 32px -12px rgba(0,0,0,.24)' }}>
        <Container narrow>
          <Box alignCenter>
            <Button onClick={() => setShowPrograms(false)} style={{padding: '0'}}>
              <Arrow style={{ color: 'rgba(0,0,0,0.72)', width: '24px', transform: 'rotate(90deg)' }}/>
            </Button>
            <Text heading3 component="h1" style={{ flex: 'auto', textAlign: 'center'}}>Full Programs</Text>
            <a href="https://drive.google.com/uc?authuser=0&id=1qsWW1RQXZ7Ig5Cq5dZYojdSK1wawtPrb&export=download" rel="noopener noreferrer" target="_blank">
              <Button primary>Download Programs as PDF</Button>
            </a>
          </Box>
        </Container>
      </header>
      <main>
        <Container bleed>
          <iframe title="Full programs pdf" src="https://drive.google.com/file/d/1qsWW1RQXZ7Ig5Cq5dZYojdSK1wawtPrb/preview" width="100%" style={{ height: 'calc(100vh - 72px)'}}>
            <Text>Oops, your browser doesn't support PDF preview</Text>
          </iframe>
        </Container>
      </main>
    </Dialog>
  )
}

export default FullPrograms