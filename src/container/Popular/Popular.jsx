import React, { useState } from 'react'
import { BrowsePopular, Subheading } from '../../components'
import { browseButtons } from '../../constants'

const Popular = () => {

  const toggle = useState(true);

  return (
    <div className='my-[100px]'>

      <div className='flex justify-between items-center flex-wrap'>
        <div className='w-[350px]'>
          <Subheading title='NFTs' text='Browse popular NFTs' />
        </div>

        <div className='flex gap-8 sm:mt-0 my-[50px]'>
          {browseButtons.map((btn) => (
            <div key={btn.id} 
            className={`${toggle ? (btn.id === 1 ? 'bg-gradient-to-r':'bg-transparent'): ''} from-blue to-pinkHover px-[0.6rem] py-[0.4rem] rounded-[8px] font-Outfit font-semibold`}>
              <button className={`text-whiteText`}>{btn.title}</button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <BrowsePopular />
      </div>
    </div>
  )
}

export default Popular