import Head from "next/head";
import styles from "../styles/home.module.css";
import GithubCorner from "react-github-corner";
import "../styles/globals.css";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [category, setCategory] = useState("technology");
  return (
    <div>
      {/* header */}
      <header className={styles.header}>
        <h1>THE FREE TIMES</h1>
        <p>
          <i>Free to read e-paper with concise articles and many categories</i>
        </p>
        <ul className={styles.linkBox}>
          <li onClick={() => setCategory("technology")}>technology</li>
          <li onClick={() => setCategory("national")}>national</li>
          <li onClick={() => setCategory("business")}>business</li>
          <li onClick={() => setCategory("sports")}>sports</li>
          <li onClick={() => setCategory("world")}>world</li>
          <li onClick={() => setCategory("politics")}>politics</li>
        </ul>
        <hr />
      </header>
      <main>
        <Component {...pageProps} {...{ category, setCategory }} />
      </main>
      <footer className={styles.footer}>
        <p>
          This is a free app and under active development on <b>GitHub</b>.
          Please star.
        </p>
      </footer>
      <GithubCorner
        href="https://github.com/Guchii/the-free-times"
        octoColor="#f3dfc1"
        bannerColor="#1a1c1a"
      />
      <Head>
        <title>
          Free to read e-paper. Stay updated with the latest news. The free
          times
        </title>
      </Head>
    </div>
  );
}

export default MyApp;
