import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export const themeControllerSlice = createSlice({
    name: 'themeSelector',
    initialState: 'dark',
    reducers: {
        setCurrentTheme: (state, action) => {
            return action.payload;
        }
    }
});

export const { setCurrentTheme } = themeControllerSlice.actions;
export const selectTheme = (state: RootState) => state.themeController;
export default themeControllerSlice.reducer;
