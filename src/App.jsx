import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Background from "./components/Background"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
//import About from "./About"

const App = () => {
  return (
    <>
    <Background/>
      <Navbar/>
      <Hero/>
      <Projects/>
      {/* <About/> */}
      <Skills/>
      <Education/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App