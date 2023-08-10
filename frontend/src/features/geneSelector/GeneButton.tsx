"client side";
import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { addGene, removeGene } from "./geneSlice";
import { GeneButtonProps } from "../../Models/geneSelector";
import styles from "./GeneSelector.module.css";
import { useAppSelector } from "../../app/hooks";
import { selectGeneState } from "../../features/geneSelector/geneSlice";

export default function GeneButton({gene, setMaxSelected, maxSelected}: GeneButtonProps) {
  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const geneState = useAppSelector(selectGeneState);

  const updateSelected = () => {
    console.log(geneState);

    setSelected(!selected);

    if (!selected && !maxSelected) {
      dispatch(addGene({ gene: gene.gene, locus: gene.locus }));
    } else {
      dispatch(removeGene(gene));
    }
    setMaxSelected(!maxSelected);

  };

  return (
    <>
      <button
        onClick={() => updateSelected()}
        onMouseEnter={() => setShowDetails(true)}
        onMouseLeave={() => setShowDetails(false)}
        className={
          maxSelected && selected ? styles.geneSelectorSelected : styles.geneSelectorButton
        }
      >
        {gene.gene}
      </button>
      {/* Show information on hover */}
      <div className={showDetails ? styles.geneInfo : styles.geneInfoDisabled}>
        <span className={styles.geneInfoText}>
          {gene.name} - {gene.description}
        </span>
      </div>
    </>
  );
}
