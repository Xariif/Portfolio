import { useEffect } from 'react';

export const useSmoothScroll = () => {
  // Add smooth scrolling behavior to the scrollable container
  useEffect(() => {
    const container = document.querySelector('html');
    if (container) {
      container.style.scrollBehavior = 'smooth';
    }
    
    return () => {
      if (container) {
        container.style.scrollBehavior = '';
      }
    };
  }, []);
};
