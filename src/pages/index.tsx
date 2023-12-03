import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import styles from './index.module.css';
import classNames from 'classnames';

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
        <button className={styles['button']} onClick={handleOnClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p>Click on the Vite and React logos to learn more</p>
    </section>
  );
}
