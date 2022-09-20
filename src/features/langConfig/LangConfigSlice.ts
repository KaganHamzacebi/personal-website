import {  createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import englishTranslate from '../../scripts/en/EnglishScripts'
import {ILanguageConfigState, ISupportedLanguages} from "../../utils/LanguageConfigInterfaces";

export const defaultLang: string = "en";

export const supportedLanguages: ISupportedLanguages = {
    en: "English",
    tr: "Turkish"
}


const initialState: ILanguageConfigState = {
    language: defaultLang,
    supportedLanguages: {...supportedLanguages},
    translations: {
        en: englishTranslate,
    }

}

export const langConfigSlice = createSlice({
    name: 'languageSelector',
    initialState,
    reducers: {
        selectLanguage: (state, action) => {
            state.language = action.payload
        }
    },
});

export const { selectLanguage } = langConfigSlice.actions;
// @ts-ignore
export const selectTranslations = (state: RootState) => state.languageConfig.translations[state.languageConfig.language];
export default langConfigSlice.reducer;
