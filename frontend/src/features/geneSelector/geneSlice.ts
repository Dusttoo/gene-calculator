import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { SelectedGenes } from "../../Models/geneSelector";

export interface GeneState {
  geneState: SelectedGenes[];
}

const initialState: GeneState = {
  geneState: [],
};

export const geneSlice = createSlice({
  name: "genes",
  initialState,
  reducers: {
    addGene(state, action) {
      state.geneState = [...state.geneState, action.payload];
    },
    removeGene(state, action) {
      state.geneState.splice(state.geneState.indexOf(action.payload), 1);
    },
    resetGene(state) {
      state.geneState = []
    }
  },
  extraReducers: () => {},
});

export const { addGene, removeGene, resetGene } = geneSlice.actions;
export const selectGeneState = (state: RootState) => state.genes.geneState;

export default geneSlice.reducer;
