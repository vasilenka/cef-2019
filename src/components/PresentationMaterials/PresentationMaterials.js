import styles from "./PresentationMaterials.module.scss"
import React from "react"
import cx from "classnames"
import Container from "../../layouts/Container/Container"
import Text from "../../primitives/Text/Text"

const PresentationMaterials = ({ children, className, ...restProps }) => {
  return (
    <section className={cx(styles.root)} {...restProps}>
      <Container narrow>
        <Text large component="p">
          Das good text!
        </Text>
      </Container>
    </section>
  )
}

export default PresentationMaterials
