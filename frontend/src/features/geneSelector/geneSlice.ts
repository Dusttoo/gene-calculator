import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface GeneState {
  geneState: string[];
}

const initialState: GeneState = {
  geneState: [],
};

export const geneSlice = createSlice({
  name: "genes",
  initialState,
  reducers: {
    setGeneState(state, action) {
      state.geneState = [...state.geneState, action.payload];
    },
  },
  extraReducers: () => {
  },
});

export const { setGeneState } = geneSlice.actions;
export const selectGeneState = (state: RootState) => state.genes.geneState;

export default geneSlice.reducer;
