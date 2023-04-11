import React from 'react'
import { Subheading } from '../../components'
import { TrendingContent } from '../../constants'

const Trending = () => {
  return (
    <div className='flex flex-col '>

      <div>
        <Subheading title='NFTs' text='Trending NFTs'/>
      </div>
      
      <div>
        {TrendingContent.map((trend)=> (
          <div key={trend.id}
          className='z-10'>
            
            <div>
              <img src={trend.Image} alt="img" />

              <div>
                <p>{trend.text} <img src={trend.verified} alt="" /></p>
                <h3>{trend.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='pink__gradient w-[40%] h-[40%] absolute z-0 rounded-full right-0'/>
    </div>
  )
}

export default Trending