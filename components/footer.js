import styles from "../styles/Footer.module.css";

export default function Header() {
  return (
    <footer className={styles.footer}>
      
      <a href="https://www.instagram.com/_alesphotos/">
        <img src="/instagram_Icon.png"/>
      </a>
    <a href="https://twitter.com/">
      <img src="/twitter_Icon.png" />
    </a>
    <a href="https://www.facebook.com/">
    <img src="/facebook_Icon.png" />
    </a>
    </footer>
  );
}
