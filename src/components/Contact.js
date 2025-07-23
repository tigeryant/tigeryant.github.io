function Contact() {
  // const tooltip = document.querySelector('#tooltip')

  // createPopper(tooltip, {
  //   placement: 'top',
  // })

  return (
    <section className="p-md-5" id="contact">
      <div className="mb-4">
        <p className="p2" style={{ display: "inline" }}>
          07.{" "}
        </p>
        <h2 style={{ display: "inline" }}>Get In Touch</h2>
      </div>
      <p className="p1">
        I&apos;'m always open to collaborating on exciting projects or
        connecting with like-minded people. Whether you&apos;'re a client,
        developer, or just curious—feel free to reach out via LinkedIn or email.
        I&apos;'ll get back to you as soon as I can!
      </p>
      <div className="contact-icons ms-auto me-auto mt-5">
        <div
          className="contact-links-container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <a
            className="icon-link"
            href="https://www.linkedin.com/in/john-davies-18639b223/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
          >
            <i
              className="bi bi-linkedin icon-link"
              style={{ fontSize: "2rem" }}
            ></i>
          </a>
          <a
            className="icon-link"
            href="mailto:jd.other@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send Email"
          >
            <i
              className="bi bi-envelope-fill icon-link"
              style={{ fontSize: "2rem" }}
            ></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
