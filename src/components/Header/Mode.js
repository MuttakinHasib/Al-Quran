import React, { useEffect, useState } from 'react';
import ButtonWithIcon from '../Buttons/ButtonWithIcon';
import { light, moon } from '../../assets/Icons';

const Mode = () => {
  const getCurrentTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
  const mqListener = e => {
    setIsDarkTheme(e.matches);
  };

  useEffect(() => {
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
    darkThemeMq.addListener(mqListener);
    return () => darkThemeMq.removeListener(mqListener);
  }, []);

  useEffect(() => {
    isDarkTheme
      ? document.querySelector('html').classList.add('dark')
      : document.querySelector('html').classList.remove('dark');
  }, [isDarkTheme]);

  return (
    <ButtonWithIcon
      name={isDarkTheme ? 'Light' : 'Dark'}
      icon={isDarkTheme ? light : moon}
      onClick={() => setIsDarkTheme(!isDarkTheme)}
      className='mx-5'
    />
  );
};

export default Mode;
