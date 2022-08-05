import api from '../utils/api';
import Image from 'next/image';
import styles from '../../styles/Users.module.css';

function Users({users}) {
  const renderUsers = () => {
    const output = users.map((user) => {
      return (
        <div className={styles.user} key={user.login.uuid}>
          <Image
            src={user.picture.large}
            alt='Picture of the user'
            width={80}
            height={80}
          />
          <h4>Name: {user.name.first} {user.name.last}</h4>
          <p>Email: {user.email}</p>
        </div>
      )
    })
    return output;
  };

  return ( 
    <div className={styles.userContainer}>{renderUsers()}</div>
  );
}

// export const getStaticProps = async () => {
//   const { results } = await api.getUsers();
//   return {
//     props: {
//       users: results,
//       //revalidate: 20, // 每 20 秒就會 revalidate 一次頁面
//     },
//   };
// };

export const getServerSideProps = async () => {
  const { results } = await api.getUsers();
  return {
    props: {
      users: results,
    },
  };
};

export default Users;