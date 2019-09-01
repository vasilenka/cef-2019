import styles from "./GenerateCertificate.module.scss"
import React from "react"
import axios from "axios"

import Text from "../../primitives/Text/Text"
import Button from "../../primitives/Button/Button"
import Dialog from "../../primitives/Dialog/Dialog"
import Textfield from "../../primitives/Textfield/Textfield"
import Box from "../Box/Box"

import Arrow from "./../icons/close.inline.svg"
import Logo from "./../../assets/images/logo.png"

const GenerateCertificate = ({ className, setShowPrograms, ...restProps }) => {
  let container = React.createRef()

  const [email, setEmail] = React.useState("")
  const [name, setName] = React.useState("")
  const [file, setFile] = React.useState("")
  const [isGenerating, setIsGenerating] = React.useState(false)

  const handleClick = e => {
    if (e.target === container.current) {
      setShowPrograms(false)
    }
  }

  const getCertificate = async (email, name) => {
    if (email && name) {
      setIsGenerating(true)
      let response = await axios.get(
        `https://ongkiherlambang.id:5678/pdf?name=${name}&email=${email}`
      )
      response && response.data && setFile(response.data)
    }
  }

  React.useEffect(() => {
    if (file && name) {
      const linkSource = `data:application/pdf;base64,${file}`
      const link = document.createElement("a")
      const fileName = `${name}.pdf`

      link.target = "_self"
      link.href = linkSource
      link.download = fileName
      link.click()

      setIsGenerating(false)
    }
  }, [file])

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
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Textfield
            type="email"
            id="email"
            name="email"
            label="Email"
            style={{ marginBottom: 24 }}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Button
            primary
            stretch
            disabled={isGenerating}
            style={{ textTransform: "uppercase" }}
            onClick={() => getCertificate(email, name)}>
            {isGenerating ? "Please wait..." : "Get Certificate"}
          </Button>
        </main>
      </Box>
    </Dialog>
  )
}

export default GenerateCertificate
