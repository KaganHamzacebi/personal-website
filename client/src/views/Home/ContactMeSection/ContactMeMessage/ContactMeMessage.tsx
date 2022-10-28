import './contactMeMessage.scss';
import {Resolver, useForm} from "react-hook-form";
import ReactGA from "react-ga4";
import {selectTranslations} from "../../../../features/languageController/LanguageControllerSlice";
import {useAppSelector} from "../../../../app/hooks";
import {selectTheme} from "../../../../features/themeController/ThemeControllerSlice";

type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    content: string;
};

const resolver: Resolver<FormValues> = async (values) => {
    return {
        values: values.firstName ? values : {},
        errors: !values.firstName
            ? {
                firstName: {
                    type: 'required',
                    message: 'This is required.',
                },
            }
            : {},
    };
};

function ContactMeMessage() {
    const t = useAppSelector(selectTranslations);
    const theme = useAppSelector(selectTheme);
    const {register, handleSubmit} = useForm<FormValues>({resolver});
    const onSubmit = () => {
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={`contactMessageMain ${theme === 'dark' ? 'dark' : 'light'}`}>
                <h1 className={`${theme === 'dark' ? 'dark' : 'light'}`}>Send me a message</h1>
                <div className="input-container">
                    <input {...register("firstName")} className={`input-field ${theme === 'dark' ? 'dark' : 'light'}`}
                           placeholder={t.contactMeSectionScripts.firstname}/>
                    <input {...register("lastName")} className={`input-field ${theme === 'dark' ? 'dark' : 'light'}`}
                           placeholder={t.contactMeSectionScripts.lastname}/>
                </div>
                <div className="input-container">
                    <input {...register("email")} className={`input-field ${theme === 'dark' ? 'dark' : 'light'}`}
                           placeholder={t.contactMeSectionScripts.email}/>
                    <input {...register("subject")} className={`input-field ${theme === 'dark' ? 'dark' : 'light'}`}
                           placeholder={t.contactMeSectionScripts.subject}/>
                </div>
                <div>
                    <textarea {...register("content")} rows={5}
                              className={`input-field ${theme === 'dark' ? 'dark' : 'light'}`}
                              placeholder={t.contactMeSectionScripts.message}/>
                </div>
                <button
                    className={`send-btn ${theme === 'dark' ? 'dark' : 'light'}`}
                    onClick={() => ReactGA.event({category: "ContactMeSection", action: "SendButton"})}
                >
                    {t.contactMeSectionScripts.send_btn}
                </button>
            </div>
        </form>
    )
}

export default ContactMeMessage;