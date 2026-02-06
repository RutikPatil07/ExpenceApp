import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './About.jsx'
import Home from './Home.jsx'
import Contact from './Contact.jsx'
import NavScroll from './NavScroll.jsx'
import Service from './Service.jsx'
import API from './API.jsx'

export default function App() {
  return (
    <Router>
      <NavScroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ser" element={<Service />} />
        <Route path="/api" element={<API />} />
      </Routes>
    </Router>
  )
}
