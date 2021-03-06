import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { Footer } from '../components/Footer';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Algorithms and Data-Structures</title>
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
        <h1 className={styles.title}>Algorithms and Data-Structures</h1>

        <p className={styles.description}>
          a collection by <a href="http://twitter.com/motcodes">@motcodes</a>
        </p>

        <div className={styles.grid}>
          <Link href="/sorting-alogrithms/">
            <a className={styles.card}>
              <h2>Sorting &rarr;</h2>
              <p>
                There are various Algorithms that can be used to arrange data in
                an ordered way.
              </p>
            </a>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
