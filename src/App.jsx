import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import './App.css'
import NavBar from './NavBar'
import Hero from './Hero'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'
import Projects from './Projects'


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
    </BrowserRouter>
  )
}

export default App
