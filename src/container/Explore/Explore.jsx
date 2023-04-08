import React from 'react'
import styles from '../../style'
import images from '../../assets/images'

const Explore = () => {
  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingY} relative`}>
      {/* text Container */}
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 z-1`}>
        <h2 className='text-whiteText font-Outfit font-semibold sm:text-[54px] text-[44px]'>Discover, collect, and sell <br className='sm:flex hidden'/> extraordinary <span className="text-pinkHover">NFTs</span></h2>
        <p className='text-whiteText max-w-[470px] font-normal text-[20px] font-Outfit'>Our marketplace is the world’s first and largest NFT market for independent creators worldwide </p>

        <div className='mt-4 flex gap-5'>
          <button className='py-[.4rem] px-[.6rem] rounded-[8px] button_gradient font-Outfit text-whiteText font-noraml'>Explore</button>
          <button className='bg-[#1E1B33] border-[1px] border-[#E7E7E766] py-[.4rem] px-[.6rem] rounded-[8px] font-Outfit text-whiteText font-normal hover:bg-transparent'>Create</button>
        </div>

        <div className='mt-4 flex gap-4 items-center'>
          <img src={images.play} alt="play" />
          <p className='font-Outfit text-whiteText  font noraml'>Learn more about Nftico</p>
        </div>
      </div>

      {/* img container */}
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={images.Homeimg1} alt="img" 
          className='w-[450px] h-[600px] object-contain'
        />
        <div className='bg-primary rounded-full h-[60px] w-[60px] flex items-center justify-center absolute top-50 left-[50px]'>
          <img src={images.arrow} alt="arrow" className='w-[40px]'/>
        </div>
      </div>

      <div className='absolute z-[0] w-[40%] h-[40%] pink__gradient top-0 left-0'/>
      <div className='w-[12px] h-[12px] bg-purpleD absolute top-[20%] left-[20%] rotate-[-45deg] opacity-[.8] md:flex hidden'/>
      <img src={images.HomeHexa} alt="hexa" className='absolute top-30 left-[50%]' />
      <div className='absolute z-[0] bg-orangeD w-[12px] h-[12px] rotate-[-45deg] opacity-[.8] bottom-[25%] left-[30%] md:flex hidden'/>

      <div className='absolute bottom-[10%] flex gap-1 left-[50%]'>
        <div className='divGradient w-[40px] h-[8px] rounded-full'/>
        <div className='bg-whiteText w-[15px] h-[8px] rounded-full'/>
        <div className='bg-whiteText w-[15px] h-[8px] rounded-full'/>
        <div className='bg-whiteText w-[15px] h-[8px] rounded-full'/>
      </div>

      
    </section>
  )
}

export default Explore