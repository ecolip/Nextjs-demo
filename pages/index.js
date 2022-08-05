import Head from 'next/head';
import Image from 'next/image';
import profilePic from '../imgs/profile.jpg';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Demo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>Home page</h3>
        <Image
        src={profilePic}
        alt="Picture of the author"
        width={400}
        height={300}
        />
      </main>
    </div>
  )
}