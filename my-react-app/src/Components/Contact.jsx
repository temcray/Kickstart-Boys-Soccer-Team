import { useState } from "react";

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    e.target.reset();
  }

  return (
    <section className="section" id="contact">
      <h2>Contact Us</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Parent Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="text" placeholder="Child's Age" required />
        <textarea placeholder="Message" required></textarea>
         
        <button type="submit">Send Message</button>
      </form>

      {sent && <p className="success-message">Message sent successfully!</p>}
    </section>
  );
}

export default Contact;