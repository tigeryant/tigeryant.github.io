import FeaturedOne from './projects-children/FeaturedOne'
import FeaturedTwo from './projects-children/FeaturedTwo'
import MoreProjects from './projects-children/MoreProjects'


function Projects() {
  return (
    // Return featured project 1, featured project 2, other projects
    <section className="p-5" id="projects">
      <h3>Projects</h3>
      <FeaturedOne />
      <FeaturedTwo />
      <MoreProjects />
    </section>
  )
}

export default Projects