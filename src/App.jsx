import React from 'react'
import { Navbar } from './components'
import { Explore } from './container'
import styles from './style'
import './App.css'

const App = () => (
    <div className='bg-mainBg w-full overflow-hidden'>
      <div className={` bg-primary shadow-navShadow ${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      
      <div className={styles.flexStart}>
        <div className={styles.boxWidth}>
          <Explore />
        </div>
      </div>
    </div>
  )

export default App
