import React from 'react'
import { stats } from '../../constants'

const Stats = () => {
  return (
    <div className='flex flex-1 items-center md:flex-row flex-col border-b-1px border-b-white'>
      <p className='text-whiteText font-Outfit max-w-[470px] md:text-[20px] text-[16px] justify-start items-center flex'>We will take all the worry and guesswork out of your blockchain and cryptocurrency concerns.</p>

      <div className='flex flex-1 gap-5 justify-center items-center sm:flex-row flex-col'>
        {stats.map((stat) => (
          <div key={stat.id}
          className={`items-center justify-center flex-1 `}>
            <h2 className={`text-purpleD font-Outfit text-[24px] font-bold`}>{stat.value}</h2>
            <p className={`text-whiteText font-Outfit text-[18px] font-normal`}>{stat.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stats