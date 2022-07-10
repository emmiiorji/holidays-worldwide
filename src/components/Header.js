import { FiMenu } from 'react-icons/fi';
import styles from './css/header.module.css';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.hamburger}>
      <FiMenu style={{ color: '#fff', width: '30px', height: '30px' }} />
    </div>
    <div className={styles.headerMain}>
      <h1 className={styles.heading}>Worldwide Holidays</h1>
    </div>
  </header>
);

export default Header;
