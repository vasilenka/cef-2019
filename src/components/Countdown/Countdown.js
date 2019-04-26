import styles from './Countdown.module.scss'
import React from 'react'
import cx from 'classnames'

import Box from '../Box/Box'
import Text from '../../primitives/Text/Text'

const Countdown = ({
  className,
  ...restProps
  }) => {

  const [then] = React.useState(new Date('Augustus 20, 2019 08:00:00'))
  const [now] = React.useState(Date.now())
  const [daysLeft, setDaysLeft] = React.useState(0)
  const [hoursLeft, setHoursLeft] = React.useState(0)

  const countDownClock = () => {
    let countdown;

    setInterval(() => {
      let secondsLeft = (then - now) / 1000;
      let daysToGo = Math.floor(secondsLeft / (24 * 60 * 60));
      let totalDays = daysToGo * 24 * 60 * 60;
      let hoursToGo = Math.floor((secondsLeft - totalDays) / (60 * 60));

      if (secondsLeft <= 0) {
        clearInterval(countdown);
        return;
      }

      tick(daysToGo, hoursToGo);

    }, 1000);
  };

  const tick = (days, hours) => {
    setDaysLeft(days)
    setHoursLeft(hours)
  }

  React.useEffect(() => {
    countDownClock()
  }, [])

  return (
    <Box alignBaseline className={cx(styles.root)} {...restProps}>
      <Box alignBaseline className={styles.timer}>
        <Text display3 style={{marginRight: '8px'}}>{daysLeft}</Text>
        <Text heading5Alt>days</Text>
      </Box>
      <Box alignBaseline className={styles.timer}>
        <Text display3 style={{marginRight: '8px'}}>{hoursLeft}</Text>
        <Text heading5Alt>hours</Text>
      </Box>
      <Text heading5Alt component="h2" className={styles.text}>until the main event </Text>
    </Box>
  )
}

export default Countdown