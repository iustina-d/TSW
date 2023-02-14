import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/pages/Home"
import Chichen_Itza from "./components/pages/Chichen_Itza"
import Christ_The_Redeemer from "./components/pages/Christ_The_Redeemer"
import Colosseum from "./components/pages/Colosseum"
import Great_Wall from "./components/pages/Great_Wall"
import Machu_Picchu from "./components/pages/Machu_Picchu"
import Petra from "./components/pages/Petra"
import Taj_Mahal from "./components/pages/Taj_Mahal"
import Footer from "./components/Footer"
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Chichen_Itza" element={<Chichen_Itza />} />
        <Route path="/Christ_The_Redeemer" element={<Christ_The_Redeemer />} />
        <Route path="/Colosseum" element={<Colosseum />} />
        <Route path="/Great_Wall" element={<Great_Wall />} />
        <Route path="/Machu_Picchu" element={<Machu_Picchu />} />
        <Route path="/Petra" element={<Petra />} />
        <Route path="/Taj_Mahal" element={<Taj_Mahal />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
