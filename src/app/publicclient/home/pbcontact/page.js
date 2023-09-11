// pages/contact.module.js

import React from 'react';

import styles from "@/app/publicclient/home/pbcontact/page.module.css" 
const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <p>
        If you have any questions or feedback, please feel free to contact us
        using the form below or via email.
      </p>
      <div>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your Message"
              className={styles.textarea}
            ></textarea>
          </div>

          <button
            type="submit"
            className={styles.button}
          >
            Send
          </button>
        </form>
      </div>

      <div className={styles.contactInfo}>
        <p>Email: bikramdhami296@email.com</p>
        <p>Phone: 9800000000</p>
      </div>
  
    </div>
  );
};

export default Contact;
