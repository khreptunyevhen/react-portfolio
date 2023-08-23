import ContactForm from "./ContactForm";
import SectionTitle from "./SectionTitle";

import "./styles/contacts.css";

const Contacts = () => {
  return (
    <section className="contacts">
      <div className="container">
        <SectionTitle>
          <h2 className="title">
            <span className="title__text">Let&apos;s talk!</span>
            <span className="title__shadow">Contact</span>
          </h2>
        </SectionTitle>
        <p className="contacts__text">
          Let&apos;s build something <span>great together</span>!
        </p>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contacts;
