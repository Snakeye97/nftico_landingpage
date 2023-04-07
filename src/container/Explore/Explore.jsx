import React from 'react'
import './Explore.css'
import images from '../../constants/images'

const Explore = () => {
  return (
    <div className='app__explore' id='#explore'>
      <div className='gradient'/>
      <div className="app__explore-container">

        <div className="purple-diamond"/>
        <img src={images.HomeHexa} alt="Hexa" className='Hexa-vector'/>
        <div className="app__explore-content">
          <h2 className='headtext'>Discover, collect, and sell <br /> extraordinary <span className='pink__text'>NFTs</span></h2>
          <p className='paragraph'>Our marketplace is the world’s first and largest NFT market for independent creators worldwide </p>
        </div>

        <div className="app__explore-buttons">
          <button className='button1'>Explore</button>
          <button className='button2'>Create</button>
        </div>

        <div className="app__explore-play">
          <img src={images.play} alt="play" />
          <p>Learn more about Nftico</p>
        </div>
        <div className='orange-cream '/>
      </div>

      <div className="app__explore-round">
        <div>
          <img src={images.Round1Img} alt="Round1" />
        </div>
        <div></div>
      </div>
      <div className="app__explore-img">
        <img src={images.Homeimg1} alt="Image" />

        <div className='arrow-div'>
          <img src={images.arrow} alt="arrow" className='img-arrow'/>
        </div>
      </div>
      Explore
    </div>
  )
}

export default Explore