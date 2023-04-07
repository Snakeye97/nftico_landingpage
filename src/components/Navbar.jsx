import React from 'react'
import images from '../assets/images'
import { navLinks } from '../constants'

const Navbar = () => {
  return (
    <nav className='w-full py-4 justify-between items-center bg-primary flex px-6 shadow-pinkHover'>
      <img src={images.logo} alt="logo" className='justify-start'/>

      <ul className=' flex-1 sm:flex hidden justify-center items-center list-none'>
        {navLinks.map((nav, index) => (
          <li key={nav.id}
          className={`font-Outfit text-whiteText font-normal text-[18px] leading-[23px] ${index=== navLinks.length - 1 ? 'mr-0' : 'mr-10'} mr-10 cursor-pointer hover:text-pinkHover`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className='flex justify-end items-center gap-5'>
        <input type="text" placeholder='Search' className='xs:flex hidden bg-[#1E1B33] px-[0.6rem] py-[0.4rem] rounded-[8px]'/>
        <button type='button' className='button1 sm:flex hidden rounded-[8px] text-whiteText font-Outfit bg-bgGradient'>Get in Touch</button>
      </div>

      div
    </nav>
  )
}

export default Navbar