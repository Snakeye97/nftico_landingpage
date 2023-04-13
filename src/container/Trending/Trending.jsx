import React, { useState } from 'react'
import { Subheading } from '../../components'
import { TrendingContent } from '../../constants'
import images from '../../assets/images'

const Trending = () => {

  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index)
  };
  const handleMouseLeave = () => {
    setHoveredIndex(-1)
  };

  return (
    <div className='flex flex-col items-center justify-center w-full my-[3rem] relative'>

      <div className=''>
        <div>
          <Subheading title='NFTs' text='Trending NFTs'/>
        </div>
        
        <div className='flex flex-wrap gap-3 items-center justify-center'>
          {TrendingContent.map((trend, index)=> (
            <div key={trend.id}
            className='z-10 bg-transparent p-[1px] hover:bg-gradient-to-r from-blue to-pinkHover rounded-[8px]'>
              
              <div className='flex flex-col text-whiteText bg-cardBg items-center justify-start p-[1rem] rounded-[8px] box-border'>
                <div className='relative'>
                  

                  <div
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}  >
                    <img src={trend.Image} alt="img" className='rounded-[8px] w-[220px] h-[200px] relative hover:opacity-[0.5]'/>
                    { hoveredIndex === index && (
                      <div className=''>
                        <div className='top-1 right-1 absolute flex flex-row gap-1'>
                          <img src={images.Reload} alt="reload" className='bg-cardBg py-[2px] rounded-[5px] w-[15px] h-[15px]'/>
                          <p className='flex flex-row items-center justify-center gap-1 bg-cardBg rounded-[5px] py-[2px] h-[15px] w-[35px] text-[12px]'><img src={images.Likes} alt="Likes" className='w-[10px] h-[10px]'/>{trend.Likes}</p>
                        </div>

                            <button className='items-center justify-center bg-transparent border-[1px] border-[#E7E7E766] mt-[1.4rem] hover:bg-gradient-to-r from-blue to-pinkHover rounded-[8px] p-[0.2rem] hover:border-none text-whiteText font-Outfit font-semibold absolute bottom-[10%] w-[100px] left-[25%]'>Buy Now</button>
                      </div>
                    )}
                  </div>

                </div>

                <div className='w-full items-center justify-start mt-[1rem]'>
                  <p className='flex items-center gap-1 font-Outfit text-[14px]'>{trend.text} <img src={trend.verified} alt="verified" className='bg-[#F4C558] rounded-full w-[10px] h-[10px] p-[1px]'/></p>
                  <h3 className='font-Outfit text-[20px] mt-[0.5rem] font-[500]'>{trend.title}</h3>
                </div>

                <div className='flex justify-between w-full border-[#E7E7E766] border-[1px] rounded-[8px] p-[10px] mt-[0.5rem]'>
                  <div className='flex flex-col'>
                    <p className='text-[#C0C0C0] font-Outfit text-[12px]'>{trend.From}</p>
                    <p className='text-whiteText text-[14px] font-Outfit'>{trend.FromText}</p>
                  </div>
                  <div className='flex flex-col'>
                    <p className='text-[#C0C0C0] font-Outfit text-[12px]'>{trend.Bid}</p>
                    <p className='text-whiteText text-[14px] font-Outfit'>{trend.BidText}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

          <div className='pink__gradient w-[40%] h-[40%] absolute z-0 rounded-full right-0 top-0'/>
      </div>

      <div className='bg-[#e7e7e7] h-[1px] w-[40%] mt-[4rem]'>
        <div className='bg-gradient-to-r from-blue to-pinkHover w-[40%] h-full'/>
      </div>
    </div>
  )
}

export default Trending