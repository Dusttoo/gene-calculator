import { useState } from "react";
import styles from "./GeneSelector.module.css";
import GeneButton from "./GeneButton";
import { Gene } from "../../Models/geneSelector";
import { Loci } from "../../Models/geneSelector";

export default function Locus({ name, description, genes }: Loci) {
  // Add handling for not allowing multiple genes on a locus be selected
  // const selectedGenes: string[] = []
  const [maxSelected, setMaxSelected] = useState(false);
  return (
    <div className={styles.locusCard}>
      <h2>{name} Locus</h2>
      <p>{description}</p>
      <div className={styles.geneSelectorContainer}>
        {genes.map((trait: Gene) => (
          <div key={genes.indexOf(trait)} className={styles.geneSelector}>
            <GeneButton gene={trait} setMaxSelected={setMaxSelected} maxSelected={maxSelected} />
          </div>
        ))}
      </div>
    </div>
  );
}
