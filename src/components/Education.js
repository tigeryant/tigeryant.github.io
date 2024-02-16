// add imports for ARU and General Assembly logos
import generalAssemblyLogo from "../assets/generalAssemblyLogo.png";
import aruLogo from "../assets/aruLogo.svg";

function Education() {
  return (
    <section className="p-md-5" id="education">
      <div className="my-4">
        <p className="p2" style={{ display: "inline" }}>
          04.{" "}
        </p>
        <h2 style={{ display: "inline" }}>Education</h2>
      </div>
      <div className="certification-container">
        <img className="certificate-image" src={generalAssemblyLogo}></img>
        {/* may need to remove these unecessary classes - see the css too */}
        <div className="certificate-caption ms-4">
          <p className="p1 certificate-title bold">
            General Assembly Oct 2021 - Jan 2022
          </p>
          <p className="p1 italic">Software Engineering Immersive</p>
          <p className="p1">
            12 week course that developed my skills in full stack development,
            with a focus on MERN, Python, JavaScript and Django. Took part in
            daily stand-ups, daily homework, and both individual and
            collaborative projects throughout.
          </p>
        </div>
      </div>
      <div className="certification-container mt-5">
        <img className="certificate-image" src={aruLogo}></img>
        {/* may need to remove these unecessary classes - see the css too */}
        <div className="certificate-caption ms-4">
          <p className="p1 certificate-title bold">
            Anglia Ruskin University | 2019 - 2021
          </p>
          <p className="p1 italic">
            Computer Science - BEng (Hons) (completed 2 years) - Cambridge
          </p>
          <p className="p1">
            Modules: Core Mathematics for Computing, Introduction to
            Programming, Interaction and Design, Operating Systems, Network
            Routing and Digital Security.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
