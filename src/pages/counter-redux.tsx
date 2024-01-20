import reactLogo from '../assets/react.svg';
import Loader from '../components/loader';
import { increment, selectCount, selectStatus, incrementAsync } from '../features/counter-slice';
import { useAppSelector, useAppDispatch } from '../hooks/useRedux';
import styles from './index.module.css';
import viteLogo from '/vite.svg';
import Button from '@mui/material/Button';
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
        <Button variant='contained' onClick={handleOnClick}>
          count is {count}
        </Button>
        <br />
        <br />
        <Button variant='contained' onClick={handleOnClickAsync}>
          count (async) is {asyncCounterValue}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p>Click on the Vite and React logos to learn more</p>
    </section>
  );
}
