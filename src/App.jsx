import { Route,Routes } from "react-router-dom"
import Transfer from "./components/Transfer"
import Contact from "./components/Contact"

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Transfer />} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    </>
  )
}

export default App