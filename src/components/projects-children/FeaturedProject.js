// pass an id prop?
function FeaturedProject({ data, image, index }) {
  const finalIndex = data.technologies.length - 1
  let textLeft = null
  // let textLeft = null

  if (!(index % 2)) {
    // index is even - render text on right (like 'first' class)
    // rendering occured based on which classes are used
    textLeft = false
  } else {
    // index is odd - render text on left (like 'second' class)
    textLeft = true
  }

  return (
    <section id="featured-one">
      <div className={`featured-container ${textLeft ? 'second' : ''}`}>
        {/* <div className="featured-image-container" style={{ backgroundImage: 'url(' + path + ')' }} ></div> */}
        {!textLeft &&
          <img src={image} className={`featured-image-container ${textLeft ? 'second' : ''}`} />
        }
        {/* <img src={require(`../../assets/${data.image}`)} alt="Img" className="featured-image-container" /> */}
        {/* <img src={require(`../../assets/${image}`)} alt="Img" className="featured-image-container" /> */}
        {/* <img src={'../../assets/' + image } className="featured-image-container" /> */}
 
        <div className={`featured-info ${textLeft ? 'second' : ''}`}>
          <p className="p2 featured-header">Featured project</p>
          <h3>{ data.title }</h3>
          <p className={`info-card p1 p-2  ${textLeft ? 'second' : 'first'}`}>{ data.content }</p>
          <ul className={`p1 project-tech ${textLeft ? 'second' : ''}`}>
            {data.technologies.map((tech, index) => {
              return (
                <li className={`tech-list-item ${textLeft ? 'second' : ''}`} key={index}>{ tech } 
                  {(finalIndex !== index) && <span> &#8226; </span>} 
                </li>
              )
            })}
          </ul>
          <div className="featured-links-container mb-md-4 ms-md-4">
            {data.github && <a href={data.github} className={`icon-link ${textLeft ? 'second me-3' : 'first mb-4 me-4'}`} target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>}
            {data.live && <a href={data.live} className={`icon-link ${textLeft ? 'second' : 'first'}`} target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-right"></i></a>}
          </div>
        </div>
        {/* conditionally render the featured image container here */}
        {textLeft &&
          <img src={image} className={`featured-image-container ${textLeft ? 'second' : ''}`} />
        }
      </div>
    </section>
  )
}

export default FeaturedProject