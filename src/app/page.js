"use client";

import React from "react";
import styles from "./page.module.css";
import { Container, Row } from "react-bootstrap";
import { Cards } from "../components/cards";

export default function Home() {
  return (
    <main className={styles.main}>
      <Container className={styles.content}>
        <div className={styles.contentHeader}>
          <img src="../img/fiap.png" width="160px"></img>
          <h3>Trabalho de ReactJS</h3>
        </div>
        <div className={styles.contentBody}>
          <Container className="px-4 py-4">
            <Row>
              <Cards />
            </Row>
          </Container>
        </div>
      </Container>
    </main>
  );
}
