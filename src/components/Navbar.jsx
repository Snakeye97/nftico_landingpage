import React, { useState } from 'react'
import images from '../assets/images'
import { navLinks } from '../constants'

const Navbar = () => {

  const [toggle, setToggle ] = useState(false)


  return (
    <nav className='w-full py-4 justify-between items-center bg-primary flex px-6 shadow-pinkHover shadow-navShadow'>
      <img src={images.logo} alt="logo" className='justify-start cursor-pointer'/>

      <ul className=' flex-1 md:flex hidden justify-center items-center list-none'>
        {navLinks.map((nav, index) => (
          <li key={nav.id}
          className={`font-Outfit text-whiteText font-normal text-[18px] leading-[23px] ${index=== navLinks.length - 1 ? 'mr-0' : 'mr-10'} mr-10 cursor-pointer hover:text-pinkHover`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className='flex flex-4 ml-4 justify-center items-center gap-5'>
        <input type="text" placeholder='Search' className=' xs:flex hidden bg-[#1E1B33] px-[0.6rem] py-[0.4rem] rounded-[8px]'/>
        <button type='button' className='button1 sm:flex hidden rounded-[8px] text-whiteText font-Outfit bg-gradient-to-r from-blue to-pinkHover'>Get in Touch</button>
      </div>

      <div className="md:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? images.close : images.menu} alt="menu" 
        className='w-[28px] h-[28px] object-contain' 
          onClick={() => setToggle((prev)=> !prev)}
        />
          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>

            <ul className="list-none flex justify-end items-center flex-1 flex-col">
              {navLinks.map((nav, index)=>(
                <li 
                  key={nav.id}
                  className={` font-Outfit font-normal cursor-pointer text-[16px] ${index=== navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-whiteText mr-10`}
                  ><a href={`#${nav.id}`}>{nav.title}</a></li>
              ))}
            </ul>

          </div>
        </div>

      
    </nav>
  )
}

export default Navbar