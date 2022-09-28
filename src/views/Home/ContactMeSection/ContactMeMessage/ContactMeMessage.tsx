import './contactMeMessage.scss';
import {Resolver, useForm} from "react-hook-form";

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
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValues>({ resolver });
    const onSubmit = () => {};

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="contactMessageMain">
                <h1>Send me a message</h1>
                <div className="input-container">
                    <input {...register("firstName")} className="input-field" placeholder="Firstname" />
                    <input {...register("lastName")} className="input-field" placeholder="Lastname" />
                </div>
                <div className="input-container">
                    <input {...register("email")} className="input-field" placeholder="Email" />
                    <input {...register("subject")} className="input-field" placeholder="Subject" />
                </div>
                <div>
                    <textarea {...register("content")} rows={5} className="input-field" placeholder="Message" />
                </div>
                <button className="send-btn">Send</button>
            </div>
        </form>
    )
}

export default ContactMeMessage;