
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
import { Services } from './pages/Services'
import { ServicesCards } from './components/ServicesCards'
import { Contactus } from './pages/Contactus'
import { Aboutus } from './pages/Aboutus'
import Portfolio from './pages/Portfolio'
function App() {
 
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
          <Route path="/aboutus" element={<Aboutus></Aboutus>}></Route>
          <Route path="/contactus" element={<Contactus></Contactus>}></Route>
        </Routes>
    </BrowserRouter>
    
   
  )
}

export default App
