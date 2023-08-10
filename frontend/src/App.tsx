import { useState } from "react";
import Head from "next/head";
import { useAppSelector } from "./app/hooks";
import { selectGeneState } from "./features/geneSelector/geneSlice";
import styles from "./app.module.css";
import ParentBox from "./features/geneSelector/Parent";
import {
  GeneResults,
  SelectedGenes,
  SelectedLoci,
} from "./Models/geneSelector";
import GeneResultsList from "./features/geneResults/geneResults";

function App() {
  const geneState = useAppSelector(selectGeneState);
  const [geneResults, setGeneResults] = useState<GeneResults>({});
  const [results, setResults] = useState(false);

  const handleSubmit = async () => {
    const loci: SelectedLoci = {};
    const listOfGenes: string[][] = [];
    for (let i = 0; i < geneState.length; i++) {
      const locus: SelectedGenes = geneState[i];
      if (loci[locus.locus]) {
        loci[locus.locus] = [...loci[locus.locus], geneState[i].gene];
      } else {
        loci[locus.locus] = [geneState[i].gene];
      }
    }
    Object.values(loci).forEach((genes) => {
      listOfGenes.push(genes);
    });

    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/gene-calculator`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(listOfGenes),
        }
      );
      const data = await res.json();
      console.log(data);
      setGeneResults(data);
      setResults(true);
    } catch (err) {
      console.log(err);
    }

    //Make call to server to get results
    console.log(geneResults);
  };
  console.log(results);

  return (
    <div>
      {/* <Head>
        <title>Geney</title>
      </Head> */}
      <div className="logoContainer"></div>

      {results ? (
        <div>
          {/* <GeneResultsList results={geneResults} /> */}
          {Object.keys(geneResults).map((key) => {
            const value = geneResults[key];
            return (
              <div>
                <p>
                  {key} : {value}
                </p>
              </div>
            );
          })}
          <button onClick={() => setResults(false)}>Try again</button>
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default App;
