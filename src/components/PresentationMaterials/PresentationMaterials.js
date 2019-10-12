import styles from "./PresentationMaterials.module.scss"
import React from "react"
import cx from "classnames"

import Container from "../../layouts/Container/Container"
import Text from "../../primitives/Text/Text"
import { MayorsSymposium, PublicForum } from "./materials"
import Download from "./../icons/download.inline.svg"

const Item = ({ item }) => {
  return (
    <li className={styles.item}>
      <Text heading5 component="p" style={{ marginBottom: 0, paddingRight: 24 }}>
        {item.title}
      </Text>
      {item.url.length > 1 ? (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {item.url.map((link, index) => (
            <a
              key={`itemurl-${index}`}
              className={cx(styles.download, styles.downloadAlt)}
              href={link}
              target="_blank"
              rel="noreferrer noopener">
              <Download style={{ display: "block", marginRight: 6 }} />{" "}
              <Text heading6>{index === 0 ? "ENG" : "BHS"}</Text>
            </a>
          ))}
        </div>
      ) : (
        <a
          className={styles.download}
          href={item.url[0]}
          target="_blank"
          rel="noreferrer noopener">
          <Download style={{ display: "block" }} />
        </a>
      )}
    </li>
  )
}

const PresentationMaterials = ({ children, className, ...restProps }) => {
  return (
    <section className={cx(styles.root)} {...restProps}>
      <Container narrow>
        <main style={{ marginBottom: 96 }}>
          <Text heading2 component="h2" className={styles.sectionTitle}>
            Mayors' Symposium
          </Text>
          {MayorsSymposium.map(
            (item, itemIndex) =>
              item.docs.length > 0 && (
                <section className={styles.segment} key={`item-${itemIndex}`}>
                  <Text component="p" className={styles.segmentName}>
                    {item.name}
                  </Text>
                  <ul className={styles.segmentFiles}>
                    {item.docs.map((doc, docIndex) => (
                      <Item key={`doc-${docIndex}`} item={doc} />
                    ))}
                  </ul>
                </section>
              )
          )}
        </main>
        <main>
          <Text heading2 component="h2" className={styles.sectionTitle}>
            Public Forums
          </Text>
          {PublicForum.map(
            (item, itemIndex) =>
              item.docs.length > 0 && (
                <section className={styles.segment} key={`item-${itemIndex}`}>
                  <Text component="p" className={styles.segmentName}>
                    {item.name}
                  </Text>
                  <ul className={styles.segmentFiles}>
                    {item.docs.map((doc, docIndex) => (
                      <Item key={`doc-${docIndex}`} item={doc} />
                    ))}
                  </ul>
                </section>
              )
          )}
        </main>
      </Container>
    </section>
  )
}

export default PresentationMaterials
