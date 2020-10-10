import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/Gallery.module.css";
<script src="https://scripts.sirv.com/sirv.js"></script>

export default function Gallery() {
  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>GALLERY</title>
        </Head>
        <Header />
        <div className={styles.main}>
          <div className={styles.card}>
          <img src="https://aterichn.sirv.com/Images/pats_headshot.JPG?w=800" width="800" height="533" srcset="https://aterichn.sirv.com/Images/pats_headshot.JPG?w=800 1x, https://aterichn.sirv.com/Images/pats_headshot.JPG?w=1600 2x" alt="" />
          </div>

          <div className={styles.card}>
          <img src="https://aterichn.sirv.com/Images/DSC-0072.jpeg?w=800" width="800" height="531" srcset="https://aterichn.sirv.com/Images/DSC-0072.jpeg?w=800 1x, https://aterichn.sirv.com/Images/DSC-0072.jpeg?w=1600 2x" alt="" />
          </div>

          <div className={styles.break}/>

          <div className={styles.card}>
          <img src="https://aterichn.sirv.com/Images/bandana.JPG?w=800" width="800" height="533" srcset="https://aterichn.sirv.com/Images/bandana.JPG?w=800 1x, https://aterichn.sirv.com/Images/bandana.JPG?w=1600 2x" alt="" />
          </div>

          <div className={styles.card}>
          <img src="https://aterichn.sirv.com/Images/beach.JPG?w=800" width="800" height="531" srcset="https://aterichn.sirv.com/Images/beach.JPG?w=800 1x, https://aterichn.sirv.com/Images/beach.JPG?w=1600 2x" alt="" />
          </div>

          <div className={styles.break}/>

          <div className={styles.card}>
          <img src="https://aterichn.sirv.com/Images/grad_pic.JPG?w=800" width="800" height="568" srcset="https://aterichn.sirv.com/Images/grad_pic.JPG?w=800 1x, https://aterichn.sirv.com/Images/grad_pic.JPG?w=1600 2x" alt="" />
          </div>

          <div className={styles.card}>
          <img src="https://aterichn.sirv.com/Images/twoGirls.JPG?w=800" width="800" height="568" srcset="https://aterichn.sirv.com/Images/twoGirls.JPG?w=800 1x, https://aterichn.sirv.com/Images/twoGirls.JPG?w=1600 2x" alt="" />
          </div>

          <div className={styles.break}/>

          <div className={styles.card}>
          <img src="https://aterichn.sirv.com/Images/jazmine_rocks.JPG?w=800" width="800" height="533" srcset="https://aterichn.sirv.com/Images/jazmine_rocks.JPG?w=800 1x, https://aterichn.sirv.com/Images/jazmine_rocks.JPG?w=1600 2x" alt="" />
          </div>

        </div> 
      </div>
    </div>
  );
}
