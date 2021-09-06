import type { FunctionComponent } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { SortingDemo } from '../components/Sorting';
import styles from '../styles/Home.module.css';

export default function SortingAlogrithms() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sorting | Algorithms and Data-Structures</title>
        <meta
          name="description"
          content="This is a collection of algorithms and datastructures in typescript"
        />
        <link
          rel="icon"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/crossed-swords_2694-fe0f.png"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Sorting</h1>

        <p className={styles.description}>
          a collection by <a href="http://twitter.com/motcodes">@motcodes</a>
        </p>

        <div className={styles.grid}>
          <SortingDemo />
        </div>
      </main>
    </div>
  );
}
