import React, { useEffect, useRef, useState } from "react";
import "../Pages.css";

const ScrollFadeIn = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: stop observing once it fades in to keep it visible
          observer.unobserve(entry.target); 
        }
      });
    }, {
      threshold: 0.1, // Triggers when 10% of the card is visible
      rootMargin: "0px 0px -50px 0px" // Triggers 50px before entering viewport
    });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-card ${isVisible ? "visible" : ""}`}
    >
      {children}
    </div>
  );
};

export default ScrollFadeIn;
