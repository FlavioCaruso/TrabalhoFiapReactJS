import React from "react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <img src="../img/fiap.png" width="160px"></img>
          <h3>Trabalho de ReactJS</h3>
        </div>
        <div className={styles.contentBody}>
          <div className={styles.contentCard}></div>
        </div>
      </div>
    </main>
  );
}
