import React from 'react'
import { Navbar } from './components'
import { Collection, Drop, Explore, Footer, GetStarted, Popular, Stats, Trending, Wallet } from './container'
import styles from './style'
import './App.css'
import CTA from './container/CTA/CTA'

const App = () => (
    <div className='bg-mainBg w-full overflow-hidden'>
      <div className={` bg-primary shadow-navShadow ${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      
      <div className={styles.flexStart}>
        <div className={styles.boxWidth}>
          <Explore />
        </div>
      </div>

      <div className={` ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Drop/>
          <Collection />
          <Trending />
          <GetStarted />
          <Popular />
          <Wallet />
          <CTA />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )

export default App
