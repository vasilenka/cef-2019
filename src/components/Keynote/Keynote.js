import styles from "./Keynote.module.scss"
import React from "react"
import cx from "classnames"
import Text from "../../primitives/Text/Text"

const Keynote = ({
  className,
  name,
  number,
  description,
  photo,
  job,
  ...restProps
}) => {
  return photo || description ? (
    <div className={cx(styles.keynote)}>
      <main className={styles.profile}>
        {number && (
          <Text heading5 component="p" className={styles.number}>
            SPEAKER {number}
          </Text>
        )}
        <div className={styles.container}>
          <header className={styles.bio}>
            <Text heading3Alt component="h3" className={styles.name}>
              {name}
            </Text>
            {job && (
              <Text heading5 component="p" className={styles.job}>
                {job}
              </Text>
            )}
            {description && (
              <article className={styles.description}>{description}</article>
            )}
          </header>
          <div className={styles.photo}>{photo}</div>
        </div>
        {description && (
          <article className={styles.mobileDescription}>{description}</article>
        )}
      </main>
    </div>
  ) : (
    <div className={cx(styles.keynoteAlt)}>
      <main className={styles.profile}>
        <Text heading5 component="p" className={styles.number}>
          SPEAKER {number}
        </Text>
        <header>
          <Text
            heading3Alt
            component="h3"
            className={styles.nameAlt}
            style={{ fontSize: "20px" }}>
            {name}
          </Text>
          <Text heading5 component="p" className={styles.job}>
            {job}
          </Text>
        </header>
      </main>
    </div>
  )
}

export default Keynote
