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

function Skills() {
  return (
    <section className="p-5" id="skills">
      <h3 className="text-light">Skills</h3>
      <h4 className="text-light">Tech</h4>
      {/* ICONS */}
      <img src={htmlIcon} height="100"/>
      <img src={cssIcon} height="100"/>
      <img src={javascriptIcon} height="100"/>
      <img src={reactIcon} height="100"/>
      <i className="bi bi-bootstrap-fill icon"></i>
      <img src={pythonIcon} height="100" />
      <img src={djangoIcon} height="100" />
      <img src={nodeIcon} height="100" />
      <img src={expressIcon} height="100" className="uncolored-icon"/>
      <img src={mongodbIcon} height="100" className="uncolored-icon" />
      <img src={insomniaIcon} height="100" className="uncolored-icon" />
      <img src={postgresIcon} height="100" />
      <img src={tablePlusIcon} height="100" className="colored-icon" />
      <img src={cloudinaryIcon} height="100" className="colored-icon" />
      <img src={cPlusPlusIcon} height="100" className="uncolored-icon" />
      <img src={cSharpIcon} height="100" />
      <img src={bashIcon} height="100" className="uncolored-icon" />
      <i className="bi bi-terminal-fill icon"></i>
      <img src={gitIcon} height="100" />
      <i className="bi bi-github icon"></i>
      <img src={npmIcon} height="100" />
      <img src={homebrewIcon} height="100" className="uncolored-icon" />
      <img src={pipIcon} height="100" className="uncolored-icon" />
      <img src={herokuIcon} height="100" />
      <img src={vscodeIcon} height="100" className="uncolored-icon" />
      <img src={xcodeIcon} height="100" />

      <p className="text-light">languages</p>

      <h4 className="text-light">Soft Skills</h4>
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