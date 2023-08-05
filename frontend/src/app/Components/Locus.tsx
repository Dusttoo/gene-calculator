import styles from "../page.module.css";
import GeneButton from "./GeneButton";
import { Gene } from "../Models/gene";
import {Loci} from "../Models/locus"

export default function Locus({name, description, genes}: Loci) {
    console.log('test')
  return (
    <div className={styles.locusCard}>
      <h2>{name} Locus</h2>
      <p>{description}</p>
      <div className={styles.geneSelectorContainer}>
        {genes.map((trait:Gene) => (
          <div key={trait.gene} className={styles.geneSelector}>
            <GeneButton name={trait.name} description={trait.description} gene={trait.gene} />
          </div>
        ))}
        {name}
      </div>
    </div>
  );
}

