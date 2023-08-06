import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import geneReducer from '../features/geneSelector/geneSlice'

export const store = configureStore({
  reducer: {
    genes: geneReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
