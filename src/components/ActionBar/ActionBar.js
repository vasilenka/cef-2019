import styles from './ActionBar.module.scss'
import React from 'react'
import cx from 'classnames'

const ActionBar = ({ children, vertical, className, ...restProps }) => {
  // let lastScrollTop = 0
  // let [scrolling, setScrolling] = React.useState(false)

  // const scrollingThePage = () => {
  //   if(typeof window !== 'undefined') {
  //   var st = window.pageYOffset || document.documentElement.scrollTop
  //     if (st > lastScrollTop) {
  //       setScrolling(true)
  //     } else {
  //       setScrolling(false)
  //     }
  //     lastScrollTop = st <= 0 ? 0 : st
  //   }
  // }

  // React.useEffect(() => {
  //   if(typeof window !== 'undefined') {
  //     window.addEventListener('scroll', scrollingThePage, false)
  //   }
  //   // document.body.addEventListener('scroll', scrollingThePage, false)
  //   return () => {
  //     if(typeof window !== 'undefined') {
  //       window.removeEventListener('scroll', scrollingThePage, false)
  //     }
  //     // document.body.removeEventListener('scroll', scrollingThePage, false)
  //   }
  // }, [])

  return (
    <div
      className={cx({
        [styles.root]: true,
        // [styles.scrolling]: scrolling,
        [className]: className
      })}
      {...restProps}
    >
      <div
        className={cx({
          [styles.container]: true,
          [styles.horizontal]: !vertical,
          [styles.vertical]: vertical
        })}
      >
        {children}
      </div>
    </div>
  )
}

export default ActionBar
