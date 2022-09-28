export interface ISupportedLanguages {
    en: string;
    tr: string;
}

export interface IEnglishTranslates {
    homeScripts: IHomeScripts;
    aboutMeSectionScripts: IAboutMeSectionScripts;
}

export interface IAboutMeSectionScripts {
    name: string;
    surname: string;
    webdev: string;
    bio_first_part: string;
    bio_unilink: string;
    bio_second_part: string;
}

export interface ISkillsSectionScripts {
    //TODO: implement this
}

export interface IHomeScripts {
    "skills_h1": string;
    "skills_h2": string;
    "projects_h1": string;
    "projects_h2": string;
    "contact_h1": string;
    "contact_h2": string;
}

export interface ILanguageConfigState {
    language: string;
    supportedLanguages: ISupportedLanguages;
    translations: ITranslations;
}

export interface ITranslations {
    en: IEnglishTranslates;
}