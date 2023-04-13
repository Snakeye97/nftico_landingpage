import React from 'react'
import images from '../../assets/images'

const Wallet = () => {
  return (
    <div>

      <div className='relative flex md:flex-row flex-col'>
        <img src={images.Diamond} alt="diamond" />

        <div className='justify-center flex font-Outfit text-whiteText flex-col flex-wrap gap-8'>
          <h2 className='sm:text-[34px] text-[24px] font-semibold'>Create, Sell well & Collect Your Best Very Fast NFTs.</h2>
          <p className='text-[#C0C0C0] text-[14px]'>Create, Sell well & Collect Your Best Very Fast NFTs.The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless</p>
          <div>
            <button className='justify-start bg-gradient-to-r from-blue to-pinkHover py-[0.4rem] px-[0.8rem] rounded-[8px]'>Connect Wallet</button>
          </div>
        </div>

        <div className='pink__gradient z-0 top-[20%] absolute w-[40%] h-[40%]'/>
      </div>

    </div>
  )
}

export default Wallet