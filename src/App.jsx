import './App.css'

import Avatar from './components/avatar/index.jsx'
import Description from './components/description/index.jsx'
import Links from './components/links/index.jsx'
import About from './components/about/index.jsx'
import Career from './components/career/index.jsx'
import Education from './components/education/index.jsx'
import Skills from './components/skills/index.jsx'
import Projects from './components/projects/index.jsx'

function App() {

  return (
    <div className="font-figtree w-full flex flex-col items-center justify-center bg-primary text-secondary ">

      <section id="home" className='flex flex-col items-center min-h-screen w-full pt-20
      bg-gradient-to-t from-primary/90 via-primary/70 to-secondary/10 bg-opacity-80 backdrop-blur'>
        <Avatar />
        <Links /> 
        <Description />
      </section>
      
      <section id="about" className='flex flex-col items-center min-h-screen w-full pt-20 
      '>
        <About />
         
      </section>
      
      <section id="career" className='flex flex-col items-center min-h-screen w-full pt-20'>
        <Career />
        <Education />
      </section>
      
      <section id="skills" className='min-h-screen w-full pt-20'>
        <Skills />
      </section>
      
      <section id="projects" className='min-h-screen w-full pt-20'>
        <Projects />
      </section>
    </div>
  )
}

export default App
