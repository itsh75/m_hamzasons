// app/contact/page.tsx
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h1>Contact Us</h1>
      <form className={styles.form}>
        <label>
          Name:
          <input type="text" name="name" placeholder="Your Name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" placeholder="you@example.com" />
        </label>
        <label>
          Message:
          <textarea name="message" placeholder="Your message here..." rows={5}></textarea>
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
