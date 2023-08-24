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

  const [errors, setErrors] = useState({});

  const isAllowSend =
    userInfo.name && userInfo.email && userInfo.subject && userInfo.message;

  const handleUserInfo = (e) => {
    setUserInfo((curr) => ({
      ...curr,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const errorMessages = {};

    if (!userInfo.name.trim()) errorMessages.nameError = "Required";

    if (!userInfo.email.trim()) {
      errorMessages.emailError = "Required";
    }

    if (!userInfo.email.trim()) {
      errorMessages.subjectError = "Required";
    }

    if (!userInfo.email.trim()) {
      errorMessages.messageError = "Required";
    }

    console.log(errorMessages);
    setErrors(errorMessages);

    if (isAllowSend) {
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
    }
  };

  return (
    <form className="contacts__form form" ref={form} onSubmit={sendEmail}>
      <div className="form__top">
        <input
          onChange={handleUserInfo}
          name="name"
          style={{
            borderBottomColor: errors.nameError ? "red" : "white",
          }}
          type="text"
          placeholder="Name"
        />
        {errors.nameError && <span>{errors.nameError}</span>}
        <input
          onChange={handleUserInfo}
          name="email"
          type="email"
          placeholder="Email"
        />
      </div>
      <div className="form__middle">
        <input
          onChange={handleUserInfo}
          name="subject"
          type="text"
          placeholder="Subject"
        />
      </div>
      <div className="form__bottom">
        <textarea
          onChange={handleUserInfo}
          name="message"
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
      </div>
      <button
        style={{
          cursor: isAllowSend ? "pointer" : "not-allowed",
        }}
        className="button"
        type="submit"
      >
        Send
      </button>
      {/* <Button dataText={`Send message`} buttonStyles="button"></Button> */}
    </form>
  );
};

export default ContactForm;
