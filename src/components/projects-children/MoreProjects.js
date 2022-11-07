function MoreProjects() {
  
  const projects = [
    { title: 'A Star Pathfinding Algorithm', description: 'Interactive visualisation of the A star pathfinding algorithm', technologies: ['Python', 'Pygame'], links: ['https://github.com/tigeryant/a-star-pathfinding-algorithm'] },
    { title: 'Order Matching Engine', description: 'Price/time priority order matching engine with graphical user interface', technologies: ['Python', 'Tkinter'], links: ['https://github.com/tigeryant/order-matching-engine'] },
    { title: 'Pi Estimator', description: 'Implementation of a Monte Carlo algorithm that estimates the value of Pi and displays a visualisation using a graphical user interface', technologies: ['Python', 'Numpy', 'Pandas', 'Matplotlib'], links: ['https://github.com/tigeryant/pi-estimator'] },
    { title: 'Cryptopals Challenges', description: 'Solutions to the cryptopals cryptography challenges', technologies: ['C++'], links: ['https://github.com/tigeryant/cryptopals-challenges'] },
    { title: 'Data Structures, Algorithms and Design Patterns', description: 'A collection of implementations of various data structures, algorithms and design patterns', technologies: ['Python', 'PHP'], links: ['https://github.com/tigeryant/data-structures-algorithms-design-patterns'] },
    { title: 'KetoKitchen', description: 'Full stack MERN app built collaboratively as part of the Software Engineering Immersive course at GA that allows users to browse keto recipes', technologies: ['Express', 'Node', 'Mongo', 'React', 'Bootstrap', 'JWT'], links: ['https://github.com/tigeryant/sei-project-three-be', 'https://ketokitchen-proj-three-sei.netlify.app/'] }
    // { title: 'Pacman Game', description: 'Retro-style Pacman game completed as part of the Software Engineering Immersive course at GA.', technologies: ['HTML', 'CSS', 'JavaScript'], links: ['https://github.com/tigeryant/sei-project-one', 'https://tigeryant.github.io/sei-project-one/'] }
  ]

  return (
    <section id="more-projects">
      <h3 className="mt-5">More projects</h3>
      <div className="row">
        {projects.map((project, index) => {
          return (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="project-card p-3">
                <h4>{project.title}</h4>
                <p className="p1 light-text">{project.description}</p>
                <ul className="p1 light-text project-tech">
                  {project.technologies.map((tech, index) => {
                    if (index === (project.technologies.length - 1)) {
                      // refactor this - the only difference is the interpunct
                      return (
                        <li key={index} style={{ display: 'inline' }}>{tech}</li>
                      )
                    }

                    return (
                      <li key={index} style={{ display: 'inline' }}>{tech} &#8226; </li>
                    )
                  })}
                </ul>
                <div>
                  {project.links.map((link, index) => {
                    const iconClass = (index === 0 ? 'bi-github' :  'bi-box-arrow-up-right')
                    return (
                      <a key={index} href={link} className="icon-link px-1" target="_blank" rel="noreferrer"><i className={`bi ${iconClass} icon-link`} ></i></a>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default MoreProjects