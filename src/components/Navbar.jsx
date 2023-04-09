import React, { useState } from 'react'
import images from '../assets/images'
import { navLinks } from '../constants'

const Navbar = () => {

  const [toggle, settoggle] = useState(false)


  return (
    
    <nav className='w-full flex py-4 justify-between items-center navbar '>
      <img src={images.logo} alt="logo"  className='w-[124px] h-[35px]'/>

      <ul className='flex-1 list-none sm:flex hidden justify-center items-center z-10'>
        {navLinks.map((nav, index)=> (
          <li key={nav.id}
          className={`font-Outfit font-semibold cursor-pointer text-[18px] ${index=== navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-whiteText mr-10 hover:text-pinkHover`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className=' xs:flex hidden gap-2'>
        <input type="text" placeholder='Search' 
          className={`py-[0.4rem] px-[0.8rem] rounded-[8px] bg-[#1E1B33] border-[#E7E7E766] border-[1px]`}/>
        <button className={`py-[0.4rem] px-[.6rem] rounded-[8px] button_gradient font-Outfit text-whiteText font-noraml sm:flex hidden`}>Get in Touch</button>
      </div>

      <div className='sm:hidden flex flex-1 justify-end items center'>
        <img src={toggle? images.close:images.menu} alt="menu" 
          className='w-[24px] h-[24px] object-contain'
          onClick={()=>settoggle((prev)=>!prev)}
        />

        <div className={`${toggle ? 'flex':'hidden'} bg-mainBg rounded-xl p-6 absolute top-20 right-2 mx-4 my-4 min-w-[140px] sidebar z-[10]`}>
            <ul className='flex-1 list-none justify-center items-center'>
            {navLinks.map((nav, index)=> (
              <li key={nav.id}
              className={`font-Outfit font-semibold cursor-pointer text-[18px] ${index=== navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-whiteText mr-10 hover:text-pinkHover`}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar