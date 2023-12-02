import styles from './grid.module.css'
import { Link } from 'react-router-dom';

export default function grid() {
    return <div className={styles['grid']}>
        this is grid
        <Link to='/'>back to index</Link>
    </div>;
}