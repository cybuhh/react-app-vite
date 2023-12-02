import styles from './grid.module.css';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Grid() {
  return (
    <main className={styles['main']}>
      <header className={styles['header']}>
        <h1 className={styles['h1']}>grid layout</h1>
      </header>
      <nav className={styles['nav']}>
        <Link to='/'>index</Link>
        <Link to='some-page'>some-page</Link>
      </nav>
      <article className={styles['article']}>
        <Outlet />
      </article>
    </main>
  );
}
