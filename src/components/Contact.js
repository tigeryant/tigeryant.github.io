import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
// import { createPopper } from '@popperjs/core'

function Contact() {
  // const state = {
  //   value: '',
  //   copied: false,
  // }

  const [copied, setCopied] = useState(false)

  // const tooltip = document.querySelector('#tooltip')

  // createPopper(tooltip, {
  //   placement: 'top',
  // })

  return (
    <section className="p-md-5" id="contact">
      <div className="mb-4">
        <p className="p2" style={{ display: 'inline' }}>04. </p>
        <h2 style={{ display: 'inline' }}>Get In Touch</h2>
      </div>
      <p className="p1">I&apos;m currently looking for a role as a backend engineer. If you want to get in touch, message me on LinkedIn or send me an email and I&apos;ll get back to you as soon as possible!</p>
      <div className="contact-icons ms-auto me-auto mt-5">
        <div className="contact-links-container">
          <div className="email-container">
            <p className="p2">jd.other@hotmail.com</p>
            {/* <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
          Tooltip on top
        </button> */}
            <span id="email-icon" data-bs-toggle="tooltip" data-bs-placement="top" title={copied ? 'Copied!' : 'Copy'}>
              <CopyToClipboard text={'jd.other@hotmail.com'}
                onCopy={() => setCopied(true)}>
                <span className="icon-link"><i className="bi bi-clipboard icon-link ps-4"></i></span>
              </CopyToClipboard>

              {/* {copied ? <span style={{ color: 'red' }}>Copied.</span> : null} */}
            </span>
          </div>
          <a className="icon-link" href="https://www.linkedin.com/in/john-davies-18639b223/" target="_blank" rel="noreferrer"><i className="bi bi-linkedin icon-link"></i></a>
        </div>
      </div>
    </section >
  )
}

export default Contact