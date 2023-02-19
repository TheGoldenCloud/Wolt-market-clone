import style from '../styles/style.module.css'
import React from 'react'
import Navbar from './navbar'
import RegionNavSelect from './regionNavSelect'

function WoltMarket() {
  return (
    <React.Fragment>
        <Navbar/>
      <div className = {style.hrline}/>
    </React.Fragment>
        
  )
}

export default WoltMarket