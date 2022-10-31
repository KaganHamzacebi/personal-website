import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import englishTranslate from '../../scripts/en/EnglishScripts';
import { ILanguageControllerState, ISupportedLanguages } from './LanguageControllerInterfaces';

export const defaultLanguage = 'en';

export const supportedLanguages: ISupportedLanguages = {
    en: 'English',
    tr: 'Turkish'
};

const initialState: ILanguageControllerState = {
    language: defaultLanguage,
    supportedLanguages: { ...supportedLanguages },
    translations: {
        en: englishTranslate
    }
};

export const languageControllerSlice = createSlice({
    name: 'languageSelector',
    initialState,
    reducers: {
        selectLanguage: (state, action) => {
            state.language = action.payload;
        }
    }
});

export const { selectLanguage } = languageControllerSlice.actions;
export const selectTranslations = (state: RootState) =>
    state.languageController.translations[
        state.languageController.language as keyof typeof state.languageController.translations
    ];
export default languageControllerSlice.reducer;
