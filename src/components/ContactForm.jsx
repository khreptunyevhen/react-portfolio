import { useRef, useState } from "react";
import Button from "./Button";
import emailjs from "@emailjs/browser";

import "./styles/contactForm.css";

const ContactForm = () => {
  const form = useRef();

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isCorrectInfo, setIsCorrectInfo] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const handleUserInfo = (e) => {
    setUserInfo((curr) => ({
      ...curr,
      [e.target.name]: e.target.value,
    }));
  };

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

    setUserInfo({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <form className="contacts__form form" ref={form} onSubmit={sendEmail}>
      <div className="form__top">
        <input
          onChange={handleUserInfo}
          onBlur={handleCorrectName}
          name="name"
          type="text"
          placeholder="Name"
          required
        />
        <input
          onChange={handleUserInfo}
          name="email"
          type="email"
          placeholder="Email"
          required
        />
      </div>
      <div className="form__middle">
        <input
          onChange={handleUserInfo}
          onBlur={handleCorrectSubject}
          name="subject"
          type="text"
          placeholder="Subject"
          required
        />
      </div>
      <div className="form__bottom">
        <textarea
          onChange={handleUserInfo}
          name="message"
          cols="30"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
      </div>
      <Button dataText={`Send message`} buttonStyles="button"></Button>
    </form>
  );
};

export default ContactForm;
