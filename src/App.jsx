import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Background from "./components/Background"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
    <div>
      <Background/>
      <Navbar/>
      <Hero/>
      <Projects/>
      <Skills/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
    </>
  )
}

export default App