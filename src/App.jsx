import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './NavBar'
import Hero from './Hero'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'
import Projects from './Projects'
import Footer from './Footer'
import Aku from './Projects/Aku'
import TheJourneyHome from './Projects/TheJourneyHome'
import Sonder from './Projects/Sonder'
import Sploot from './Projects/Sploot'
import OutbreakDelta from './Projects/OutbreakDelta'
import FinalYearProject from './Projects/VRProject'

function App() {
  return (
    <BrowserRouter>
        <NavBar></NavBar>

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/Aku" element={<Aku />} />
          <Route path="/projects/TheJourneyHome" element={<TheJourneyHome />} />
          <Route path="/projects/Sonder" element={<Sonder />} />
          <Route path="/projects/Sploot" element={<Sploot />} />
          <Route path="/projects/OutbreakDelta" element={<OutbreakDelta />} />
          <Route path='/projects/FinalYearProject' element={<FinalYearProject />}/>
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>

        <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
