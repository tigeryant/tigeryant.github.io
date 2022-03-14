function FeaturedTwo() {
  return (
    <section id="featured-two second">
      <div className="featured-container second">
        <div className="featured-info second">
          <p className="p2 featured-header">Featured project</p>
          <h3>CompCoin - React App</h3>
          <p className="info-card second p1 p-2">React app that consumes the Coinbase API to display cryptocurrency exchange rates. This pair programming project was completed as part of the Software Engineering Immersive course run by General Assembly.</p>
          <ul className="project-tech second p1">
            <li className="tech-list-item second">Coinbase API &#8226; </li>
            <li className="tech-list-item second">React &#8226; </li>
            <li className="tech-list-item second">Bulma &#8226; </li>
            <li className="tech-list-item second">React-Vis</li>
          </ul>
          <div className="featured-links-container mb-md-4 ms-md-4">
            <a href="https://github.com/tigeryant/sei-project-two" className="icon-link second me-3" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
            <a href="https://compcoin.netlify.app/" className="icon-link second" target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-right"></i></a>
          </div>
        </div>
        <div className="featured-image-container second">
        </div>
      </div>
    </section>
  )
}

export default FeaturedTwo