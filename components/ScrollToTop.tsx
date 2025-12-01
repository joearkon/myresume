import React, { useState, useEffect } from 'react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Show/Hide ScrollToTop Button
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // 2. Calculate Reading Progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {/* Reading Progress Bar (Fixed Top) */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent print:hidden">
        <div 
          className="h-full bg-gunpla-blue dark:bg-gunpla-blue shadow-[0_0_10px_rgba(59,130,246,0.7)] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Scroll To Top Button (Fixed Bottom Right) */}
      <div className="fixed bottom-6 right-24 z-40 print:hidden">
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-slate-800 dark:bg-white text-white dark:text-slate-900 shadow-lg hover:bg-gunpla-blue dark:hover:bg-gunpla-blue dark:hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            aria-label="Scroll to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}
      </div>
    </>
  );
};

export default ScrollToTop;