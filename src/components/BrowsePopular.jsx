import React from 'react'
import { browse } from '../constants'

const BrowsePopular = () => {
  return (
    <div>

        <div className='flex items-center justify-center gap-4 flex-wrap'>
          {browse.map((popular) => (
            <div className='flex items-center justify-center p-[1px] rounded-[8px] bg-trasnsparent hover:bg-gradient-to-r from-blue to-pinkHover'>
              <div className='bg-cardBg p-[1rem] rounded-[8px]'>
                <img src={popular.mImg} alt="img" className='w-[220px] h-[200px] rounded-[8px] hover:opacity-[0.5]'/>

                <div className='mt-[1rem] text-whiteText font-Outfit'>
                  <h2 className='font-semibold'>{popular.title}</h2>

                  <div className='flex items-center justify-between mt-[5px]'>
                    <p className='text-[#03DB80CC] text-[12px] flex gap-1 font-normal'><img src={popular.eImg} alt="img" />From<span className='font-semibold'>{popular.eText}</span></p>
                    <p className='flex gap-1 items-center justify-center text-[12px]'><img src={popular.lImg} alt="img" className='w-[10px] h-[10px]' />{popular.lText}</p>
                  </div>

                  <div className='bg-[#e7e7e766] w-[100%] h-[1px] my-[15px]' />
                  <button className='border-[#FFFFFF] border-[0.5px] bg-transparent px-[0.6rem] py-[0.3rem] rounded-[8px] hover:bg-gradient-to-r from-blue to-pinkHover hover:border-none'>Place Bid</button>
                </div>
              </div>
            </div>
          ))}
        </div>
  
    </div>
  )
}

export default BrowsePopular