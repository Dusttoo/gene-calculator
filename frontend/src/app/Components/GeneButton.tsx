"use client";
import { useState } from "react";
import { Gene } from "../Models/gene";
import styles from "../page.module.css";

export default function GeneButton({name, description, gene}: Gene) {
  const [selected, setSelected] = useState(false);
  const updateSelected = () => {
    setSelected(!selected)
    console.log(gene)
  }
  return (
    <>
      <button
        onClick={() => updateSelected()}
        className={
          selected ? styles.geneSelectorSelected : styles.geneSelectorButton
        }
      >
        {gene}
      </button>
      {/* Show information on hover */}
      <p className={styles.geneInfo}>
        {name} - {description}
      </p>
    </>
  );
}
