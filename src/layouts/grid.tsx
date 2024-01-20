import styles from './grid.module.css';
import Switch from '@mui/material/Switch';
import { useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Grid() {
  const handleOnSwitchChange = useCallback((_event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    console.log('*** new switch event value', checked);
  }, []);

  return (
    <main className={styles['main']}>
      <header className={styles['header']}>
        <h1 className={styles['h1']}>grid layout</h1>
      </header>
      <nav className={styles['nav']}>
        <Link to='/'>index</Link>
        <Link to='some-page'>some-page</Link>
        <Switch onChange={handleOnSwitchChange} classes={{ root: styles['nav__switch'] }} />
      </nav>
      <article className={styles['article']}>
        <Outlet />
      </article>
    </main>
  );
}
