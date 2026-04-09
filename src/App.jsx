import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './NavBar'
import Hero from './Hero'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'
import Projects from './Projects'
import Footer from './Footer'


function App() {
  return (
    <BrowserRouter>
        <NavBar></NavBar>

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>

        <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
