// components
import FeaturedProject from './projects-children/FeaturedProject'
import MoreProjects from './projects-children/MoreProjects'

// content
import rbitrageData from '../components/content/projects/rbitrage'
import compcoinData from '../components/content/projects/compcoin'
import cryptoacademyData from '../components/content/projects/cryptoacademy'

// images
import rbitrageImage from '../assets/rbitrage.png'
import compcoinImage from '../assets/compCoin.png'
import cryptoacademyImage from '../assets/cryptoAcademy.png'


// import FeaturedOne from './projects-children/FeaturedOne'
// import FeaturedTwo from './projects-children/FeaturedTwo'
// import FeaturedThree from './projects-children/FeaturedThree'


function Projects() {
  // put the projects and images in an array and map over them in the JSX
  return (
    <section className="p-md-5" id="projects">
      <div className="my-4">
        <p className="p2" style={{ display: 'inline' }}>05. </p>
        <h2 style={{ display: 'inline' }}>Projects</h2>
      </div>
      <FeaturedProject 
        data={rbitrageData}
        image={rbitrageImage}
        index={0}
      />
      <FeaturedProject 
        data={compcoinData}
        image={compcoinImage}
        index={1}
      />
      <FeaturedProject 
        data={cryptoacademyData}
        image={cryptoacademyImage}
        index={2}
      />
      {/* <FeaturedThree /> */}
      {/* <FeaturedTwo /> */}
      {/* <FeaturedOne /> */}
      <MoreProjects />
    </section>
  )
}

export default Projects