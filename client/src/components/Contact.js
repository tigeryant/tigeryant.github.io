function Contact() {
  return (
    <section className="p-5" id="contact">
      <div className="mb-4">
        <p className="p2" style={{ display: 'inline' }}>04. </p>
        <h2 style={{ display: 'inline' }}>Get In Touch</h2>
      </div>
      <p className="p1">I&apos;m currently looking for a role as a full stack, back end or front end engineer. If you want to get in touch, message me on LinkedIn or send me an email and I&apos;ll get back to you as soon as possible!</p>
      <div className="contact-icons ms-auto me-auto mt-5">
        <p className="p2">jd.other@hotmail.com ADD POPOVERS TO THIS ICON FOR COPY TO CLIPBOARD AND COPIED!<span className="icon-link" onClick={
          () => {
            navigator.clipboard.writeText('jd.other@hotmail.com')
          }}><i className="bi bi-clipboard icon-link ps-4"></i></span></p>
        <a className="icon-link" href="https://www.linkedin.com/in/john-davies-18639b223/" target="_blank" rel="noreferrer"><i className="bi bi-linkedin icon-link"></i></a>
      </div>
    </section>
  )
}

export default Contact