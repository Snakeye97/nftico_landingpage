import React, { useState } from 'react'
import './Navbar.css'
import Logo from '../../assets/LOGO.png'
import { HiMenuAlt3 } from "react-icons/hi"
import {CgClose} from "react-icons/cg"

const Navbar = () => (

    /* const [toggleMenu, setToggleMenu] = useState(false); */

    <div className='app__navbar'>

      <div className="app__navbar-logo">
        <img src={Logo} alt="" />
      </div>

      <div className="app__navbar-links">
        <ul>
          <li><a href="#explore">Explore</a></li>
          <li><a href="#stat">Stats</a></li>
          <li><a href="#drop">Drop</a></li>
          <li><a href="#activity">Activity</a></li>
        </ul>
      </div>

      <div className="app__navbar-input">
        <input type="text" placeholder='Search'/>
        <button>Get in Touch</button>
      </div>

      <div className="app__navbar-smallscreen">
      {}
      </div>

    </div>
  )

export default Navbar