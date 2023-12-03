import reactLogo from '../assets/react.svg';
import Loader from '../components/loader';
import { increment, selectCount, selectStatus, incrementAsync } from '../features/counter-slice';
import { useAppSelector, useAppDispatch } from '../hooks/use-redux';
import styles from './index.module.css';
import viteLogo from '/vite.svg';
import classNames from 'classnames';

export default function CounterRedux() {
  const count = useAppSelector(selectCount);
  const status = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();

  const handleOnClick = () => dispatch(increment());
  const handleOnClickAsync = () => dispatch(incrementAsync(1));

  const asyncCounterValue = status === 'loading' ? <Loader /> : count;

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
        <br />
        <br />
        <button className={styles['button']} onClick={handleOnClickAsync}>
          count (async) is {asyncCounterValue}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p>Click on the Vite and React logos to learn more</p>
    </section>
  );
}
