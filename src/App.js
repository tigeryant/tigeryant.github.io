import React from 'react'

import NavBar from './components/NavBar'
import Side from './components/Side'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Publications from './components/Publications'

function App() {

  return (
    <>
      <NavBar />
      <Side />
      <div className="container-lg">
        <div className="row justify-content-center">
          <div className="col-11">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Certifications />
            <Education />
            <Projects />
            <Publications />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
