"client side"
import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setGeneState, selectGeneState } from "./geneSlice";
import { Gene } from "../../Models/geneSelector";
import styles from "./GeneSelector.module.css";

export default function GeneButton({name, description, gene}: Gene) {
  const geneState = useAppSelector(selectGeneState);
  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState(false);
  const updateSelected = () => {
    setSelected(!selected)
    dispatch(setGeneState(gene));
    console.log(gene)
  }
  return (
    <>
      <button
        onClick={() => updateSelected()}
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
