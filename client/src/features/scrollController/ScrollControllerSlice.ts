import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import ReactGA from 'react-ga4';

export const scrollControllerSlice = createSlice({
    name: 'scrollControllerSelector',
    initialState: {
        navSection: 'aboutMeSection',
        scrollSection: 'aboutMeSection'
    },
    reducers: {
        setNav: (state, action) => {
            ReactGA.event({ category: 'NavBar', action: action.payload });
            state.navSection = action.payload;
        },
        setScroll: (state, action) => {
            state.scrollSection = action.payload;
        }
    }
});

// Actions
export const { setScroll, setNav } = scrollControllerSlice.actions;
// Selectors
export const getNavSelector = (state: RootState) => state.scrollController.navSection;
export const getScrollSelector = (state: RootState) => state.scrollController.scrollSection;
// Reducer
export default scrollControllerSlice.reducer;
