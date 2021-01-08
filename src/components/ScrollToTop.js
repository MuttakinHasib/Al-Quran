import React, { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition >= 150 ? (
    <div
      className='shadow fixed bottom-16 right-16 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer'
      style={{ backgroundColor: '#f36' }}
      onClick={() => window.scrollTo(0, 0)}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        className='h-6 text-white'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M5 10l7-7m0 0l7 7m-7-7v18'
        />
      </svg>
    </div>
  ) : null;
};

export default ScrollToTop;
