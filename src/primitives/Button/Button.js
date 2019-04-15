import styles from './Button.module.scss';
import React from 'react';
import classnames from 'classnames';
import { bool, node, object, string, oneOf, oneOfType } from 'prop-types';

const Button = ({
  type,
  href,
  component,
  children,
  icon,
  stretch,
  primary,
  onClick,
  secondary,
  light,
  secondaryAlt,
  primaryBold,
  primaryAlt,
  primaryAltBold,
  className,
  small,
  large,
  disabled,
  ...restProps
}) => {
  const handleClickLink = e => {
    e.preventDefault();
    if (onClick) {
      onClick(e);
    }
  };

  return component === 'a' ? (
    <a
      href={href}
      onClick={handleClickLink}
      className={classnames({
        [styles.link]: true,
        [styles.secondary]: secondary && !light,
        [styles.secondaryLight]: secondary && light,
        [styles.secondaryAlt]: secondaryAlt && !light,
        [styles.secondaryAltLight]: secondaryAlt && light,

        [styles.primaryMedium]: primary && !light,
        [styles.primaryMediumLight]: primary && light,
        [styles.primaryBold]: primaryBold && !light,
        [styles.primaryBoldLight]: primaryBold && light,

        [styles.primaryAltMedium]: primaryAlt,
        [styles.primaryAltBold]: primaryAltBold,

        [styles.small]: !secondaryAlt && small,
        [styles.smallAlt]: secondaryAlt && small,
        [styles.large]: !small && !secondaryAlt,
        [styles.largeAlt]: secondaryAlt && !small,

        [styles.disabled]: disabled,
        [styles.stretch]: stretch,

        [className]: className
      })}
      disabled={disabled}
      {...restProps}
    >
      <span className={styles.childrenLink}>
        {icon && <span className={styles.icon}>{icon}</span>}
        {children}
      </span>
    </a>
  ) : (
    <button
      type={type || 'button'}
      onClick={onClick}
      className={classnames({
        [styles.secondary]: secondary && !light,
        [styles.secondaryLight]: secondary && light,
        [styles.secondaryAlt]: secondaryAlt && !light,
        [styles.secondaryAltLight]: secondaryAlt && light,

        [styles.primaryMedium]: primary && !light,
        [styles.primaryMediumLight]: primary && light,
        [styles.primaryBold]: primaryBold && !light,
        [styles.primaryBoldLight]: primaryBold && light,

        [styles.primaryAltMedium]: primaryAlt,
        [styles.primaryAltBold]: primaryAltBold,

        [styles.small]: !secondaryAlt && small,
        [styles.smallAlt]: secondaryAlt && small,
        [styles.large]: !small && !secondaryAlt,
        [styles.largeAlt]: secondaryAlt && !small,

        [styles.disabled]: disabled,
        [styles.stretch]: stretch,

        [className]: className
      })}
      disabled={disabled}
      {...restProps}
    >
      <span className={styles.children}>
        {icon && <span className={styles.icon}>{icon}</span>}
        {children}
      </span>
    </button>
  );
};

Button.displayName = 'Button';

Button.defaultProps = {
  large: true,
  disabled: false,
  type: 'button'
};

Button.propTypes = {
  className: oneOfType([string, object]),
  type: oneOf(['button', 'submit']),
  disabled: bool,
  small: bool,
  large: bool,
  children: node.isRequired
};

export default Button;
