// SKILL ICONS
import htmlIcon from '../assets/tech/icons8-html-5.svg'
import cssIcon from '../assets/tech/icons8-css3.svg'
import javascriptIcon from '../assets/tech/icons8-javascript.svg'
import typescriptIcon from '../assets/tech/typescript.svg'
import reactIcon from '../assets/tech/icons8-react-native.svg'
// import bootstrapIcon from '../assets/tech/bootstrap-fill.svg'
import pythonIcon from '../assets/tech/icons8-python.svg'
import djangoIcon from '../assets/tech/icons8-django.svg'
import nodeIcon from '../assets/tech/icons8-node-js.svg'
import postgresIcon from '../assets/tech/icons8-postgresql.svg'
// import githubIcon from '../assets/tech/github.svg'
import zshIcon from '../assets/tech/terminal-fill.svg'
import gitIcon from '../assets/tech/icons8-git.svg'
// import npmIcon from '../assets/tech/icons8-npm.svg'
// import herokuIcon from '../assets/tech/icons8-heroku.svg'
// import xcodeIcon from '../assets/tech/icons8-xcode.svg'
// import expressIcon from '../assets/tech/expressjs-icon.svg'
import mongodbIcon from '../assets/tech/mongodb-svgrepo-com.svg'
// import insomniaIcon from '../assets/tech/insomnia-svgrepo-com.svg'
// import cPlusPlusIcon from '../assets/tech/c-plus-plus-svgrepo-com.svg'
import bashIcon from '../assets/tech/gnubash-svgrepo-com.svg'
// import homebrewIcon from '../assets/tech/homebrew-svgrepo-com.svg'
import vscodeIcon from '../assets/tech/visual-studio-svgrepo-com.svg'
// import pipIcon from '../assets/tech/folder-python-svgrepo-com.svg'
// import cloudinaryIcon from '../assets/tech/cloudinary-svgrepo-com.svg'
// import tablePlusIcon from '../assets/tech/tableplus-icon.png'
// import cSharpIcon from '../assets/tech/icons8-c-sharp-logo.svg'
// import netlifyIcon from '../assets/tech/netlify-icon.svg'
import vimIcon from '../assets/tech/vim4.svg'
// import phpIcon from '../assets/tech/php.svg'
// import laravelIcon from '../assets/tech/laravel.svg'
import awsIcon from '../assets/tech/aws.svg'
import terraformIcon from '../assets/tech/terraform-icon.svg'
import serverlessIcon from '../assets/tech/serverless-icon.svg'
import githubActionsIcon from '../assets/tech/github-actions-icon.png'
import reduxIcon from '../assets/tech/redux-icon.svg'
import tailwindIcon from '../assets/tech/tailwind-icon.svg'

// FLAG ICONS
import ukFlag from '../assets/flags/uk-flag.svg'
import portugalFlag from '../assets/flags/portugal-flag.svg'
import spainFlag from '../assets/flags/spain-flag.png'
import thaiFlag from '../assets/flags/thaiFlag.webp'

// SOFT SKILL ICONS
import communicationIcon from '../assets/soft-skills/chat.svg'
import adaptabilityIcon from '../assets/soft-skills/toggles.svg'
import solvingIcon from '../assets/soft-skills/tools.svg'
import curiosityIcon from '../assets/soft-skills/question-circle-fill.svg'
import ideaIcon from '../assets/tech/icons8-idea.svg'

