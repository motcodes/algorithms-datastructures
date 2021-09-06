import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

export const Footer: NextPage = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://twitter.com/motcodes"
        target="_blank"
        rel="noopener noreferrer"
      >
        by @motcodes
      </a>
    </footer>
  );
};
