import FeaturedOne from './projects-children/FeaturedOne'
import FeaturedTwo from './projects-children/FeaturedTwo'
import MoreProjects from './projects-children/MoreProjects'


function Projects() {
  return (
    <section className="p-md-5" id="projects">
      <div className="my-4">
        <p className="p2" style={{ display: 'inline' }}>03. </p>
        <h2 style={{ display: 'inline' }}>Projects</h2>
      </div>
      <FeaturedOne />
      <FeaturedTwo />
      <MoreProjects />
    </section>
  )
}

export default Projects