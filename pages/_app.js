import Head from "next/head";
import styles from "../styles/home.module.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      {/* header */}
      <header className={styles.header}>
        <h1>THE FREE TIMES</h1>
        <p>
          <i>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit...
          </i>
        </p>
        <p>
          There is no one who loves pain itself, who seeks after it and wants to
          have it, simply because it is pain..
        </p>
        <ul className={styles.linkBox}>
          <li>
            <a href="">technology</a>
          </li>
          <li>
            <a href="">national</a>
          </li>
          <li>
            <a href="">business</a>
          </li>
          <li>
            <a href="">sports</a>
          </li>
          <li>
            <a href="">world</a>
          </li>
          <li>
            <a href="">politics</a>
          </li>
        </ul>
        <hr />
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer className={styles.footer}>
        <p>
          This is a free app and under active development on <b>GitHub</b>.
          Please star.
        </p>
      </footer>
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
