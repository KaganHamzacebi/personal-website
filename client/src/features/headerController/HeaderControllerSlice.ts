import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';

export const defaultLanguage: string = "en";


const initialState: ({ minimized: boolean }) = {
    minimized: false

}

export const headerControllerSlice = createSlice({
    name: 'headerSelector',
    initialState,
    reducers: {
        setMinimize: (state, action) => {
            state.minimized = action.payload;
        }
    },
});

export const {setMinimize} = headerControllerSlice.actions;
// @ts-ignore
export const selectHeader = (state: RootState) => state.headerController
export default headerControllerSlice.reducer;
