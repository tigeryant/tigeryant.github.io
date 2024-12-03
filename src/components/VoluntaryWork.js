import ndcLogo from "../assets/ndcLogo.jpeg";
import devoxxLogo from "../assets/devoxxLogo.png";
import acmLogo from "../assets/acmLogo.png";

function VoluntaryWork() {
  return (
    <section className="p-md-5" id="voluntaryWork">
      <div className="my-4">
        <p className="p2" style={{ display: "inline" }}>
          08.{" "}
        </p>
        <h2 style={{ display: "inline" }}>Voluntary Work</h2>
      </div>
      <div className="certification-container mb-3">
        <img className="volunteer-image" src={ndcLogo}></img>
        {/* may need to remove these unecessary classes - see the css too */}
        <div className="ms-4 pt-3">
          <p className="p1 bold mb-1">NDC London | Jan 2023</p>
          <p className="p1">
            Volunteered at NDC London, a conference for software engineers
          </p>
        </div>
      </div>
      <div className="certification-container mb-3">
        <img className="volunteer-image" src={devoxxLogo}></img>
        {/* may need to remove these unecessary classes - see the css too */}
        <div className="ms-4 pt-3">
          <p className="p1 bold mb-1">Devoxx | May 2022</p>
          <p className="p1">
            Volunteered at Devoxx, a conference for software developers to come
            together to discuss the latest technology and ideas
          </p>
        </div>
      </div>
      <div className="certification-container mb-3">
        <img className="volunteer-image" src={acmLogo}></img>
        {/* may need to remove these unecessary classes - see the css too */}
        <div className="ms-4 pt-3">
          <p className="p1 bold mb-1">
            Auckland City Mission (New Zealand) | 2017
          </p>
          <p className="p1">
            Volunteer driver for the detox unit of the Auckland City Mission
          </p>
        </div>
      </div>
    </section>
  );
}

export default VoluntaryWork;
