import styles from "./GeneSelector.module.css";
import genes from "../../genes.json";
import Locus from "./Locus";
import { Loci, LocusData, Parent } from "../../Models/geneSelector";

export default function ParentBox(parent: Parent) {
  const locusData: LocusData = {locusTypes: [...genes ]};

  return (
    <div className={styles.parentContainer}>
      <h2>{parent.parent} </h2>
      {locusData.locusTypes.map((locus: Loci) => {
        return (
          <div key={Object.values(genes).indexOf(locus)}>
            <Locus
              name={locus.name}
              description={locus.description}
              genes={locus.genes}
            />
          </div>
        );

})}
      
    </div>
  );
}
