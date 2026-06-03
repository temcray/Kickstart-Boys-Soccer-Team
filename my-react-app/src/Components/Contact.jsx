function Contact() {
  return (
    <section className="section" id="contact">
      <h2>Contact Us</h2>

      <form className="contact-form">
        <input type="text" placeholder="Parent Name" />
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Child's Age" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;