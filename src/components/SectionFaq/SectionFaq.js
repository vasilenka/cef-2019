import styles from './SectionFaq.module.scss'
import React from 'react'
import cx from 'classnames'
import { Link } from 'gatsby'

import Container from '../../layouts/Container/Container'
import Text from '../../primitives/Text/Text'
import { Registration, Preparation, Presentation, Logistic, Others } from './faq.js'

import Arrow from './../icons/arrow.inline.svg'
import Hack from '../Hack/Hack';

const Item = ({question, answer, ...restProps}) => {

  const [show, setShow] = React.useState(false);

  return (
    <li className={styles.item} {...restProps}>
      <header onClick={() => setShow(!show)} className={cx({[styles.questionContainer]: true, [styles.active]: show})}>
        <Text component="h3" heading4 className={styles.question}>{question}</Text>
        <Arrow className={cx({[styles.arrow]: true, [styles.activeArrow]: show})}/>
      </header>
      {show && <main className={cx({[styles.answer]: true, [styles.active]: show})}>
        <Text component="p" medium>{answer}</Text>
      </main>}
    </li>
  )
}

const FaqNavMenuItem = props => <Link to={props.to}><Text heading5 component="li" className={styles.faqMenu}>{props.label}</Text></Link>

const FaqNavMenu = props => {
  return (
    <div className={styles.nav}>
      <ul className={styles.navSection}>
        <Text medium component="h3" className={styles.faqnav}>FAQ sections</Text>
        <FaqNavMenuItem to="/faq#participation-and-registration" label="1. Participation & Registration"/>
        <FaqNavMenuItem to="/faq#preparation-for-attendance" label="2. Preparation for Attendance"/>
        <FaqNavMenuItem to="/faq#presentations" label="3. Presentations"/>
        <FaqNavMenuItem to="/faq#forum-logistics" label="4. Forum Logistics"/>
        <FaqNavMenuItem to="/faq#others" label="5. Others"/>
      </ul>
    </div>
  )
}

const FaqItemSection = props => {
  return (
    <section className={styles.section}>
      <Hack id={props.id}/>
      <header className={styles.header}>
        <Text heading2 component="h2" className={styles.title}>{props.title}</Text>
      </header>
      <ul>
        {props.children}
      </ul>
    </section>
  )
}

const SectionFaq = ({
  className,
  ...restProps
  }) => {
  return (
    <div className={cx(styles.root)}>
      <Container narrow className={styles.container}>
        <div className={styles.row}>
          <div className={styles.content}>
            <FaqItemSection id="participation-and-registration" title="1. Participation and Registration">
              {Registration.map(item => <Item question={item.q} answer={item.a}/>)}
            </FaqItemSection>
            <FaqItemSection id="preparation-for-attendance" title="2. Preparation for attendance">
              {Preparation.map(item => <Item question={item.q} answer={item.a}/>)}
            </FaqItemSection>
            <FaqItemSection id="forum-logistics" title="3. Presentations (for invited speakers)">
              {Presentation.map(item => <Item question={item.q} answer={item.a}/>)}
            </FaqItemSection>
            <FaqItemSection id="presentations" title="4. Forum Logistics">
              {Logistic.map(item => <Item question={item.q} answer={item.a}/>)}
            </FaqItemSection>
            <FaqItemSection id="others" title="5. Others">
              {Others.map(item => <Item question={item.q} answer={item.a}/>)}
            </FaqItemSection>
          </div>
          <FaqNavMenu />
        </div>
      </Container>
    </div>
  )
}

export default SectionFaq