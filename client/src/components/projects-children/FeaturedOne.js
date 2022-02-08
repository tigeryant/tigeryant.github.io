// import cryptoAcademyImage from '../../assets/cryptoAcademy.png'

function FeaturedOne() {
  return (
    <section id="featured-one">
      <div className="featured-container">
        <div className="featured-image-container">
          {/* <img className="featured-image" src={cryptoAcademyImage}/> */}
        </div>
        <div className="featured-info">
          <p className="mono-font">Featured project</p>
          <h3>CryptoAcademy - Full Stack Web App</h3>
          <p className="info-card">Driven by my interest in cryptography, I built this full stack web app that allows users to browse and enrol on cryptography courses.  I completed this project as part of the Software Engineering Immersive course run by General Assembly.</p>
          <ul>
            <li style={{ display: 'inline' }}>Django &#8226; </li>
            <li style={{ display: 'inline' }}>React &#8226; </li>
            <li style={{ display: 'inline' }}>PostgreSQL &#8226; </li>
            <li style={{ display: 'inline' }}>Bootstrap &#8226; </li>
            <li style={{ display: 'inline' }}>Netlify &#8226; </li>
            <li style={{ display: 'inline' }}>Heroku</li>
          </ul>
          <p>links to project and repo (grey, then orange on hover)</p>
          <a href="https://github.com/tigeryant/sei-project-four-be" className="icon-link"><i className="bi bi-github" target="_blank" rel="noreferrer"></i></a>
        </div>

        {/* <h5>Featured project one</h5> */}
      </div>
    </section>
  )
}

export default FeaturedOne