import React from 'react'
import { footerLinks, socialMedia } from '../constants'

const Footerlinks = () => {
  return (
    <div className='flex w-full justify-between gap-[100px] relative md:flex-row flex-col'>

      <div className='flex justify-between font-Outfit text-whiteText w-[70%] flex-wrap'>
        {footerLinks.map((footerLink)=>(
          <div key={footerLink.key} 
          className='flex flex-col gap-4 md:mt-0 mt-6'>
            <h2 className='text-[24px] leading-[28px] font-[500]'>{footerLink.title}</h2>

            <ul className='gap-3 flex flex-col'>
              {footerLink.links.map((link)=> (
                <li key={link.name} className=' font-[400] text-[16px] leading-[18px] hover:text-pinkHover'>{link.name}</li>
              ))}
            </ul>

          </div>
        ))}
      </div>

      <div className='text-whiteText font-Outfit flex flex-col gap-5 '>
            <h2 className='text-[24px] leading-[28px] font-[500]'>Marketplace</h2>
            <p className='text-[14px] w-[300px]'>If you’re an NFT enthusiast or are looking to download our NFT App.</p>

            <div className='flex w-[30%]'>
              <input type="text" placeholder='Type Your Email' className='bg-cardBg text-[16px] py-[0.4rem] px-[0.6rem] rounded-l-[8px]'/>
              <button className='rounded-r-[8px] py-[0.4rem] px-[0.8rem] bg-gradient-to-r from-blue to-pinkHover'>Subscribe</button>
            </div>

            <div className='flex gap-4'>
              {socialMedia.map((social)=> (
                <div className='flex bg-cardBg p-[0.2rem] rounded-[8px] cursor-pointer'>
                  <img src={social.icon} alt="social media" className='w-[15px] h-[15px] cursor-pointer'/>
                </div>
              ))}
            </div>
          </div>

          <div className='pink__gradient absolute z-0 right-0 bottom-0 rounded-full w-[40%] h-[40%]'/>
    </div>
  )
}

export default Footerlinks