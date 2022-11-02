import awsDevBadge from '../assets/awsDevBadge.png'

function Certifications() {
  return (
    <section className="p-md-5" id="certifications">
      <div className="my-5">
        <p className="p2" style={{ display: 'inline' }}>04. </p>
        <h2 style={{ display: 'inline' }}>Certifications</h2>
      </div>
      <div className="certification-container">
        <img className="certificate-image" src={awsDevBadge}></img>
        <div className="ms-4">
          <p className="p1">AWS Developer Associate (DVA-C01). <br></br> Awarded 10/2022. Expires 10/2025.</p>
          <a href="https://www.credly.com/badges/fcdb23d1-c292-411e-8b44-c43bc1edaf2e/public_url" className="icon-link" target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-right"></i></a>
        </div>
      </div>
    </section>
  )
}

export default Certifications