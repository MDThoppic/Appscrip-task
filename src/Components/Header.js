import React, { useState } from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import logo from '../assets/Logo.png'
import bag from '../assets/shopping-bag.png'
import user from '../assets/profile.png'
import '../Components/Header.css'
import HomeScreen from '../Screens/HomeScreen'



export function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  console.log(openMenu);

  return (
    <header className='header'>
      <div className='container'>
        <div className='row logo-content'>
          <div className=' col siteLogo'>
            <i
              className={`fa ${!openMenu ? "fa-bars" : "fa-times"}`}
              style={{ fontSize: "40px",display:'none' }}
              onClick={() => setOpenMenu(!openMenu)}
            ></i>
            <img src={logo} alt='siteLogo' width={36} height={36} />
          </div>
          <div className='col'>
            <p className='logo-text'>LOGO</p>
          </div>
          <div className='col icons'>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <img src={bag} alt='siteLogo' width={24} height={24} />
            <img src={user} alt='siteLogo' width={24} height={24} className='hide-mobile' />
            <p className='hide-mobile'>ENG <i className="fa fa-angle-down"></i></p>
          </div>
        </div>
        <div className={`nav ${openMenu ? 'show' : ''}`} style={{ textAlign: 'center' }}>
          <NavLink>
            <Link to="/shop">SHOP</Link>
            <Link to="/skill">SKILLS</Link>
            <Link to="/stories">STORIES</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT US</Link>
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default function Header() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<HomeScreen />} />
        <Route path="/shop" element={""} />
        <Route path="/skill" element={""} />
        <Route path="/stories" element={""} />
        <Route path="/about" element={""} />
        <Route path="/contact" element={""} />
      </Routes>
    </BrowserRouter>
  )
}


