import portrait from '../assets/portrait.JPG'

function About() {
  return (
    <section className="p-md-5" id="about">
      <div className="about-container row">
        <div className="about-text col-7">
          <div className="pb-4">
            <p className="p2" style={{ display: 'inline' }}>01. </p>
            <h2 style={{ display: 'inline' }}>About Me</h2>
          </div>
          <p className="p1">
            Hi! My name is John. I am a dynamic and voracious learner who is always looking for a subject to learn or a project to build. Having a naturally logical, abstract and analytical way of reasoning is what drew me to software engineering. During a full time software engineering course at General Assembly, I took to web development with brisk readiness. 
          </p>
          <p className="p1">I&apos;m now actively looking for an opportunity to prove myself as a hardworking and enthusiastic member of a development team, who is eager to develop their skills at every chance. More specifically, I&apos;m looking for a role as a backend engineer.  Some of my interests include mathematics, cryptography, Bitcoin and finance.
          </p>
        </div>
        <div className="col-1"></div>
        <div className="about-image-container col-4">
          <img src={portrait} className="about-image" />
        </div>
      </div>
    </section>
  )
}

export default About