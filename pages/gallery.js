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
          <script src="https://scripts.sirv.com/sirvjs/v3/sirv.js" data-components="image" data-options="threshold:100"></script>
        </Head>
        <Header />
        <div className={styles.main}>
          <div className={styles.card}>
          <img class="Sirv" data-src="https://patdalcia.sirv.com/Images/pats_headshot.JPG" alt="" />
          </div>

          <div className={styles.card}>
          <img class="Sirv" data-src="https://patdalcia.sirv.com/Images/DSC-0072.jpeg" alt="" />
          </div>

          <div className={styles.break}/>

          <div className={styles.card}>
          <img class="Sirv" data-src="https://patdalcia.sirv.com/Images/bandana.JPG" alt="" />
          </div>

          <div className={styles.card}>
          <img class="Sirv" data-src="https://patdalcia.sirv.com/Images/Headshot.jpeg" alt="" />  
          </div>

          <div className={styles.break}/>

          <div className={styles.card}>
          <img class="Sirv" data-src="https://patdalcia.sirv.com/Images/IMG_0498.jpg" alt="" />
          </div>

          <div className={styles.card}>
          <img class="Sirv" data-src="https://patdalcia.sirv.com/Images/twoGirls.JPG" alt="" />
          </div>

          <div className={styles.break}/>

          <div className={styles.card}>
          <img class="Sirv" data-src="https://patdalcia.sirv.com/Images/jazmine_rocks.JPG" alt="" />
          </div>

          <div className={styles.card}>
          <img class="Sirv" data-src="https://patdalcia.sirv.com/Images/butterfly.JPG" alt="" />
          </div>

          <div className={styles.break}/>

          <div className={styles.card}>
          <img class="Sirv" data-src="https://patdalcia.sirv.com/Images/beach.JPG" alt="" />  
          </div>
          
          <div className={styles.card}>
          <img class="Sirv" data-src="https://patdalcia.sirv.com/Images/grad_pic.JPG" alt="" />
          </div>

          <div className={styles.break}/>

          <div className= {styles.card}>
          <img class="Sirv" data-src="https://patdalcia.sirv.com/Images/DSC_0230.jpg" alt="" />
          </div>

          <div className= {styles.card}>
          <img class="Sirv" data-src="https://patdalcia.sirv.com/Images/hero-image.JPG" alt="" />
          </div>

        </div> 
      </div>
    </div>
  );
}
