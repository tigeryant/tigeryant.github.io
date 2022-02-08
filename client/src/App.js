import React from 'react'

import NavBar from './components/NavBar'
import Side from './components/Side'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

// placeholder components added - figure out what's next!!


function App() {

  return (
    <>
      <NavBar />
      <Side />
      <div className="container-lg">
        <div className="row justify-content-center">
          <div className="col-9">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
