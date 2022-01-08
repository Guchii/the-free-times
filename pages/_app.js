import Head from "next/head";
import styles from "../styles/home.module.css";
import GithubCorner from "react-github-corner";
import "../styles/globals.css";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [category, setCategory] = useState("technology");
  return (
    <div style={{ width: "100vw" }}>
      {/* header */}
      <header className={styles.header}>
        {/* <h1>THE FREE TIMES</h1> */}
        <img src="/logo.svg" alt="THE FREE TIMES" />
        <p>
          <i>Free to read e-paper with concise articles and many categories</i>
        </p>
        <ul className={styles.linkBox}>
          <li
            className={category === "technology" ? styles.active : undefined}
            onClick={() => setCategory("technology")}
          >
            technology
          </li>
          <li
            className={category === "national" ? styles.active : undefined}
            onClick={() => setCategory("national")}
          >
            national
          </li>
          <li
            className={category === "business" ? styles.active : undefined}
            onClick={() => setCategory("business")}
          >
            business
          </li>
          <li
            className={category === "sports" ? styles.active : undefined}
            onClick={() => setCategory("sports")}
          >
            sports
          </li>
          <li
            className={category === "world" ? styles.active : undefined}
            onClick={() => setCategory("world")}
          >
            world
          </li>
          <li
            className={category === "politics" ? styles.active : undefined}
            onClick={() => setCategory("politics")}
          >
            politics
          </li>
        </ul>
        <div className={styles.misc}>
          <Clock />
          <Covid />
        </div>
        <hr />
      </header>
      <main style={{ overflow: "hidden" }}>
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

const Clock = () => {
  const [time, setTime] = useState("loading time");
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime(date.toString());
    }, 1000);
  }, []);
  return (
    <>
      <span>{time}</span>
    </>
  );
};
const Covid = () => {
  useEffect(() => {}, []);
  return null;
};
export default MyApp;
