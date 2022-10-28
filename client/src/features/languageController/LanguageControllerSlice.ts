import {  createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import englishTranslate from '../../scripts/en/EnglishScripts'
import {ILanguageControllerState, ISupportedLanguages} from "./LanguageControllerInterfaces";

export const defaultLanguage: string = "en";

export const supportedLanguages: ISupportedLanguages = {
    en: "English",
    tr: "Turkish"
}


const initialState: ILanguageControllerState = {
    language: defaultLanguage,
    supportedLanguages: {...supportedLanguages},
    translations: {
        en: englishTranslate,
    }

}

export const languageControllerSlice = createSlice({
    name: 'languageSelector',
    initialState,
    reducers: {
        selectLanguage: (state, action) => {
            state.language = action.payload
        }
    },
});

export const { selectLanguage } = languageControllerSlice.actions;
// @ts-ignore
export const selectTranslations = (state: RootState) => state.languageController.translations[state.languageController.language];
export default languageControllerSlice.reducer;
