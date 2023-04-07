import React from 'react'
import { Navbar } from './components'
import { Explore } from './container'
import styles from './style'
import './App.css'

const App = () => (
    <div className='bg-mainBg w-full overflow-hidden'>
      <div className={` ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      
      <Explore />
    </div>
  )

export default App
