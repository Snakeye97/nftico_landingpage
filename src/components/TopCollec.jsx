import React from 'react'
import { topCollection } from '../constants'
import images from '../assets/images'

const TopCollec = () => {
  return (
    <div>
      <div className='flex flex-wrap items-center justify-center m-[4rem] gap-6'>
        {topCollection.map((Top)=> (
          <div key={Top.id}
            className='w-[320px] h-[80px] text-whiteText flex gap-3 bg-cardBg rounded-[8px] items-center justify-center top__border'>
            <img src={Top.Image} alt="image" className='w-[50px] h-[50px] rounded-full '/>

            <div>
              <div className='flex justify-between]'>
                <h2>{Top.title}</h2>
                <p>{Top.text}</p>
              </div>

              <div className='flex justify-between'>
                <p className='flex'><img src={images.Flow} alt="" />{Top.flow}</p>
                <p>{Top.percent}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopCollec