import { useRouter } from 'next/router';
import styles from '../../styles/Profile.module.css';

function Profile() {
  const router = useRouter();
  const { username } = router.query;

  return ( 
    <div className={styles.profile}>Hello {username}!</div>
  );
}

export default Profile;