import {  createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export const scrollControllerSlice = createSlice({
    name: 'scrollControllerSelector',
    initialState: 'aboutMeSection',
    reducers: {
        setScroll: (state, action) => {
            return action.payload
        }
    },
});

export const { setScroll } = scrollControllerSlice.actions
export const getScrollSelector = (state: RootState) => state.scrollController;
export default scrollControllerSlice.reducer;

// @ts-ignore
export const scrollTo = (e) => {
    e.current.scrollIntoView({
        behavior: "smooth"
    });
};
