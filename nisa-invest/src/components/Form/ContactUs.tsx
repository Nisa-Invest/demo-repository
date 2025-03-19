import styles from "./Form.module.css";
import { useState } from "react";

function sendMessageToServer(name: string, msg: string) {
  console.log(`The name is ${name}, the message is ${msg}`); // No error
}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className={styles.formContainer}>
      <h2> Contact Us </h2>
      <form
        className={styles.contactForm}
        onSubmit={(event) => {
          event.preventDefault();
          sendMessageToServer(name, message);
        }}
      >
        <div className={styles.formGroup}>
          <label htmlFor="name"> Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message"> Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
            placeholder=" Write to us with any queries you may have!"
            rows={5}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>submit</button>
      </form>
    </div>
  );
}
