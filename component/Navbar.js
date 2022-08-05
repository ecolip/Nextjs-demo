import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  return ( 
    <div className={styles.navbar}>
      <div className={styles.item}>
        <Link href='/'>Home</Link>
      </div>
      <div className={styles.item}>
        <Link href='/about'>About</Link>
      </div>
      <div className={styles.item}>
        <Link href='/profile'>Profile</Link>
      </div>
      <div className={styles.item}>
        <Link href='/users'>Users</Link>
      </div>
    </div>
  );
}

export default Navbar;