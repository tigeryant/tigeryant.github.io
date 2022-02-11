// import cryptoAcademyImage from '../../assets/cryptoAcademy.png'

function FeaturedOne() {
  return (
    <section id="featured-one first">
      <div className="featured-container first">
        <div className="featured-image-container first">
          {/* <img className="featured-image" src={cryptoAcademyImage}/> */}
        </div>
        <div className="featured-info">
          <p className="p2 featured-header">Featured project</p>
          <h3>CryptoAcademy - Full Stack Web App</h3>
          <p className="info-card first p1 p-2">Driven by my interest in cryptography, I built this full stack web app that allows users to browse and enrol on cryptography courses.  I completed this project as part of the Software Engineering Immersive course run by General Assembly.</p>
          <ul className="p1 project-tech first">
            <li className="tech-list-item first">Django &#8226; </li>
            <li className="tech-list-item first">React &#8226; </li>
            <li className="tech-list-item first">PostgreSQL &#8226; </li>
            <li className="tech-list-item first">Bootstrap &#8226; </li>
            <li className="tech-list-item first">Netlify &#8226; </li>
            <li className="tech-list-item first">Heroku</li>
          </ul>
          <a href="https://github.com/tigeryant/sei-project-four-be" className="icon-link first mb-4 me-4" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
        </div>

        {/* <h5>Featured project one</h5> */}
      </div>
    </section>
  )
}

export default FeaturedOne