import React from 'react'
import {TopCollec } from '../../components'

const Collection = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full my-[3rem]' id='drop'>
      <div className='flex items-center justify-between w-full md:flex-row flex-col gap-5'>
        <div className='flex'>
          <div className='flex flex-col items-center justify-center relative'>
            <h1 className='bg-gradient-to-r from-blue to-pinkHover text-transparent bg-clip-text font-Outfit font-bold leading-[130px] md:text-[104px] text-[74px]'>NFTs</h1>
            <p className='text-whiteText font-Outfit md:text-[36px] text-[26px] absolute font-semibold top-[50%] xs:w-[250px] w-[180px]'>Top Collections</p>
      </div>
        </div>

        <div className='flex items-center justify-center gap-2'>
          <button className='bg-cardBg rounded-[8px] px-[1rem] py-[0.6rem] font-Outfit text-whiteText font-semibold text-[14px] border-[1px] border-[#E7E7E766] hover:bg-gradient-to-r from-blue to-pinkHover hover:border-none'>1 DAY</button>
          <button className='bg-cardBg rounded-[8px] px-[1rem] py-[0.6rem] font-Outfit text-whiteText font-semibold text-[14px] border-[1px] border-[#E7E7E766] hover:bg-gradient-to-r from-blue to-pinkHover hover:border-none'>7 DAYS</button>
          <button className='bg-cardBg rounded-[8px] px-[1rem] py-[0.6rem] font-Outfit text-whiteText font-semibold text-[14px] border-[1px] border-[#E7E7E766] hover:bg-gradient-to-r from-blue to-pinkHover hover:border-none'>30 DAYS</button>
        </div>

        <div>
          <button className='bg-cardBg rounded-[8px] px-[1rem] py-[0.6rem] font-Outfit text-whiteText font-semibold text-[14px] border-[1px] border-[#E7E7E766]'>Etherium</button>
        </div>
      </div>

      <div className='flex flex-wrap'>
        <TopCollec/>
      </div>
    </div>
  )
}

export default Collection