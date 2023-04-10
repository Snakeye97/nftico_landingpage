import React from 'react';
import { Subheading } from '../../components';
import { dropItems } from '../../constants';


const Drop = () => {
  return (
    <div className='flex flex-1 flex-col'>
      <Subheading title='NFTs' text='Selected notable drops'/>


        {/* Drop container  */}
      <div className='flex flex-wrap flex-row gap-5 flex-1 items-center justify-center m-[3rem] z-[5]'>
      {dropItems.map((Drops)=>(
        <div key={Drops.id} className='w-[250px] bg-cardBg p-[0.7rem] rounded-[8px] items-center justify-center'>
          <img src={Drops.Image} alt="img" className='rounded-[8px] aspect-square cursor-pointer'/>

          <div className='flex flex-1 items-center justify-between mt-[1rem]'>
            <h2 className='font-Outfit text-whiteText text-[18px] font-normal'>{Drops.title}</h2>
            <p className='flex gap-2 text-whiteText'><img src={Drops.likeImg} alt="img" className='text-[pinkHover]' />{Drops.likes}</p>
          </div>

          <div className='mt-[0.5rem] flex flex-1 items-center justify-between'>
            <p className='flex gap-1 font-Outfit font-normal text-whiteText text-[14px]'><img src={Drops.flowImg} alt="img" />{Drops.flow}</p>
            <img src={Drops.people} alt="people" className='cursor-pointer'/>
          </div>

          <button className='items-center justify-center bg-transparent border-[1px] border-[#E7E7E766] w-full mt-[1.4rem] hover:bg-gradient-to-r from-blue to-pinkHover rounded-[8px] p-[0.2rem] hover:border-none text-whiteText font-Outfit font-semibold'>Live Now</button>
        </div>
      ))}
    </div>      

    <div className='pink__gradient w-[40%] h-[40%] absolute
    z-0 rounded-full right-0'/>
      
    </div>
  )
}

export default Drop