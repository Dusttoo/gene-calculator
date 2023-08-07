import React from "react";
import { useAppSelector } from "./app/hooks";
import {
  selectGeneState,
} from "./features/geneSelector/geneSlice";
import styles from "./app.module.css";
import ParentBox from "./features/geneSelector/Parent";
import { SelectedGenes, SelectedLoci } from "./Models/geneSelector";

function App() {
  const geneState = useAppSelector(selectGeneState);

  const handleSubmit = () => {
    const loci: SelectedLoci = {};
    const listOfGenes: string[][] = []
    for (let i = 0; i < geneState.length; i++) {
      const locus: SelectedGenes = geneState[i];
      if (loci[locus.locus]) {
        loci[locus.locus] = [...loci[locus.locus], geneState[i].gene];
      } else {
        loci[locus.locus] = [geneState[i].gene];
      }
    }
     Object.values(loci).forEach((genes) => {
        listOfGenes.push(genes)
     })

     //Make call to server to get results
     console.log(listOfGenes)

  };

  return (
    <main className={styles.main}>
      <h1 className={styles.header}>Geney</h1>
      <div className={styles.locusContainer}>
        <ParentBox parent="Sire" />
        <ParentBox parent="Dam" />
      </div>
      <div>
        <button onClick={() => handleSubmit()}>Submit</button>
      </div>
    </main>
  );
}

export default App;
