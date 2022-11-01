import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

export const defaultLanguage = 'en';

const initialState: { minimized: boolean } = {
  minimized: false
};

export const headerControllerSlice = createSlice({
  name: 'headerSelector',
  initialState,
  reducers: {
    setMinimize: (state, action) => {
      state.minimized = action.payload;
    }
  }
});

export const { setMinimize } = headerControllerSlice.actions;
export const selectHeader = (state: RootState) => state.headerController;
export default headerControllerSlice.reducer;
