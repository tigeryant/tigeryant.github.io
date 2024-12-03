import awsDevBadge from '../assets/awsDevBadge.png'
import terraformBadge from '../assets/terraformBadge.png'

function Certifications() {
  return (
    <section className="p-md-5" id="certifications">
      <div className="my-4">
        <p className="p2" style={{ display: 'inline' }}>04. </p>
        <h2 style={{ display: 'inline' }}>Certifications</h2>
      </div>
      <div className="certification-container">
        <img className="certificate-image" src={awsDevBadge}></img>
        {/* may need to remove these unecessary classes - see the css too */}
        <div className="certificate-caption ms-4">
          <p className="p1 certificate-title">AWS Developer Associate (DVA-C01)</p>
          <p className="p1">Awarded 10/2022. Expires 10/2025.</p>
          <a href="https://www.credly.com/badges/fcdb23d1-c292-411e-8b44-c43bc1edaf2e/public_url" className="icon-link" target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-right"></i></a>
        </div>
      </div>
      <div className="certification-container mt-5">
        <img className="certificate-image" src={terraformBadge}></img>
        {/* may need to remove these unecessary classes - see the css too */}
        <div className="certificate-caption ms-4">
          <p className="p1 certificate-title">HashiCorp Certified: Terraform Associate (002)</p>
          <p className="p1">Awarded 11/2022. Expired 11/2024.</p>
          <a href="https://www.credly.com/badges/d5b9c19d-f508-43eb-b6c3-70e16979caf8/public_url" className="icon-link" target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-right"></i></a>
        </div>
      </div>
    </section>
  )
}

export default Certifications