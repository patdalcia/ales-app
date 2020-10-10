import Head from "next/head";
import Header from "../components/header";
import styles from "../styles/About.module.css";
import Footer from "../components/footer";

export default function About() {
  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>ABOUT</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className={styles.main}>
          <div className={styles.column}></div>
          <div className={styles.column}>
            <div>
              <img
                src="/profile.jpg"
                className={`${styles.headerHomeImage} ${styles.borderCircle}`}
              />
            </div>
            <p>
              Have a section dedicated to your contact information, especially
              if you’re looking for customers. Make it obvious where this
              section can be found and make the process of contacting you
              effortless. Similarly, be sure to include social media on your
              site. This will give visitors another avenue for following,
              contacting, and interacting with you. It will also show that you
              have a strong online presence, which will come across as
              professional and trustworthy.
            </p>
          </div>
          <div className={styles.column}></div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
