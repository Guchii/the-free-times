import axios from "axios";
import { v4 } from "uuid";
import styles from "../styles/index.module.css";

export default function Home({ data }) {
  return (
    <>
      <div className={`${styles.mainGrid} ${styles.maxWidth}`}>
        {data.map((dat) => (
          <div className={styles.article} key={v4()}>
            <h2>{dat.title}</h2>
            <p>{dat.content}</p>
            <a href={dat.readMoreUrl} target="_blank" rel="noreferrer">
              Read more...
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const {
    data: { data },
  } = await axios.get(
    "https://inshortsapi.vercel.app/news?category=technology"
  );
  return {
    props: {
      data,
    },
    revalidate: 60,
  };
};
