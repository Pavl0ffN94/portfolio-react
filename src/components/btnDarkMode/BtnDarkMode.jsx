import { useEffect, memo } from 'react';
import { useLocalStorage } from '../../utils/useLocalStorage';
import detectDarkMode from '../../utils/detectDarkMode';

import sun from './sun.svg';
import moon from './moon.svg';
import './style.css';

const BtnDarkModeImpl = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());

  useEffect(() => {
    if (darkMode === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      const newColorSchem = e.matches ? 'dark' : 'light';
      setDarkMode(newColorSchem);
    });
  }, [setDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode((currenValue) => {
      return currenValue === 'light' ? 'dark' : 'light';
    });
  };

  const btnNormal = 'dark-mode-btn';
  const btnActive = 'dark-mode-btn dark-mode-btn--active';

  return (
    <button
      className={darkMode === 'dark' ? btnActive : btnNormal}
      onClick={toggleDarkMode}>
      <img src={sun} alt='Liht mode' className='dark-mode-btn__icon' />
      <img src={moon} alt='Dark mode' className='dark-mode-btn__icon' />
    </button>
  );
};

export const BtnDarkMode = memo(BtnDarkModeImpl);
