import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';

const initialState: ({ active: boolean }) = {
    active: false
}

export const loadingControllerSlice = createSlice({
    name: 'loadingSelector',
    initialState,
    reducers: {
        setLoadingActive: (state, action) => {
            state.active = action.payload
        }
    },
});

export const {setLoadingActive} = loadingControllerSlice.actions;
export const selectLoading = (state: RootState) => state.loadingController;
export default loadingControllerSlice.reducer;
