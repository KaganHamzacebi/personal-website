import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';

export const defaultLanguage: string = "en";


const initialState: ({ show: boolean, accepted: boolean, rejected: boolean, delay: number }) = {
    show: false,
    accepted: false,
    rejected: false,
    delay: 4000
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
        rejectCookie: (state) => {
            state.rejected = true;
        }
    },
});

export const {showCookieAlert, acceptCookie, rejectCookie} = cookieAlertControllerSlice.actions;
export const selectCookieAlerter = (state: RootState) => state.cookieAlertController
export default cookieAlertControllerSlice.reducer;
