// pass an id prop?
function FeaturedProject({ data, image }) {
  const finalIndex = data.technologies.length - 1;

  return (
    <section id="featured-one">
      <div className="featured-container">
        <img src={image} className="featured-image-container first" />
        <div className="featured-info first">
          <p className="p2 featured-header">Featured project</p>
          <h3>{data.title}</h3>
          <p className="info-card p1 p-2 first">{data.content}</p>
          <ul className="p1 project-tech first">
            {data.technologies.map((tech, index) => (
              <li className="tech-list-item first" key={index}>
                {tech}
                {finalIndex !== index && <span> &#8226; </span>}
              </li>
            ))}
          </ul>
          <div className="featured-links-container">
            {data.github && (
              <a
                href={data.github}
                className="icon-link first me-3"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>
            )}
            {data.live && (
              <a
                href={data.live}
                className="icon-link first"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-box-arrow-up-right"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProject;
