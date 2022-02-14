import htmlIcon from '../assets/tech/icons8-html-5.svg'
import cssIcon from '../assets/tech/icons8-css3.svg'
import javascriptIcon from '../assets/tech/icons8-javascript.svg'
import reactIcon from '../assets/tech/icons8-react-native.svg'
import pythonIcon from '../assets/tech/icons8-python.svg'
import djangoIcon from '../assets/tech/icons8-django.svg'
import nodeIcon from '../assets/tech/icons8-node-js.svg'
import postgresIcon from '../assets/tech/icons8-postgresql.svg'
import gitIcon from '../assets/tech/icons8-git.svg'
import npmIcon from '../assets/tech/icons8-npm.svg'
import herokuIcon from '../assets/tech/icons8-heroku.svg'
import xcodeIcon from '../assets/tech/icons8-xcode.svg'
import ideaIcon from '../assets/tech/icons8-idea.svg'
import expressIcon from '../assets/tech/expressjs-icon.svg'
import mongodbIcon from '../assets/tech/mongodb-svgrepo-com.svg'
import insomniaIcon from '../assets/tech/insomnia-svgrepo-com.svg'
import cPlusPlusIcon from '../assets/tech/c-plus-plus-svgrepo-com.svg'
import bashIcon from '../assets/tech/gnubash-svgrepo-com.svg'
import homebrewIcon from '../assets/tech/homebrew-svgrepo-com.svg'
import vscodeIcon from '../assets/tech/visual-studio-svgrepo-com.svg'
import pipIcon from '../assets/tech/folder-python-svgrepo-com.svg'
import cloudinaryIcon from '../assets/tech/cloudinary-svgrepo-com.svg'
import tablePlusIcon from '../assets/tech/tableplus-icon.png'
import cSharpIcon from '../assets/tech/icons8-c-sharp-logo.svg'
import netlifyIcon from '../assets/tech/netlify-icon.svg'

function Skills() {
  return (
    <section className="p-5" id="skills">
      <p className="p2" style={{ display: 'inline' }}>02. </p>
      <h2 style={{ display: 'inline' }}>Skills</h2>
      <h3>Tech</h3>
      {/* ICONS */}
      <div className="tech-container">
        <div className="skill-container">
          <img src={htmlIcon} height="100" className="skill-icon"/>
          <p className="skill-caption p2">
            HTML
          </p>  
        </div>
        <div className="skill-container">
          <img src={cssIcon} height="100" className="skill-icon"/>
          <p className="skill-caption p2">
            CSS
          </p>  
        </div>
        <div className="skill-container">
          <img src={javascriptIcon} height="100" className="skill-icon"/>
          <p className="skill-caption p2">
            JavaScript
          </p>  
        </div>
        <div className="skill-container">
          <img src={reactIcon} height="100" className="skill-icon"/>
          <p className="skill-caption p2">
            React
          </p>  
        </div>
        <div className="skill-container">
          <i className="bi bi-bootstrap-fill icon skill-icon"></i>
          <p className="skill-caption p2">
            Bootstrap
          </p>  
        </div>
        <div className="skill-container">
          <img src={pythonIcon} height="100" className="skill-icon"/>
          <p className="skill-caption p2">
            Python
          </p>  
        </div>
        <div className="skill-container">
          <img src={djangoIcon} height="100" className="skill-icon"/>
          <p className="skill-caption p2">
            Django
          </p>  
        </div>
        <div className="skill-container">
          <img src={nodeIcon} height="100" className="skill-icon"/>
          <p className="skill-caption p2">
            Node
          </p>  
        </div>
        <div className="skill-container">
          <img src={expressIcon} height="100" className="uncolored-icon skill-icon" />
          <p className="skill-caption p2">
            Express
          </p>  
        </div>
        <div className="skill-container">
          <img src={mongodbIcon} height="100" className="uncolored-icon skill-icon" />
          <p className="skill-caption p2">
            Mongo
          </p>  
        </div>
        <div className="skill-container">
          <img src={insomniaIcon} height="100" className="uncolored-icon skill-icon" />
          <p className="skill-caption p2">
            Insomnia
          </p>  
        </div>
        <div className="skill-container">
          <img src={postgresIcon} height="100" className="skill-icon"/>
          <p className="skill-caption p2">
            PostgreSQL
          </p>  
        </div>
        <div className="skill-container">
          <img src={tablePlusIcon} height="100" className="colored-icon skill-icon" />
          <p className="skill-caption p2">
            TablePlus
          </p>  
        </div>
        <div className="skill-container">
          <img src={cloudinaryIcon} height="100" className="colored-icon skill-icon" />
          <p className="skill-caption p2">
            Cloudinary
          </p>  
        </div>
        <div className="skill-container">
          <img src={cPlusPlusIcon} height="100" className="uncolored-icon skill-icon" />
          <p className="skill-caption p2">
            C++
          </p>  
        </div>
        <div className="skill-container">
          <img src={cSharpIcon} height="100" className="skill-icon"/>
          <p className="skill-caption p2">
            C#
          </p>  
        </div>
        <div className="skill-container">
          <img src={bashIcon} height="100" className="uncolored-icon skill-icon" />
          <p className="skill-caption p2">
            Bash
          </p>  
        </div>
        <div className="skill-container">
          <i className="bi bi-terminal-fill icon skill-icon"></i>
          <p className="skill-caption p2">
            Zsh
          </p>  
        </div>
        <div className="skill-container">
          <img src={gitIcon} height="100" className="skill-icon"/>
          <p className="skill-caption p2">
            Git
          </p>  
        </div>
        <div className="skill-container">
          <i className="bi bi-github icon skill-icon"></i>
          <p className="skill-caption p2">
            GitHub
          </p>  
        </div>
        <div className="skill-container">
          <img src={npmIcon} height="100" className="skill-icon"/>
          <p className="skill-caption p2">
            npm
          </p>  
        </div>
        <div className="skill-container">
          <img src={homebrewIcon} height="100" className="uncolored-icon skill-icon" />
          <p className="skill-caption p2">
            Homebrew
          </p>  
        </div>
        <div className="skill-container">
          <img src={pipIcon} height="100" className="uncolored-icon skill-icon" />
          <p className="skill-caption p2">
            Pip
          </p>  
        </div>
        <div className="skill-container">
          <img src={herokuIcon} height="100" className="skill-icon"/>
          <p className="skill-caption p2">
            Heroku
          </p>  
        </div>
        <div className="skill-container">
          <img src={netlifyIcon} height="100" className="colored-icon skill-icon" />
          <p className="skill-caption p2">
            Netlify
          </p>  
        </div>
        <div className="skill-container">
          <img src={vscodeIcon} height="100" className="uncolored-icon skill-icon" />
          <p className="skill-caption p2">
            VScode
          </p>  
        </div>
        <div className="skill-container">
          <img src={xcodeIcon} height="100" className="skill-icon"/>
          <p className="skill-caption p2">
            Xcode
          </p>  
        </div>
      </div>

      <h3>Languages</h3>

      <h3>Soft Skills</h3>
      <p className="text-light">communication, adaptability, problem solving, curiousity, open-mindedness</p>
      <i className="bi bi-chat icon"></i>
      <i className="bi bi-toggles icon"></i>
      <i className="bi bi-tools icon"></i>
      <i className="bi bi-question-circle-fill icon"></i>
      <img src={ideaIcon} height="100" />
    </section>
  )
}

export default Skills