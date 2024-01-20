// import useLocalStorage from '../hooks/useLocalStorage';
import ThemeContext from '../components/themeContext';
import styles from './grid.module.css';
import Link from '@mui/material/Link';
import Switch from '@mui/material/Switch';
import { useCallback, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';

export default function Grid() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleOnSwitchChange = useCallback(
    (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
      setTheme(checked);
    },
    [setTheme]
  );

  return (
    <main className={styles['main']}>
      <header className={styles['header']}>
        <h1 className={styles['h1']}>grid layout</h1>
      </header>
      <nav className={styles['nav']}>
        <Link component={RouterLink} to='/'>
          index
        </Link>
        <Link component={RouterLink} to='some-page'>
          some-page
        </Link>
        <Link component={RouterLink} to='counter-redux'>
          counter-redux
        </Link>
        <Switch checked={theme === 'dark'} onChange={handleOnSwitchChange} classes={{ root: styles['nav__switch'] }} />
      </nav>
      <article className={styles['article']}>
        <Outlet />
      </article>
    </main>
  );
}
