import styles from "./GeneSelector.module.css";
import GeneButton from "./GeneButton";
import { Gene } from "../../Models/geneSelector";
import { Loci } from "../../Models/geneSelector";

export default function Locus({ name, description, genes }: Loci) {
  // Add grouping here for sending to api
  // Add handling for not allowing multiple genes on a locus be selected
  // const selectedGenes: string[] = []
  return (
    <div className={styles.locusCard}>
      <h2>{name} Locus</h2>
      <p>{description}</p>
      <div className={styles.geneSelectorContainer}>
        {genes.map((trait: Gene) => (
          <div key={trait.gene} className={styles.geneSelector}>
            <GeneButton
              name={trait.name}
              description={trait.description}
              gene={trait.gene}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
