"client side";
import React, { useState, useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { addGene, removeGene } from "./geneSlice";
import { Gene } from "../../Models/geneSelector";
import styles from "./GeneSelector.module.css";

export default function GeneButton({ name, description, gene, locus }: Gene) {
  // TODO: - Select border does not dynamically update - need to fix
  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    updateSelected()
  }, [selected])
  
  const updateSelected = () => {
        if (!selected) {
          dispatch(removeGene(gene));
        } else {
          dispatch(addGene({gene: gene, locus: locus}));
        }
  };

  return (
    <>
      <button
        onClick={() => setSelected(!selected)}
        className={
          selected ? styles.geneSelectorSelected : styles.geneSelectorButton
        }
      >
        {gene}
      </button>
      {/* Show information on hover */}
      <p className={styles.geneInfo}>
        {name} - {description}
      </p>
    </>
  );
}
