// components
import FeaturedProject from "./projects-children/FeaturedProject";
import MoreProjects from "./projects-children/MoreProjects";

// content
import cherryData from "./content/projects/cherry";
import rbitrageData from "../components/content/projects/rbitrage";
// import awsSmsData from "./content/projects/awsSmsDelivery";
import operaData from "./content/projects/opera";
import rustData from './content/projects/rustBitcoin'
// import compcoinData from '../components/content/projects/compcoin'
// import cryptoacademyData from '../components/content/projects/cryptoacademy'

// images
import cherryImage from "../assets/projects/cherry.png";
import rbitrageImage from "../assets/rbitrage.png";
// import awsSmsImage from "../assets/awsSmsImage.png";
import operaImage from "../assets/operaImage.png";
// import rustImage from '../assets/projects/programming-bitcoin-cover.jpg'
import rustImage from '../assets/projects/output-onlinepngtools-1.png'
// import compcoinImage from '../assets/compCoin.png'
// import cryptoacademyImage from '../assets/cryptoAcademy.png'

// import FeaturedOne from './projects-children/FeaturedOne'
// import FeaturedTwo from './projects-children/FeaturedTwo'
// import FeaturedThree from './projects-children/FeaturedThree'

function Projects() {
  // put the projects and images in an array and map over them in the JSX
  return (
    <section className="p-md-5" id="projects">
      <div className="my-4">
        <p className="p2" style={{ display: "inline" }}>
          06.{" "}
        </p>
        <h2 style={{ display: "inline" }}>Projects</h2>
      </div>
      <FeaturedProject data={rustData} image={rustImage} index={0} />
      <FeaturedProject data={cherryData} image={cherryImage} index={1} />
      <FeaturedProject data={rbitrageData} image={rbitrageImage} index={2} />
      <FeaturedProject data={operaData} image={operaImage} index={3} />
      {/* <FeaturedProject data={awsSmsData} image={awsSmsImage} index={3} /> */}
      {/* <FeaturedProject 
        data={compcoinData}
        image={compcoinImage}
        index={2}
      /> */}
      {/* <FeaturedProject 
        data={cryptoacademyData}
        image={cryptoacademyImage}
        index={3}
      /> */}
      {/* <FeaturedThree /> */}
      {/* <FeaturedTwo /> */}
      {/* <FeaturedOne /> */}
      <MoreProjects />
    </section>
  );
}

export default Projects;
