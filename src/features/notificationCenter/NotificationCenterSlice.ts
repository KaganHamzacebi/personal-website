import {  createSlice } from '@reduxjs/toolkit';

const initialState: ({isUp: boolean, duration: number}) = {
    isUp: false,
    duration: 1

};

export const notificationCenterSlice = createSlice({
    name: 'notificationCenterSelector',
    initialState,
    reducers: {
        setNotification: (state, action) => {
            state.isUp = true;
            setTimeout(() => state.isUp = false,
                action.payload ? action.payload * 1000 : state.duration * 1000);
        }
    },
});

export const { setNotification } = notificationCenterSlice.actions
export default notificationCenterSlice.reducer;
