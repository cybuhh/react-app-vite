import reactLogo from '../assets/react.svg';
import styles from './index.module.css';
import viteLogo from '/vite.svg';
import Button from '@mui/material/Button';
import classNames from 'classnames';
import { useState } from 'react';

export default function Index() {
  const [count, setCount] = useState(0);
  const handleOnClick = () => setCount((count) => count + 1);

  return (
    <section>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className={styles['logo']} alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className={classNames(styles['logo'], styles['react'])} alt='React logo' />
        </a>
      </div>
      <h1 className={styles['header']}>Vite + React</h1>
      <div>
        <Button variant='contained' onClick={handleOnClick}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p>Click on the Vite and React logos to learn more</p>
    </section>
  );
}
