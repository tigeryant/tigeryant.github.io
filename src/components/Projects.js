import FeaturedOne from './projects-children/FeaturedOne'
import FeaturedTwo from './projects-children/FeaturedTwo'
import FeaturedThree from './projects-children/FeaturedThree'
import MoreProjects from './projects-children/MoreProjects'


function Projects() {
  return (
    <section className="p-md-5" id="projects">
      <div className="my-4">
        <p className="p2" style={{ display: 'inline' }}>04. </p>
        <h2 style={{ display: 'inline' }}>Projects</h2>
      </div>
      <FeaturedThree />
      <FeaturedTwo />
      <FeaturedOne />
      <MoreProjects />
    </section>
  )
}

export default Projects