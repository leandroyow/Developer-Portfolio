import Navbar from './components/navbar'
import './App.css'
import Hero from './components/hero-section'
import Stacks from './components/stacks-section'
import Projects from './components/projects-section'
import Contact from './components/contact'

export default function App() {

  return (
  <>
    <Navbar />
    <Hero />
    <Stacks />
    <Projects />
    <Contact />
  </>
  )
}

