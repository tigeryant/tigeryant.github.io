// import portrait from '../assets/portrait.JPG'
import portrait2 from '../assets/portrait2.jpeg'
import Bio from '../components/content/Bio'

function About() {
  return (
    <section className="p-md-5" id="about">
      <div className="about-container row">
        <div className="about-text col-7">
          <div className="mb-4">
            <p className="p2" style={{ display: 'inline' }}>01. </p>
            <h2 style={{ display: 'inline' }}>About Me</h2>
          </div>
          <Bio />
        </div>
        <div className="col-1"></div>
        <div className="about-image-container col-4">
          <img src={portrait2} className="about-image" />
        </div>
      </div>
    </section>
  )
}

export default About