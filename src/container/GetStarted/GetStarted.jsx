import React from 'react'
import { Subheading } from '../../components'
import { Resources } from '../../constants'
import images from '../../assets/images';

const GetStarted = () => {

    const elementwithIdOne = Resources.filter(element => element.id === 1 );
    const elementwithoutIdOne = Resources.filter(elements => elements.id !== 1 );

    return (
        <div className='relative z-10 my-[3rem]'>
            <div>
                <Subheading title='NFTs' text='Resources for getting started'/>
            </div>

            <div className='font-Outfit text-whiteText mt-[2rem] relative'>
                <img src={images.Resource1} alt="Get started" className='w-[600px] h-[400px] rounded-[8px] relative'/>
                {elementwithIdOne.map((element)=> (
                    <div key={element.id} className='left-[50%] absolute bottom-[-10%] bg-cardBg rounded-[8px]'>
                        <div>
                            <button>NFT Token</button>
                            <p><img src={element.cImg} alt="img" className='w-[30px] h-[30px]' />{element.cText}</p>
                        </div>

                        <h3>{element.title}</h3>

                        <div>
                            <img src={element.Person} alt="person" />
                            <div>
                                <h4>{element.text}</h4>
                                <p>{element.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            <div className='pink__gradient w-[40%] h-[40%] absolute z-0 top-0 left-0'/>
        </div>
    )
}

export default GetStarted