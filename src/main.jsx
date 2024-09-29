import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Features from './routes/Features';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <nav>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/features">Features</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>
    </nav>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/features' element={<Features/>}/>
      </Routes>
    </BrowserRouter>
)
