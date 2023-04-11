import React from 'react'
import { topCollection } from '../constants'
import images from '../assets/images'

const TopCollec = () => {
  return (
    <div className='flex flex-col '>
      <div className='flex flex-wrap items-center justify-center m-[4rem] gap-4'>
        {topCollection.map((Top)=> (
          <div className='p-[1px] w-[350px] h-[80px] bg-transparent hover:bg-gradient-to-r from-blue to-pinkHover rounded-[10px]'>
            <div key={Top.id}
              className='  text-whiteText w-full h-full flex gap-3 bg-cardBg rounded-[10px] items-center justify-start p-[1rem]'>
              <img src={Top.Image} alt="image" className='w-[50px] h-[50px] rounded-full '/>

              <div className='gap-2 flex flex-col'>
                <div className='flex items-center'>
                  <h2 className='font-Outfit text-[16px] w-[200px]'>{Top.title}</h2>
                  <p className='font-Outfit text-[12px] w-[50px] text-[#03DB80]'>{Top.text}</p>
                </div>

                <div className='flex justify-between'>
                  <p className='flex font-Outfit text-[12px] gap-1'><img src={images.Flow} alt="" />{Top.flow}</p>
                  <p className='font-Outfit text-[12px]'>{Top.percent}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='flex items-center justify-center'>
        <button className='bg-cardBg rounded-[8px] px-[1rem] py-[0.6rem] font-Outfit text-whiteText font-semibold text-[14px] border-[1px] border-[#E7E7E766] hover:bg-gradient-to-r from-blue to-pinkHover hover:border-none'>See All Collections</button>
        </div>
    </div>
  )
}

export default TopCollec