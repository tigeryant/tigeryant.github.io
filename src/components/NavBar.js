import logo from "../assets/logo.png";

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-md navbar-dark bg-dark fixed-top"
      aria-label="Fourth navbar example"
    >
      <div className="container-lg">
        <a className="navbar-brand ms-4 ms-lg-0" href="#">
          <img src={logo} className="logo"></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample04"
          aria-controls="navbarsExample04"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link p1" aria-current="page" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link p1" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link p1" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link p1" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link p1" href="#certifications">
                Certifications
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link p1" href="#education">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link p1" href="#publications">
                Publications
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link p1" href="#voluntaryWork">
                Voluntary Work
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link p1" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
