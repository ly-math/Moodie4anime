import React from "react";
import styles from "../styles/footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.copyright}>
        <p>Developed and Desgined by</p>
        <a href="https://www.linkedin.com/in/ly-math-73ba62244/" target="blank">
          LyMath
        </a>
      </div>
      <p className={styles.jikan_api}>Jikan API</p>
    </div>
  );
}

export default Footer;
