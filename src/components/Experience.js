function Experience() {
  return (
    <section className="p-md-5" id="experience">
      <div className="my-4">
        <p className="p2" style={{ display: "inline" }}>
          03.{" "}
        </p>
        <h2 style={{ display: "inline" }}>Experience</h2>
      </div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button experience-accordion show"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <p className="p3">Software developer @ Gebler Tooth Architects</p>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body experience-accordion">
              <p className="third-text">May 2023 - present</p>
              <ul className="experience-list">
                <li className="p1">
                  Building Opera, an innovative space-planning application for
                  architects.
                </li>
                <li className="p1">
                  Spearheaded the successful implementation of a scalable,
                  cost-effective, serverless AWS solution, utilising an array of
                  AWS services including Lambda, DynamoDB,
                  API Gateway, Cognito and S3. Provisioned this infrastructure
                  with Terraform.
                </li>
                <li className="p1">
                  Held workshops to upskill other team members on using AWS.
                </li>
                <li className="p1">
                  Designed and implemented a sleek and performant frontend with
                  React, TypeScript and Tailwind.
                </li>
                <li className="p1">
                  Attended numerous product demos as the technical lead,
                  showcasing the product to a variety of stakeholders and
                  prospective clients.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button experience-accordion collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <p className="p3">
                Software engineer (indirect contract) @ Rbitrage
              </p>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body experience-accordion">
              <p className="third-text">April 2022 - December 2022</p>
              <ul className="experience-list">
                <li className="p1">
                  Collaborated closely with the co-founders to build an early
                  stage startup in the crypto space
                </li>
                <li className="p1">
                  Used services like Lambda, DynamoDB, SQS, Amplify and AppSync
                  to construct a resilient backend architecture, as well as
                  React and Tailwind to produce a modern, responsive frontend
                </li>
                <li className="p1">
                  Expanded my knowledge of financial services and quantitative
                  finance
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed experience-accordion"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <p className="p3">Junior software engineer @ Quantum Gate</p>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body experience-accordion">
              <p className="third-text">April 2022 - February 2023</p>
              <ul className="experience-list">
                <li className="p1">
                  Interfaced with senior software engineers, structural
                  engineers and a UI designer to produce and deploy clean,
                  maintainable code for a diverse range of clients
                </li>
                <li className="p1">
                  Applied full stack expertise throughout the SDLC to build
                  modern, responsive designs on the frontend and robust,
                  scalable software on the backend
                </li>
                <li className="p1">
                  Assumed the role of principle maintainer of an application
                  which tracks and manages the progress of construction projects
                </li>
                <li className="p1">
                  Operated according to the agile methodology to meet clients'
                  needs in an iterative and timely fashion
                </li>
                <li className="p1">
                  Documented all new features, tests and bug fixes in a clear,
                  concise manner
                </li>
                <li className="p1">
                  Developed with Python, Django, JavaScript, React, PHP,
                  Laravel and more
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
