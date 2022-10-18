import './contactMeMessage.scss';
import {Resolver, useForm} from "react-hook-form";
import ReactGA from "react-ga";
import {useSelector} from "react-redux";
import {selectTranslations} from "../../../../features/langConfig/LangConfigSlice";

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
    const t = useSelector(selectTranslations);
    const {register, handleSubmit} = useForm<FormValues>({resolver});
    const onSubmit = () => {
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="contactMessageMain">
                <h1>Send me a message</h1>
                <div className="input-container">
                    <input {...register("firstName")} className="input-field"
                           placeholder={t.contactMeSectionScripts.firstname}/>
                    <input {...register("lastName")} className="input-field"
                           placeholder={t.contactMeSectionScripts.lastname}/>
                </div>
                <div className="input-container">
                    <input {...register("email")} className="input-field"
                           placeholder={t.contactMeSectionScripts.email}/>
                    <input {...register("subject")} className="input-field"
                           placeholder={t.contactMeSectionScripts.subject}/>
                </div>
                <div>
                    <textarea {...register("content")} rows={5} className="input-field"
                              placeholder={t.contactMeSectionScripts.message}/>
                </div>
                <button
                    className="send-btn"
                    onClick={() => ReactGA.event({category: "ContactMeSection", action: "SendButton"})}
                >
                    {t.contactMeSectionScripts.send_btn}
                </button>
            </div>
        </form>
    )
}

export default ContactMeMessage;