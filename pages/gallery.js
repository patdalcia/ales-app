import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/Gallery.module.css";

export default function Gallery() {
  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>GALLERY</title>
        </Head>
        <Header />
        <main className={styles.main}>
          <div className={styles.card}>
            <img src="/pats_headshot.JPG" />
          </div>
        </main>
      </div>
    </div>
  );
}
