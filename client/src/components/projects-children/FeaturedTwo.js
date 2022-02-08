// import compCoinImage from '../../assets/compCoin.png'

function FeaturedTwo() {
  return (
    <section id="featured-two">
      <h5>Featured project two</h5>
      <div className="featured-container">
        <div className="featured-info-two">
          <p className="mono-font">Featured project</p>
          <h3>CompCoin - React App</h3>
          <p className="info-card">React app that consumes the Coinbase API to display cryptocurrency exchange rates. This pair programming project was completed as part of the Software Engineering Immersive course run by General Assembly.</p>
          <ul>
            {/* move the styling to the stylesheet */}
            <li style={{ display: 'inline' }}>Coinbase API &#8226; </li>
            <li style={{ display: 'inline' }}>React &#8226; </li>
            <li style={{ display: 'inline' }}>Bulma &#8226; </li>
            <li style={{ display: 'inline' }}>React-Vis</li>
          </ul>
          <p>links to project and repo</p>
          <a href="https://github.com/tigeryant/sei-project-two" className="icon-link" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
          <a href="https://compcoin.netlify.app/" className="icon-link" target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-right"></i></a>
        </div>
        <div className="featured-image-two-container">
          {/* <img className="featured-image-two" src={compCoinImage} /> */}
        </div>
      </div>
    </section>
  )
}

export default FeaturedTwo