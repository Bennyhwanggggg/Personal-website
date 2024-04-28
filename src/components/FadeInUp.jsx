import React from 'react';
import { useInView } from 'react-intersection-observer';
import './fadeInUp.css'; // Import your CSS file with the animation styles

const FadeInUp = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className={inView ? 'fade-in-up' : ''}>
      {children}
    </div>
  );
};

export default FadeInUp;
