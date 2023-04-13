import React, { useState } from 'react'
import { Subheading } from '../../components'
import { Resources } from '../../constants'
import images from '../../assets/images';

const GetStarted = () => {

    const elementwithIdOne = Resources.filter(element => element.id === 1 );
    const elementwithoutIdOne = Resources.filter(elements => elements.id !== 1 );
    const toggle = useState(true)

    return (
        <div className='relative z-10 my-[3rem]'>
            <div>
                <Subheading title='NFTs' text='Resources for getting started'/>
            </div>

            <div className='flex gap-4 md:flex-row flex-col w-full '>
                <div className='font-Outfit text-whiteText mt-[2rem] relative md:w-[600px] w-full'>
                    <img src={images.Resource1} alt="Get started" className='w-[600px] h-[400px] rounded-[8px] relative'/>
                    {elementwithIdOne.map((element)=> (
                        <div key={element.id} className='p-[1rem] md:left-[20%] left-[0] absolute bottom-[-10%] bg-cardBg rounded-[8px]'>
                            <div className='flex gap-3'>
                                <button className='py-[0.2rem] px-[0.6rem] bg-gradient-to-r from-blue to-pinkHover rounded-[8px] font-semibold text-[16px]'>NFT Token</button>
                                <p className='flex gap-2 text-[14px] items-center'><img src={element.cImg} alt="img" className='w-[10px] h-[10px]' />{element.cText}</p>
                            </div>

                            <h3 className='my-[10px]'>{element.title}</h3>

                            <div className='flex gap-2'>
                                <img src={element.Person} alt="person" className='rounded-full w-[40px] h-[40px]' />
                                <div>
                                    <h4 className='text-[14px] font-semibold'>{element.text}</h4>
                                    <p className='text-[12px] text-[#e7e7e7] font-normal'>{element.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='mt-[2rem] gap-4 flex flex-col md:w-[600px] w-full'>
                    {elementwithoutIdOne.map((element)=> (
                        <div key={element.id} className='p-[1.3rem] bg-cardBg rounded-[8px] flex gap-3 w-full flex-wrap'>
                            <img src={element.mImg} alt="img" className='sm:w-[150px] w-[300px] sm:h-[150px] h-[300px] rounded-[8px]'/>
                                <div className='text-whiteText '>
                                    <div className='flex gap-3'>
                                        <button className={`${toggle ? (element.id === 2 ? 'flex' : 'hidden') : ''} py-[0.2rem] px-[0.6rem] bg-gradient-to-r from-blue to-pinkHover rounded-[8px] font-semibold text-[14px]`}>Game</button>
                                        <button className={`${toggle ? (element.id === 3 ? 'flex' : 'hidden') : ''} py-[0.2rem] px-[0.6rem] bg-gradient-to-r from-blue to-pinkHover rounded-[8px] font-semibold text-[14px]`}>NFT Token</button>
                                        <button className='py-[0.2rem] px-[0.6rem] bg-gradient-to-r from-blue to-pinkHover rounded-[8px] font-semibold text-[14px]'>NFT</button>
                                        
                                        <p className='flex gap-2 text-[14px] items-center font-semibold'><img src={element.cImg} alt="img" className='w-[10px] h-[10px]' />{element.cText}</p>
                                    </div>

                                    <h3 className='my-[25px] font-semibold text-[18px]'>{element.title}</h3>

                                    <div className='flex gap-2'>
                                        <img src={element.Person} alt="person" className='rounded-full w-[40px] h-[40px]' />
                                        <div>
                                            <h4 className='text-[14px] font-semibold'>{element.text}</h4>
                                            <p className='text-[12px] text-[#e7e7e7] font-normal'>{element.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    ))}
                </div>
            </div>


            <div className='pink__gradient w-[40%] h-[40%] absolute z-0 top-0 left-0'/>
        </div>
    )
}

export default GetStarted