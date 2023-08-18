import ContactForm from "./ContactForm";
import "./styles/contacts.css";

const Contacts = () => {
  return (
    <section className="contacts">
      <div className="container">
        <h2 className="title">Contact me</h2>
        <p className="contacts__text">
          Let&apos;s build something <span>great together</span>!
        </p>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contacts;
