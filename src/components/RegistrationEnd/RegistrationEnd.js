import styles from "./RegistrationEnd.module.scss"
import React from "react"
import Text from "../../primitives/Text/Text"
import Button from "../../primitives/Button/Button"
import Dialog from "../../primitives/Dialog/Dialog"

import Arrow from "./../icons/close.inline.svg"
import Box from "../Box/Box"
import Logo from "./../../assets/images/logo.png"

const RegistrationEnd = ({ className, setShowPrograms, ...restProps }) => {
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
              style={{ padding: "0" }}>
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
            Registration is now closed!
          </Text>
          <Text large component="p" style={{ marginBottom: 12 }}>
            Organizers would like to express its sincere appreciation for your
            kind interests.
          </Text>
          <Text large component="p" style={{ marginBottom: 24 }}>
            For those who have successfully registered online, you will receive
            a confirmation e-mail from the organizers.
          </Text>
          <Text heading4Alt component="p">
            Thank you!
          </Text>
        </main>
      </Box>
    </Dialog>
  )
}

export default RegistrationEnd
