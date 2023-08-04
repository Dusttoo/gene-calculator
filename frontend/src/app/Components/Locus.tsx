import styles from "../page.module.css";
import GeneButton from "./GeneButton";
import { LocusType, Gene } from "../Models/gene";

export default function Locus(locus:LocusType) {
    console.log('test')
  return (
    <div className={styles.locusCard}>
      <h2>{locus.name} Locus</h2>
      <p>{locus.description}</p>
      <div className={styles.geneSelectorContainer}>
        {locus.genes.map((trait:Gene) => (
          <div key={trait.name} className={styles.geneSelector}>
            <GeneButton gene={trait} />
          </div>
        ))}
      </div>
    </div>
  );
}

