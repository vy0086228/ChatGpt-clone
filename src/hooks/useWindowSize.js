// hooks/useWindowSize.js
import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    isMobile: window.innerWidth < 640, // Mobile: < 640px
    isTablet: window.innerWidth >= 640 && window.innerWidth < 1024, // Tablet: 640px - 1023px
    isDesktop: window.innerWidth >= 1024, // Desktop: ≥ 1024px
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth < 640,
        isTablet: window.innerWidth >= 640 && window.innerWidth < 1024,
        isDesktop: window.innerWidth >= 1024,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
