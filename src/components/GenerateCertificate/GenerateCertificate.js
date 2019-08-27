import styles from "./GenerateCertificate.module.scss"
import React from "react"
import Text from "../../primitives/Text/Text"
import Button from "../../primitives/Button/Button"
import Dialog from "../../primitives/Dialog/Dialog"

import Arrow from "./../icons/close.inline.svg"
import Box from "../Box/Box"
import Logo from "./../../assets/images/logo.png"
import Textfield from "../../primitives/Textfield/Textfield"

const GenerateCertificate = ({ className, setShowPrograms, ...restProps }) => {
  let container = React.createRef()

  const handleClick = e => {
    if (e.target === container.current) {
      setShowPrograms(false)
    }
  }

  return (
    <Dialog dark>
      <Box
        column
        component="main"
        alignCenter
        justifyCenter
        ref={container}
        onClick={handleClick}
        className={styles.root}>
        <main className={styles.main}>
          <Box
            alignStart
            justifyBetween
            component="header"
            style={{ marginBottom: 32 }}>
            <img
              className={styles.brand}
              src={Logo}
              alt="Civic Engagement 4.0"
            />
            <Button
              onClick={() => setShowPrograms(false)}
              style={{ padding: "0", textTransform: "uppercase" }}>
              <Arrow
                style={{
                  color: "rgba(0,0,0,0.72)",
                  width: "24px",
                  transform: "rotate(90deg)",
                }}
              />
            </Button>
          </Box>
          <Text
            heading2
            component="h2"
            style={{ marginBottom: 24, fontSize: 28 }}>
            Get your event certificate
          </Text>
          <Text large component="p" style={{ marginBottom: 12 }}>
            Please enter your name and email you used on event registration.
          </Text>
          <Textfield
            type="text"
            id="name"
            name="name"
            label="Full Name"
            style={{ marginBottom: 12 }}
          />
          <Textfield
            type="email"
            id="email"
            name="email"
            label="Email"
            style={{ marginBottom: 24 }}
          />
          <Button primary stretch style={{ textTransform: "uppercase" }}>
            Get Certificate
          </Button>
        </main>
      </Box>
    </Dialog>
  )
}

export default GenerateCertificate
