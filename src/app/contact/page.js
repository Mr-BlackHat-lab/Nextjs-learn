import "@/styles/contact.css";

export default function Contact() {
  return (
    <main className="page-container">
      <h1 className="page-title">Contact Us</h1>
      <p className="page-description">
        Have any questions, feedback, or ideas? Fill out the form below and we’ll get back to you.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </main>
  );
}
