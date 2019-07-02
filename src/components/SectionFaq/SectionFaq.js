import styles from './SectionFaq.module.scss'
import React from 'react'
import cx from 'classnames'

import Container from '../../layouts/Container/Container'
import Text from '../../primitives/Text/Text'

import Arrow from './../icons/arrow.inline.svg'
import Hack from '../Hack/Hack';
import Visa from './Visa';

import RegistrationSection from './Registration';
import PreparationSection from './Preparation';
import PresentationSection from './Presentation';
import LogisticsSection from './Logistics';
import OthersSection from './Others';

export const Item = ({question, answer, ...restProps}) => {

  let show= false;

  return (
    <li className={styles.item} {...restProps}>
      <header className={cx({[styles.questionContainer]: true, [styles.active]: show})}>
        <Text component="h3" heading4 className={styles.question}>{question}</Text>
      </header>
      <main className={cx({[styles.answer]: true, [styles.active]: show})}>
        <Text component="p" medium>{answer}</Text>
      </main>
    </li>
  )
}

// const FaqNavMenuItem = props => <Link to={props.to}><Text heading5 component="li" className={styles.faqMenu}>{props.label}</Text></Link>

// const FaqNavMenu = props => {
//   return (
//     <div className={styles.nav}>
//       <ul className={styles.navSection}>
//         <Text medium component="h3" className={styles.faqnav}>FAQ sections</Text>
//         <FaqNavMenuItem to="/faq#participation-and-registration" label="1. Participation & Registration"/>
//         <FaqNavMenuItem to="/faq#preparation-for-attendance" label="2. Preparation for Attendance"/>
//         <FaqNavMenuItem to="/faq#presentations" label="3. Presentations"/>
//         <FaqNavMenuItem to="/faq#forum-logistics" label="4. Forum Logistics"/>
//         <FaqNavMenuItem to="/faq#others" label="5. Others"/>
//       </ul>
//     </div>
//   )
// }

export const Email = () => <strong><a href="mailto:info@civicengagementforum.net" rel="noopener noreferrer" target="_blank">info@civicengagementforum.net</a></strong>

export const FaqItemSection = props => {

  const [show, setShow] = React.useState(false);

  return (
    <section className={styles.section}>
      <Hack id={props.id}/>
      <header onClick={() => setShow(!show)} className={cx({[styles.header]: true, [styles.active]: show})}>
        <Text heading3 component="h2" className={styles.title}>{props.title}</Text>
        <Arrow className={cx({[styles.arrow]: true, [styles.activeArrow]: show})}/>
      </header>
      { show && <ul className={styles.sectionContent}>{props.children}</ul> }
    </section>
  )
}

const SectionFaq = ({
  className,
  ...restProps
  }) => {
  return (
    <section className={cx(styles.root)} {...restProps}>
      <Container narrow className={styles.container}>
        <div className={styles.row}>
          <div className={styles.content}>
            <RegistrationSection />
            <PreparationSection />
            <PresentationSection />
            <LogisticsSection />
            <OthersSection />
          </div>
        </div>
        <Visa />
      </Container>
    </section>
  )
}

export default SectionFaq