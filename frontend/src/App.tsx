import React from 'react';
import styles from './app.module.css';
import ParentBox from "./features/geneSelector/Parent";
import { useState } from "react";


function App() {
  const [genes_list, setGenesList] = useState([]);

  return (
    <main className={styles.main}>
      <h1 className={styles.header}>Geney</h1>
      <div className={styles.locusContainer}>
        <ParentBox parent="Sire" />
        <ParentBox parent="Dam" />
      </div>
    </main>
  );
}

export default App;
