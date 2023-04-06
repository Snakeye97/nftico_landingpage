import React, { useState } from 'react';
import './Navbar.css';
import images from '../../constants/images';'./';

const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  
    return (

      <div className='app__navbar'>

        <div className="app__navbar-logo">
          <img src={images.logo} alt="Logo" />
        </div>

        <div className="app__navbar-links">
          <ul className='links'>
            <li><a href="#explore">Explore</a></li>
            <li><a href="#stat">Stats</a></li>
            <li><a href="#drop">Drop</a></li>
            <li><a href="#activity">Activity</a></li>
          </ul>
        </div>

        <div className="app__navbar-input">
          <input type="text" placeholder='Search'/>
          <button className='button1'>Get in Touch</button>
        </div>

        <div className="app__navbar-smallscreen">
          <img src={toggle ? images.close : images.menu} fontSize={27} color='#fff' onClick={()=> {setToggle((prev) => !prev)}}/>
            {toggle && (
              <div className="app__navbar-links_smallscreen">
                <ul className='links'>
                  <li><a href="#explore">Explore</a></li>
                  <li><a href="#stat">Stats</a></li>
                  <li><a href="#drop">Drop</a></li>
                  <li><a href="#activity">Activity</a></li>
                </ul>

                <button className='button1'>Get in Touch</button>
              </div>
            )}
        </div>

      </div>
    )
};

export default Navbar