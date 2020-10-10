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
          <script src="https://scripts.sirv.com/sirv.js"></script>
        </Head>
        <Header />
        <div className={styles.main}>
          <div className={styles.card}>
          <img class="Sirv" data-src="https://aterichn.sirv.com/Images/pats_headshot.JPG?w=800" alt="" />
          </div>

          <div className={styles.card}>
          <img class="Sirv" data-src="https://aterichn.sirv.com/Images/DSC-0072.jpeg?w=800" alt="" />
          </div>

          <div className={styles.break}/>

          <div className={styles.card}>
          <img class="Sirv" data-src="https://aterichn.sirv.com/Images/IMG_0498.jpg?w=800" alt="" />
          </div>

          <div className={styles.card}>
          <img class="Sirv" data-src="https://aterichn.sirv.com/Images/hero-image.JPG?w=800" alt="" />  
          </div>

          <div className={styles.break}/>

          <div className={styles.card}>
          <img class="Sirv" data-src="https://aterichn.sirv.com/Images/bandana.JPG?w=800" alt="" />
          </div>

          <div className={styles.card}>
          <img class="Sirv" data-src="https://aterichn.sirv.com/Images/twoGirls.JPG?w=800" alt="" />
          </div>

          <div className={styles.break}/>

          <div className={styles.card}>
          <img class="Sirv" data-src="https://aterichn.sirv.com/Images/jazmine_rocks.JPG?w=800" alt="" />
          </div>

          <div className={styles.card}>
          <img class="Sirv" data-src="https://aterichn.sirv.com/Images/butterfly.JPG?w=800" alt="" />
          </div>

          <div className={styles.break}/>

          <div className={styles.card}>
          <img class="Sirv" data-src="https://aterichn.sirv.com/Images/beach.JPG?w=800" alt="" />  
          </div>
          
          <div className={styles.card}>
          <img class="Sirv" data-src="https://aterichn.sirv.com/Images/grad_pic.JPG?w=800" alt="" />
          </div>

          <div className={styles.break}/>

          <div className= {styles.card}>
          <img class="Sirv" data-src="https://aterichn.sirv.com/Images/DSC_0230.jpg?w=800" alt="" />
          </div>

        </div> 
      </div>
    </div>
  );
}
