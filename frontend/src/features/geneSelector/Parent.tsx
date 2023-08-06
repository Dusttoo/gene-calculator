import styles from "./GeneSelector.module.css";
import genes from "../../genes.json";
import Locus from "./Locus";
import { Loci, Parent } from "../../Models/geneSelector";

export default function ParentBox(parent: Parent) {
  return (
    <div className={styles.parentContainer}>
      <h2>{parent.parent} </h2>
      {Object.values(genes).map((locus: Loci) => (
        <div key={locus.genes[0].gene}>
          <Locus
            name={locus.name}
            description={locus.description}
            genes={locus.genes}
          />
        </div>
      ))}
      
    </div>
  );
}
