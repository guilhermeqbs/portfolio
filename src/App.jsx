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
    <div className="font-figtree  w-full flex flex-col items-center justify-center bg-primary text-secondary bg-gradient-to-b  from-primary/5 to-primary/2 bg-opacity-80 backdrop-blur ">
      <section className=' flex flex-col items-center min-h-screen w-full pt-20'>
        <Avatar />
        <Links /> 
        <Description />
      </section>
      <section id="about" className='flex flex-col items-center min-h-screen w-full pt-20'>
        <About />

      </section>
      <section className='flex flex-col items-center min-h-screen w-full pt-20'>
        <Career />
        <Education />

      </section>
      <section className=' min-h-screen w-full pt-20'>
        <Skills />
        <Projects />
      </section>
    </div>
  )
}

export default App
