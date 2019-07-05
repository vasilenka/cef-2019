import styles from './PartnerContainer.module.scss';
import React from 'react';
import cx from 'classnames';

const PartnerContainer = ({to, name, children, className, ...restProps}) => {
  return (
    to
    ?
      <div className={className}>
        <a href={to} target="_blank" rel="noopener noreferrer">
          <div className={cx(styles.partner)}>
            {children}
          </div>
          {name && <Text heading6 className={styles.partnerName} >{name}</Text>}
        </a>
      </div>
    : <div className={className}>
        <div className={cx(styles.partner)}>
          {children}
        </div>
        {name && <Text heading6 className={styles.partnerName} >{name}</Text>}
      </div>
  )
}

export default PartnerContainer