import React, {useEffect, useState} from "react";
import { useAppSelector } from "./app/hooks";
import {
  selectGeneState,
} from "./features/geneSelector/geneSlice";
import styles from "./app.module.css";
import ParentBox from "./features/geneSelector/Parent";
import { SelectedGenes, SelectedLoci } from "./Models/geneSelector";
import GeneyLogo from "./assets/geneyLogo";
// import { LogoStyles } from "./Models/logoStyles";

function App() {
  const geneState = useAppSelector(selectGeneState);
  const [windowDimensions, setWindowDimensions] = useState({height: 0, width: 0})
  // const logoStyle: LogoStyles = {
  //   height: "820",
  //   width: "462",
  //   mainColor: "#1f3a68",
  //   secondaryColor: "#4eb1cb",
  //   accentColor: "#9bb5bc",
  // };
  useEffect(() => {
  const dimensions = getWindowDimensions()
  setWindowDimensions(dimensions)

  }, [])
  

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
    //  console.log(listOfGenes)

  };

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  console.log(windowDimensions)

  return (
    <>
      <div className="logoContainer">
        {/* <GeneyLogo
          height={windowDimensions.height}
          width={windowDimensions.width}
          mainColor="#1f3a68"
          secondaryColor="#4eb1cb"
          accentColor="#9bb5bc"
        /> */}
      </div>

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
    </>
  );
}

export default App;
