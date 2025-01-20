import Navbar from "./Navbar"
import Hero from "./Hero"
import Background from "./Background"
import Projects from "./Projects"
import Skills from "./Skills"
import Education from "./Education"
import Contact from "./Contact"
import Footer from "./Footer"
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