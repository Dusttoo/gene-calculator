import { GeneResults } from "../../Models/geneSelector";
import GeneDisplay from "./geneDisplay";
import styles from "./GeneResults.module.css";


export default function GeneResultsList(results: GeneResults) {
  const lociResults = Object.keys(results.results);
  return (
    <div className={styles.resultsList}>
      {lociResults.map((key) => {
          return (
            <>
              <div className={styles.locusHeader}>
                <h3>{key.toUpperCase()} Locus</h3>
              </div>
              <GeneDisplay results={results.results[key]} />
            </>
          );
        })
      }
    </div>
  );
}
