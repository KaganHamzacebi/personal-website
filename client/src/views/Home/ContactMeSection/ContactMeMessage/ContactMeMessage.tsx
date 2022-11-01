import './contactMeMessage.scss';
import { useForm } from 'react-hook-form';
import ReactGA from 'react-ga4';
import { selectTranslations } from '../../../../features/languageController/LanguageControllerSlice';
import { useAppSelector } from '../../../../app/hooks';
import { selectTheme } from '../../../../features/themeController/ThemeControllerSlice';
import { useMutation } from '@apollo/client';
import { SAVE_MESSAGE } from '../../../../service/contactMeApi/ContactMeApi';
import { useEffect, useState } from 'react';

import { BsFillPatchCheckFill } from 'react-icons/bs';

export type IMessage = {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    content: string;
};

function ContactMeMessage() {
    const t = useAppSelector(selectTranslations);
    const theme = useAppSelector(selectTheme);
    const [saveMessage] = useMutation(SAVE_MESSAGE);
    const [showMessage, setShowMessage] = useState<boolean>(false);
    const { register, handleSubmit, reset, formState } = useForm<IMessage>();

    const onSubmit = (data: IMessage) => {
        saveMessage({
            variables: {
                message: data,
            },
        }).then((res) => {
            if (res.data?.saveMessage === true) {
                setShowMessage(true);
            }
            setTimeout(() => {
                setShowMessage(false);
            }, 4000);
        });
    };

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            setTimeout(() => {
                reset();
            }, 1000);
        }
    }, [formState, reset]);

    return (
        <form className="main-form" onSubmit={handleSubmit(onSubmit)}>
            <div className={`success-message-info ${theme === 'dark' ? 'dark' : 'light'} ${showMessage && 'active'}`}>
                <BsFillPatchCheckFill className="success-icon" />
                <span className={`success-message ${theme === 'dark' ? 'dark' : 'light'}`}>
                    Message is successfully sent!
                </span>
            </div>
            <div className={`contactMessageMain ${theme === 'dark' ? 'dark' : 'light'}`}>
                <h1 className={`${theme === 'dark' ? 'dark' : 'light'}`}>Send me a message</h1>
                <div className="input-container">
                    <input
                        {...register('firstName', { required: true })}
                        className={`input-field ${theme === 'dark' ? 'dark' : 'light'}`}
                        placeholder={t.contactMeSectionScripts.firstname}
                    />
                    <input
                        {...register('lastName', { required: true })}
                        className={`input-field ${theme === 'dark' ? 'dark' : 'light'}`}
                        placeholder={t.contactMeSectionScripts.lastname}
                    />
                </div>
                <div className="input-container">
                    <input
                        {...register('email', { required: true })}
                        className={`input-field ${theme === 'dark' ? 'dark' : 'light'}`}
                        placeholder={t.contactMeSectionScripts.email}
                    />
                    <input
                        {...register('subject', { required: true })}
                        className={`input-field ${theme === 'dark' ? 'dark' : 'light'}`}
                        placeholder={t.contactMeSectionScripts.subject}
                    />
                </div>
                <div>
                    <textarea
                        {...register('content', { required: true })}
                        rows={5}
                        className={`input-field ${theme === 'dark' ? 'dark' : 'light'}`}
                        placeholder={t.contactMeSectionScripts.message}
                    />
                </div>
                <div className="message-sent-wrapper">
                    <button
                        className={`send-btn ${theme === 'dark' ? 'dark' : 'light'}`}
                        onClick={() => ReactGA.event({ category: 'ContactMeSection', action: 'SendButton' })}
                    >
                        {t.contactMeSectionScripts.send_btn}
                    </button>
                </div>
            </div>
        </form>
    );
}

export default ContactMeMessage;
