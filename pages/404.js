import Link from 'next/link';
import styles from '../styles/NotFound.module.css';

function PageNotFound() {
  return ( 
    <div className={styles.notFound}>
      <div>Page Not Found</div>
      <Link href='/'>Go Home</Link>
    </div>
  );
}

export default PageNotFound;