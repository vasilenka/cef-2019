import styles from './Opportunity.module.scss';
import React from 'react';
import cx from 'classnames';

const Opportunity = ({
  icon,
  text,
  className,
  ...restProps
  }) => {
  return (
    <div>
      {icon}
      {text}
    </div>
  )
}

export default Opportunity