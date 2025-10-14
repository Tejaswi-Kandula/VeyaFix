import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import Booking from './components/Booking'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
