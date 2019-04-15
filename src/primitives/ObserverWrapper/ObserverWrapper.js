import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const ObserverWrapper = ({
  children,
  component,
  options,
  className,
  ...restProps
}) => {
  const Component = component || 'div';
  const ref = useRef();

  const useObserver =
    global.__SERVER__ ||
    ('IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window &&
      'intersectionRatio' in window.IntersectionObserverEntry.prototype &&
      'isIntersecting' in window.IntersectionObserverEntry.prototype);

  let inView = useInView(ref, options);

  return !useObserver ? (
    <div className={className} {...restProps}>
      {children}
    </div>
  ) : (
    <Component ref={ref} className={className} {...restProps}>
      {inView ? children : null}
    </Component>
  );
};

export default ObserverWrapper;
