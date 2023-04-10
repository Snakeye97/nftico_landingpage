import React from 'react'
import { dropItems } from '../constants'

const DropList = () => {
  return (
    <div>
      {dropItems.map((Drops)=>(
        <div key={Drops.id} className='w-full h-[400px]'>
          <img src={Drops.Image} alt="" className='w-full h-[400px]'/>
        </div>
      ))}
    </div>
  )
}

export default DropList