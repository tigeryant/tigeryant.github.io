function MoreProjects() {
  // declare and array of objects - one object for each of the projects. Then map through them in the JSX

  const projects = [
    { title: 'A Star Pathfinding Algorithm', description: 'Interactive visualisation of the A star pathfinding algorithm.', technologies: ['Python', 'Pygame'], links: ['https://github.com/tigeryant/a-star-pathfinding-algorithm'] }
  ]

  return (
    <section id="more-projects">
      <h3 className="mt-5">More projects</h3>
      <div className="row">
        {/* <div className="col-md-6 col-lg-4">
          <div className="project-card p-3">
            <h4>A Star Pathfinding Algorithm</h4>
            <p className="p1 light-text">Interactive visualisation of the A star pathfinding algorithm.</p>
            <ul className="p1 light-text project-tech">
              <li style={{ display: 'inline' }}>Python &#8226; </li>
              <li style={{ display: 'inline' }}>Pygame</li>
            </ul>
            <a href="https://github.com/tigeryant/a-star-pathfinding-algorithm" className="icon-link"><i className="bi bi-github" target="_blank" rel="noreferrer"></i></a>
          </div>
        </div> */}
        {projects.map((project, index) => {
          return (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="project-card p-3">
                <h4>{project.title}</h4>
                <p className="p1 light-text">{project.description}</p>
                <ul className="p1 light-text project-tech">
                  {project.technologies.map((tech, index) => {
                    if (index === (project.technologies.length - 1)) {
                      return (
                        <li key={index} style={{ display: 'inline' }}>{tech}</li>
                      )
                    }

                    return (
                      <li key={index} style={{ display: 'inline' }}>{tech} &#8226; </li>
                    )
                  })}
                </ul>
                <div className="project-links-container">
                  {project.links.map((link, index) => {
                    const iconClass = (index === (project.links.length - 1) ? 'bi-github' :  'bi-box-arrow-up-right')
                    return (
                      <a key={index} href={link} className="icon-link"><i className={`bi ${iconClass}`} target="_blank" rel="noreferrer"></i></a>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}

        {/* <div className="col-md-6 col-lg-4">
          <div className="project-card p-3">
            <h3>Order Matching Engine</h3>
            <p className="p1"> Price/time priority order matching engine with graphical user interface.</p>
            <ul className="p1">
              <li style={{ display: 'inline' }}>Python &#8226; </li>
              <li style={{ display: 'inline' }}>Tkinter</li>
            </ul>
            <a href="https://github.com/tigeryant/order-matching-engine" className="icon-link"><i className="bi bi-github" target="_blank" rel="noreferrer"></i></a>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="project-card p-3">
            <h3>Pi Estimator</h3>
            <p className="p1">Implementation of a Monte Carlo algorithm that estimates the value of Pi and displays a visualisation using a graphical user interface.</p>
            <ul className="p1">
              <li style={{ display: 'inline' }}>Python &#8226; </li>
              <li style={{ display: 'inline' }}>Numpy &#8226; </li>
              <li style={{ display: 'inline' }}>Pandas &#8226; </li>
              <li style={{ display: 'inline' }}>Matplotlib</li>
            </ul>
            <a href="https://github.com/tigeryant/pi-estimator" className="icon-link"><i className="bi bi-github" target="_blank" rel="noreferrer"></i></a>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="project-card p-3">
            <h3>Cryptopals Challenges</h3>
            <p className="p1">Solutions to the cryptopals cryptography challenges.</p>
            <ul className="p1">
              <li style={{ display: 'inline' }}>C++</li>
            </ul>
            <a href="https://github.com/tigeryant/cryptopals-challenges" className="icon-link"><i className="bi bi-github" target="_blank" rel="noreferrer"></i></a>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="project-card p-3">
            <h3>KetoKitchen</h3>
            <p className="p1">Full stack MERN app built collaboratively as part of the Software Engineering Immersive course at GA that allows users to browse keto recipes.</p>
            <ul className="p1">
              <li style={{ display: 'inline' }}>Express &#8226; </li>
              <li style={{ display: 'inline' }}>Node &#8226; </li>
              <li style={{ display: 'inline' }}>Mongo &#8226; </li>
              <li style={{ display: 'inline' }}>React &#8226; </li>
              <li style={{ display: 'inline' }}>Bootstrap &#8226; </li>
              <li style={{ display: 'inline' }}>JWT</li>
            </ul>
            <a href="https://github.com/tigeryant/sei-project-three-be" className="icon-link"><i className="bi bi-github" target="_blank" rel="noreferrer"></i></a>
            <a href="https://ketokitchen-proj-three-sei.netlify.app/" className="icon-link"><i className="bi bi-box-arrow-up-right" target="_blank" rel="noreferrer"></i></a>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="project-card p-3">
            <h3>Pacman Game</h3>
            <p className="p1">Retro-style Pacman game completed as part of the Software Engineering Immersive course at GA.</p>
            <ul className="p1">
              <li style={{ display: 'inline' }}>HTML &#8226; </li>
              <li style={{ display: 'inline' }}>CSS &#8226; </li>
              <li style={{ display: 'inline' }}>JavaScript</li>
            </ul>
            <a href="https://github.com/tigeryant/sei-project-one" className="icon-link"><i className="bi bi-github" target="_blank" rel="noreferrer"></i></a>
            <a href="https://tigeryant.github.io/sei-project-one/" className="icon-link"><i className="bi bi-box-arrow-up-right" target="_blank" rel="noreferrer"></i></a>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default MoreProjects