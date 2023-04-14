import React from 'react'
import Footerlinks from '../../components/Footerlinks'
import styles from '../../style'

const Footer = () => {
  return (
    <div>

        <div className={`${styles.paddingX} ${styles.paddingY}`}>
          <Footerlinks />
        </div>

        <div className={` ${styles.paddingX} flex flex-wrap justify-between bg-cardBg w-full items-center py-[1rem] text-whiteText `}>
          <ul className='flex list-none gap-6 font-semibold cursor-pointer'>
            <li>Privacy Policy</li>
            <li>License</li>
            <li>API</li>
          </ul>

          <p className=''>@ 2021 All rights reserved</p>
        </div>
      
    </div>
  )
}

export default Footer