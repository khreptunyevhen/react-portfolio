import { useRef, useState } from "react";
import Button from "./Button";
import InputField from "./InputField";
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
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const minFieldLength = {
    name: 2,
    subject: 50,
    message: 500,
  };

  const isValidEmail = /\S+@\S+\.\S+/.test(userInfo.email);

  const isAllowSend =
    userInfo.name &&
    userInfo.name.length >= minFieldLength.name &&
    userInfo.email &&
    isValidEmail &&
    userInfo.subject &&
    userInfo.subject.trim().length < minFieldLength.subject &&
    userInfo.message &&
    userInfo.message.trim().length < minFieldLength.message;

  const handleUserInfo = (e) => {
    setUserInfo((curr) => ({
      ...curr,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const errorMessages = {};

    if (!userInfo.name.trim()) {
      errorMessages.nameError = "Name is required";
    } else if (userInfo.name.length < minFieldLength.name) {
      errorMessages.nameError = "Name has to be more then then 1 char";
    }

    if (!userInfo.email.trim()) {
      errorMessages.emailError = "Email is required";
    } else if (!isValidEmail) {
      errorMessages.emailError = "Not valid email";
    }

    if (!userInfo.subject.trim()) {
      errorMessages.subjectError = "Subject is required";
    } else if (userInfo.subject.trim().length > minFieldLength.subject) {
      errorMessages.subjectError = `Subject has to be less then ${minFieldLength.subject} char`;
    }

    if (!userInfo.message.trim()) {
      errorMessages.messageError = "Message is required";
    } else if (userInfo.message.trim().length > minFieldLength.message) {
      errorMessages.messageError = `Message has to be less then ${minFieldLength.message} char`;
    }

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

    if (isAllowSend) {
      setShowSuccess(true);
    } else {
      setShowSuccess(false);
    }
  };

  return (
    <form className="contacts__form form" ref={form} onSubmit={sendEmail}>
      <div className="form__top">
        <InputField
          error={errors.nameError}
          info={userInfo.name}
          onHandleUserInfo={handleUserInfo}
          name={"name"}
          holder={"Name"}
        />
        <InputField
          error={errors.emailError}
          info={userInfo.email}
          onHandleUserInfo={handleUserInfo}
          name={"email"}
          holder={"Email"}
        />
      </div>
      <div className="form__middle">
        <InputField
          error={errors.subjectError}
          info={userInfo.subject}
          onHandleUserInfo={handleUserInfo}
          name={"subject"}
          holder={"Subject"}
        />
      </div>
      <div className="form__bottom">
        <textarea
          className={errors.messageError ? "field-error" : ""}
          onChange={handleUserInfo}
          name="message"
          value={userInfo.message}
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        {errors.messageError && (
          <span className="error-message">{errors.messageError}</span>
        )}
      </div>
      <Button dataText={`Send message`} buttonStyles="button"></Button>
      {showSuccess && (
        <p className="success-message">The message had been send!</p>
      )}
    </form>
  );
};

export default ContactForm;
