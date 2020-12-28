import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTheme } from '../Redux/_actions/themeActions';

const useDarkMode = () => {
  const dispatch = useDispatch();
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
    dispatch(setTheme(isDarkTheme));
  }, [isDarkTheme, dispatch]);

  return [isDarkTheme, setIsDarkTheme];
};

export default useDarkMode;
