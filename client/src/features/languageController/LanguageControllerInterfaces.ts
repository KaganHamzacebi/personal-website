import type { IconType } from 'react-icons';

export interface ISupportedLanguages {
    en: string;
    tr: string;
}

export interface IEnglishTranslates {
    homeScripts: IHomeScripts;
    aboutMeSectionScripts: IAboutMeSectionScripts;
    skillsSectionScripts: ISkillsSectionScripts;
    projectsSectionScripts: IProjectsSectionScripts;
    contactMeSectionScripts: IContactMeSectionScripts;
    headerFooterScripts: IHeaderFooterScripts;
}

export interface IAboutMeSectionScripts {
    name: string;
    surname: string;
    webdev: string;
    bio_first_part: string;
    bio_unilink: string;
    bio_second_part: string;
    contact_me: string;
    resume: string;
}

export interface ISkillsSectionScripts {
    react_h1: string;
    react_desc: string;
    node_h1: string;
    node_desc: string;
    html_h1: string;
    css_h1: string;
    html_css_desc: string;
    js_h1: string;
    ts_h1: string;
    js_ts_desc: string;
    mongo_h1: string;
    mongo_desc: string;
    third_party_h1: string;
    third_party_desc: string;
}

export interface IProjectsSectionScripts {
    personal_website: IProject;
    tetherer: IProject;
    area_violation_detection: IProject;
    three_in_one: IProject;
}

export interface IProject {
    heading: string;
    description: string;
    modal: IProjectTModal;
}

export interface IProjectTModal {
    tag: string;
    heading: string;
    isPrivate: boolean;
    projectType: string;
    coreFramework: string;
    date: string;
    paragraph: string;
    slides: string[];
    frameworks: IconType[];
    src?: string;
}

export interface IContactMeSectionScripts {
    firstname: string;
    lastname: string;
    email: string;
    subject: string;
    message: string;
    send_btn: string;
    email_content: string;
    address: string;
    address_content: string;
    phone: string;
    phone_content: string;
}

export interface IHeaderFooterScripts {
    about_me: string;
    skills: string;
    projects: string;
    contact_me: string;
    copyright: string;
    copied: string;
}

export interface IHomeScripts {
    title: string;
    description: string;
    keywords: string;
    skills_h1: string;
    skills_h2: string;
    projects_h1: string;
    projects_h2: string;
    contact_h1: string;
    contact_h2: string;
}

export interface ILanguageControllerState {
    language: string;
    supportedLanguages: ISupportedLanguages;
    translations: ITranslations;
}

export interface ITranslations {
    en: IEnglishTranslates;
}
