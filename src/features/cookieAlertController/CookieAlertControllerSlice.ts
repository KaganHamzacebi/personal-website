import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';

export const defaultLanguage: string = "en";


const initialState: ({ show: boolean, accepted: boolean, delay: number }) = {
    show: false,
    accepted: false,
    delay: 2000
}

export const cookieAlertControllerSlice = createSlice({
    name: 'cookieAlertSelector',
    initialState,
    reducers: {
        showCookieAlert: (state, action) => {
            state.show = action.payload;
        },
        acceptCookie: (state) => {
            state.accepted = true;
        },
    },
});

export const {showCookieAlert, acceptCookie} = cookieAlertControllerSlice.actions;
export const selectCookieAlerter = (state: RootState) => state.cookieAlertController
export default cookieAlertControllerSlice.reducer;