function Skills() {
  return (
    <section className="p-md-5" id="skills">
      <div className="mb-4 mt-5">
        <p className="p2" style={{ display: 'inline' }}>02. </p>
        <h2 style={{ display: 'inline' }}>Skills</h2>
      </div>
      <h3 className="">Tech</h3>
      <div className="tech-container my-5">
        <div className="skill-container width">
          <img src={awsIcon} width="100" height="100" className="colored-icon skill-icon" />
          <p className="skill-caption p2">
            AWS
          </p>
        </div>
        <div className="skill-container width">
          <img src={terraformIcon} width="100" height="100" className="colored-icon skill-icon" />
          <p className="skill-caption p2">
            Terraform
          </p>
        </div>
        <div className="skill-container width">
          <img src={serverlessIcon} width="100" height="100" className="colored-icon skill-icon" />
          <p className="skill-caption p2">
            Serverless{'\n'}Framework
          </p>
        </div>
        <div className="skill-container">
          <img src={pythonIcon} height="100" className="skill-icon" />
          <p className="skill-caption p2">
            Python
          </p>
        </div>
        <div className="skill-container">
          <img src={typescriptIcon} height="100" className="skill-icon" />
          <p className="skill-caption p2">
            TypeScript
          </p>
        </div>
        <div className="skill-container">
          <img src={javascriptIcon} height="100" className="skill-icon" />
          <p className="skill-caption p2">
            JavaScript
          </p>
        </div>
        <div className="skill-container">
          <img src={reactIcon} height="100" className="skill-icon" />
          <p className="skill-caption p2">
            React
          </p>
        </div>
        <div className="skill-container width">
          <img src={reduxIcon} width="100" height="100" className="colored-icon skill-icon" />
          <p className="skill-caption p2">
            Redux
          </p>
        </div>
        <div className="skill-container">
          <img src={htmlIcon} height="100" className="skill-icon" />
          <p className="skill-caption p2">
            HTML
          </p>
        </div>
        <div className="skill-container">
          <img src={cssIcon} height="100" className="skill-icon" />
          <p className="skill-caption p2">
            CSS
          </p>
        </div>
        <div className="skill-container width">
          <img src={tailwindIcon} width="100" height="100" className="colored-icon skill-icon" />
          <p className="skill-caption p2">
            Tailwind
          </p>
        </div>
        {/* <div className="skill-container bootstrap-icon" >
          <img src={bootstrapIcon} height="100" className="uncolored-icon skill-icon" />
          <p className="skill-caption p2">
            Bootstrap
          </p>
        </div> */}
        <div className="skill-container">
          <img src={djangoIcon} height="100" className="skill-icon" />
          <p className="skill-caption p2">
            Django
          </p>
        </div>
        <div className="skill-container">
          <img src={nodeIcon} height="100" className="skill-icon" />
          <p className="skill-caption p2">
            Node
          </p>
        </div>
        {/* <div className="skill-container">
          <img src={expressIcon} height="100" className="uncolored-icon skill-icon" />
          <p className="skill-caption p2">
            Express
          </p>
        </div> */}
        <div className="skill-container">
          <img src={mongodbIcon} height="100" className="uncolored-icon skill-icon" />
          <p className="skill-caption p2">
            Mongo
          </p>
        </div>
        {/* <div className="skill-container">
          <img src={insomniaIcon} height="100" className="uncolored-icon skill-icon" />
          <p className="skill-caption p2">
            Insomnia
          </p>
  </div> */}
        <div className="skill-container">
          <img src={postgresIcon} height="100" className="skill-icon" />
          <p className="skill-caption p2">
            PostgreSQL
          </p>
        </div>
        {/*<div className="skill-container">
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
          <img src={cSharpIcon} height="100" className="skill-icon" />
          <p className="skill-caption p2">
            C#
          </p>
        </div> */}
        <div className="skill-container">
          <img src={bashIcon} height="100" className="uncolored-icon skill-icon" />
          <p className="skill-caption p2">
            Bash
          </p>
        </div>
        <div className="skill-container">
          <img src={zshIcon} height="100" className="uncolored-icon skill-icon" />
          <p className="skill-caption p2">
            Zsh
          </p>
        </div>
        <div className="skill-container">
          <img src={gitIcon} height="100" className="skill-icon" />
          <p className="skill-caption p2">
            Git
          </p>
        </div>
        <div className="skill-container">
          <img src={githubActionsIcon} height="100" className="colored-icon skill-icon" />
          <p className="skill-caption p2">
            GitHub{'\n'}
            Actions
          </p>
        </div>
        {/* <div className="skill-container">
          <img src={githubIcon} height="100" className="uncolored-icon skill-icon" />
          <p className="skill-caption p2">
            GitHub
          </p>
        </div> */}
        {/* <div className="skill-container">
          <img src={npmIcon} height="100" className="skill-icon" />
          <p className="skill-caption p2">
            NPM
          </p>
        </div> */}
        {/* <div className="skill-container">
          <img src={homebrewIcon} height="100" className="uncolored-icon skill-icon" />
          <p className="skill-caption p2">
            Homebrew
          </p>
        </div> */}
        {/* <div className="skill-container">
          <img src={pipIcon} height="100" className="uncolored-icon skill-icon" />
          <p className="skill-caption p2">
            Pip
          </p>
        </div> */}
        {/* <div className="skill-container">
          <img src={herokuIcon} height="100" className="skill-icon" />
          <p className="skill-caption p2">
            Heroku
          </p>
        </div>
        <div className="skill-container">
          <img src={netlifyIcon} height="100" className="colored-icon skill-icon" />
          <p className="skill-caption p2">
            Netlify
          </p>
        </div> */}
        <div className="skill-container">
          <img src={vscodeIcon} height="100" className="uncolored-icon skill-icon" />
          <p className="skill-caption p2">
            VScode
          </p>
        </div>
        {/* <div className="skill-container">
          <img src={xcodeIcon} height="100" className="skill-icon" />
          <p className="skill-caption p2">
            Xcode
          </p>
        </div> */}
        <div className="skill-container">
          <img src={vimIcon} height="100" className="colored-icon skill-icon" />
          <p className="skill-caption p2">
            Vim
          </p>
        </div>
        {/* <div className="skill-container">
          <img src={phpIcon} className="colored-icon skill-icon" id="php-icon"/>
          <p className="skill-caption p2" id="php-caption">
            PHP 
          </p>
        </div> */}
        {/* <div className="skill-container">
          <img src={laravelIcon} height="100" className="colored-icon skill-icon" />
          <p className="skill-caption p2">
            Laravel
          </p>
        </div> */}
      </div>

      <h3 className="my-5">Soft Skills</h3>
      <div className="tech-container my-5">
        <div className="skill-container">
          <img src={communicationIcon} height="100" className="skill-icon uncolored-icon" />
          <p className="skill-caption p2">
            Communication
          </p>
        </div>
        <div className="skill-container">
          <img src={ideaIcon} height="100" className="skill-icon colored-icon" />
          <p className="skill-caption p2" style={{ textAlign: 'center' }}>
            Open mindedness
          </p>
        </div>
        
        <div className="skill-container">
          <img src={solvingIcon} height="100" className="skill-icon uncolored-icon" />
          <p className="skill-caption p2">
            Problem Solving
          </p>
        </div>
        <div className="skill-container">
          <img src={curiosityIcon} height="100" className="skill-icon uncolored-icon" />
          <p className="skill-caption p2">
            Curiosity
          </p>
        </div>
        <div className="skill-container">
          <img src={adaptabilityIcon} height="100" className="skill-icon uncolored-icon" />
          <p className="skill-caption p2">
            Adaptability
          </p>
        </div>
      </div>

      <h3 className="my-5">Languages</h3>
      <div className="flags-container my-5">
        <div className="skill-container">
          <img src={ukFlag} height="100" className="skill-icon" />
          <p className="skill-caption p2 language-caption">
            English (native)
          </p>
        </div>
        <div className="skill-container">
          <img src={spainFlag} height="100" className="skill-icon" />
          <p className="skill-caption p2 language-caption">
            Spanish (limited proficiency)
          </p>
        </div>
        <div className="skill-container">
          <img src={thaiFlag} height="100" className="skill-icon" />
          <p className="skill-caption p2 language-caption">
            Thai (limited proficiency)
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills
