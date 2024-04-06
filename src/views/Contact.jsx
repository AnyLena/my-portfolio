import { useEffect, useState } from "react";
import "../styles/contact.css";
import emailjs from "emailjs-com";

const Contact = ({lang}) => {
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [message, setMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    lang === "de" ? setMessage("Nachricht wird gesendet ...") : setMessage("Sending message ...");
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        lang === "de" ? setMessage("Vielen Dank! Ich habe Ihre Nachricht erhalten.") : setMessage("Thank you for your message!");
      },
      (error) => {
        console.log(error.text);
        lang === "de" ? setMessage("Ups. Irgendwas ist schief gelaufen.") : setMessage("Opps. Something went wrong.");
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
    <section className="contact dark" id="contact">
      {lang === "de" ? <h2>Schreiben Sie mir!</h2> : <h2>Send me a message!</h2>}
      <div>
        <form className="formContainer" onSubmit={handleSubmit}>
          <div className="formElement">
            <input
              type="text"
              id="from_name"
              name="from_name"
              placeholder={lang === "de" ? "Ihr Name..." : "Your name ..."}
              required
            />
          </div>

          <div className="formElement">
            <input
              type="email"
              id="from_email"
              name="from_email"
              placeholder={lang === "de" ? "Ihre E-Mail-Adresse..." : "Your email ..."}
              required
            />
          </div>

          <div className="formElement">
            <textarea
              name="message"
              rows="8"
              placeholder={lang === "de" ? "Ihre Nachricht ..." : "Your message ..."}
              required
            />
          </div>
          <button type="submit" className="formButton">
           {lang === "de" ? "abschicken" : "submit"}
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
