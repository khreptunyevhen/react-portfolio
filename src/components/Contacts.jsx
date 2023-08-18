import "./styles/contacts.css";

const Contacts = () => {
  return (
    <section className="contacts">
      <div className="container">
        <h2 className="title">Contact me</h2>
        <p className="contacts__text">
          Let&apos;s build something <span>great together</span>!
        </p>
        <form className="contacts__form form">
          <div className="form__top">
            <input name="name" type="text" placeholder="Name" required />
            <input name="email" type="email" placeholder="Email" required />
          </div>
          <div className="form__middle">
            <input name="subject" type="text" placeholder="Subject" required />
          </div>
          <div className="form__bottom">
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <button className="button">Send message</button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
