import React from 'react'
import images from '../../assets/images'

const CTA = () => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-[100px] my-[4rem] '>
      <img src={images.Client1} alt="Client" className='h-[50px]' />
      <img src={images.Client2} alt="Client" className='h-[50px]'/>
      <img src={images.Client3} alt="Client" className='h-[50px]'/>
      <img src={images.Client4} alt="Client" className='h-[50px]'/>
      <img src={images.Client5} alt="Client" className='h-[50px]'/>

      <div className='bg-[#E7E7E73D] w-full h-[1px]'/>
    </div>
  )
}

export default CTA