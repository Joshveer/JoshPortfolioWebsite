import React, { useRef, useEffect } from 'react';

const FadeInOutView = ({ children }) => {
  const viewRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            entry.target.classList.remove('fade-out');
            entry.target.classList.remove('hidden');
          } else {
            entry.target.classList.remove('fade-in');
            entry.target.classList.add('fade-out');
            entry.target.classList.add('hidden');
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (viewRef.current) {
      observer.observe(viewRef.current);
    }

    return () => {
      if (viewRef.current) {
        observer.unobserve(viewRef.current);
      }
    };
  }, []);

  return <div ref={viewRef} className="hidden">{children}</div>;
};

export default FadeInOutView;

//Comment