import './contactMeSection.scss';
import ContactMeInfo from './ContactMeInfo/ContactMeInfo';
import ContactMeMessage from './ContactMeMessage/ContactMeMessage';

function ContactMeSection() {
    return (
        <div className="contactMeMain">
            <section className="contactMeMain__info">
                <ContactMeInfo />
            </section>
            <section className="contactMeMain__msg">
                <ContactMeMessage />
            </section>
        </div>
    );
}

export default ContactMeSection;
