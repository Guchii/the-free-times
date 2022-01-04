/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { v4 } from "uuid";
import styles from "../styles/index.module.css";
import { useEffect, useState } from "react";

const prefix = process.env.NEXT_PUBLIC_ASSET || "";

const Loading = () => (
  <div
    style={{
      margin: "10rem auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <img src={prefix + "/rocket.gif"} alt="loading" />
    loading the paper
  </div>
);

export default function Home({ category: category }) {
  const [arr, setArr] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async (category) => {
      setLoading(true);
      const {
        data: { data },
      } = await axios.get(
        `https://inshortsapi.vercel.app/news?category=${category}`
      );
      setArr(data);
      setLoading(false);
    })(category);
  }, [category]);
  return loading ? <Loading /> : <Grid data={arr} />;
}

const Grid = ({ data }) => {
  return (
    <div className={`${styles.mainGrid} ${styles.maxWidth}`}>
      {data.map((dat) => (
        <div className={styles.article} key={v4()}>
          <h2>{dat.title}</h2>
          <p>{dat.content}</p>
          <a
            href={dat.readMoreUrl}
            target="_blank"
            rel="noreferrer"
            className={styles.button}
          >
            Read more...
          </a>
        </div>
      ))}
    </div>
  );
};
