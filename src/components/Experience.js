function Experience() {
  return (
    <section className="p-md-5" id="experience">
      <div className="my-4">
        <p className="p2" style={{ display: 'inline' }}>03. </p>
        <h2 style={{ display: 'inline' }}>Experience</h2>
      </div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button experience-accordion show" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <p className="p3">Junior software engineer (full time) @ Quantum Gate</p>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body experience-accordion">
              <p><strong>April 2022 - present</strong></p>
              <p>Contributing software development expertise throughout the software development lifecycle to maintain several robust, scalable web applications. Interfacing with senior software engineers, structural engineers and a UI designer to design and write clean, maintainable software for a diverse range of clients. Applying full stack expertise to produce modern, responsive designs on the front end as well as efficient business logic on the back end. Operating according to the agile methodology to provide clients&apos; work packages in an iterative and timely fashion. Working at Quantum Gate has given me an excellent introduction to the software industry as well as the opportunity to collaborate on projects in a professional setting. I&apos;m working with Python, Django, React, PHP, Laravel and many other tools.</p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed experience-accordion" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <p className="p3">Software engineer (indirect contract) @ Rbitrage</p> 
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body experience-accordion">
              <p><strong>April 2022 - present</strong></p>
              <p>Working with a small, cohesive team to build Rbitrage - an early stage startup in the crypto space. We aim to provide investment solutions to a broad range of clients. This venture has greatly developed my knowledge of cloud computing, crypto and quantitative finance. The main technologies I have used are Amazon Web Services (Lambda, Amplify, DynamoDB, IAM, etc), Python, JavaScript, React.js and Vim. See the &apos;Projects&apos; section for more information.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience