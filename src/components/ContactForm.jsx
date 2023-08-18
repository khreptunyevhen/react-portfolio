import { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./styles/contactForm.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p22hycr",
        "template_r0tu7f3",
        form.current,
        "6GUQzJGJqf7PWKwPV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <form className="contacts__form form" ref={form} onSubmit={sendEmail}>
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
  );
};

export default ContactForm;
