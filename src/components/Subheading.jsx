import React from 'react'

const Subheading = ({title,text}) => {
  return (
    <div className='flex flex-col items-center justify-center relative'>
      <h1 className='bg-gradient-to-r from-blue to-pinkHover text-transparent bg-clip-text font-Outfit font-bold leading-[130px] text-[104px]'>{title}</h1>
      <p className='text-whiteText font-Outfit text-[40px] absolute font-semibold top-[45%]'>{text}</p>
    </div>
  )
}

export default Subheading