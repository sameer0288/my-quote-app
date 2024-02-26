
import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Quote App</h1>
      <nav className={styles.navigation}>
        <Link href="/quotes" style={{textDecoration:"none"}}>
          <div className={styles.navLink}>Quotes</div>
        </Link>{' '}
        |{' '}
        <Link href="/proverbs" style={{textDecoration:"none"}}>
          <div className={styles.navLink}>Proverbs</div>
        </Link>{' '}
        |{' '}
        <Link href="/dialogues" style={{textDecoration:"none"}}>
          <div className={styles.navLink}>Dialogues</div>
        </Link>
      </nav>
    </div>
  );
};

export default Home;
