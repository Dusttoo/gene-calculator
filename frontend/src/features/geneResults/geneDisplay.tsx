import { Results } from "../../Models/geneSelector";
import styles from './GeneResults.module.css'

export default function GeneDisplay(results: Results) {
  return (
    <div className={styles.resultContainer}>
      {results.results.map((value) => {
        return (
          <>
            <div
            className={styles.percentageContainer}
              style={{ width: `${value.value * 100}%`}}
            >
                {value.value * 100} % chance of {value.gene}
            </div>
          </>
        );
      })}
    </div>
  );
}
