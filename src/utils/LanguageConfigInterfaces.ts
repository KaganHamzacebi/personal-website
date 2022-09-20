export interface ISupportedLanguages {
    en: string;
    tr: string;
}

export interface IEnglishTranslates {
    firstSectionScripts: IEnglishFirstSection;
}

export interface IEnglishFirstSection {
    name: string;
    surname: string;
    webdev: string;
    bio_first_part: string;
    bio_unilink: string;
    bio_second_part: string;
}

export interface ILanguageConfigState {
    language: string;
    supportedLanguages: ISupportedLanguages;
    translations: ITranslations;
}

export interface ITranslations {
    en: IEnglishTranslates;
}