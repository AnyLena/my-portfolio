import { useEffect, useState } from "react";
import "../../styles/contact.css";
import emailjs from "emailjs-com";
const Contact = () => {
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [message, setMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Nachricht wird gesendet ...");
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        setMessage("Vielen Dank! Ich habe Ihre Nachricht erhalten.");
      },
      (error) => {
        console.log(error.text);
        alert("Something went wrong!");
      }
    );
    e.target.reset();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage(null);
    }, 5000);
    return () => clearTimeout(timer);
  }, [message]);
  
  return (
    <section className="contact" id="contact">
      <h2>Schreiben Sie mir!</h2>
      <div>
        <form className="formContainer" onSubmit={handleSubmit}>
          <div className="formElement">
            {/* <label for="from_name">Name</label> */}
            <input
              type="text"
              id="from_name"
              name="from_name"
              placeholder="Ihr Name..."
              required
            />
          </div>

          <div className="formElement">
            {/* <label>E-mail</label> */}
            <input
              type="email"
              id="from_email"
              name="from_email"
              placeholder="Ihre E-Mail-Adresse..."
              required
            />
          </div>

          <div className="formElement">
            {/* <label for="message">Message</label> */}
            <textarea
              name="message"
              rows="8"
              placeholder="Ihre Nachricht ..."
              required
            />
          </div>
          <button type="submit" className="formButton">
            Submit
          </button>
        </form>
        <p className={message ? "form_alert" : "form_alert hidden"}>
          {message}
        </p>
      </div>
    </section>
  );
};

export default Contact;
