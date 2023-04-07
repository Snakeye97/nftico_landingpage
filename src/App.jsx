import React from 'react'
import { Navbar } from './components'
import { Explore } from './container'
import styles from './style'

const App = () => (
    <div className='bg-black w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} font-Outfit`}>
          <Navbar />
        </div>
      </div>
      
      <Explore />
    </div>
  )

export default App
