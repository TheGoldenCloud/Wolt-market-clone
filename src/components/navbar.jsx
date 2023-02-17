import React from 'react'
import style from '../styles/style.module.css'
import wolticon from '../photos/wolticon.png';

function Navbar() {

  return (
    <React.Fragment>
    <div className = {style.navbar}>
    
      <div className='leftNav'>
        <img src={wolticon} width = '80'/>
      </div>

      <div className='centerNav'>
        <input className={style.inputFeald}></input>
      </div>

      <div className='rightNav'>
        <a href='#'>Prijava</a>
        <button className='btn btn-primary' >Registracija</button>
      </div>

      

    </div>
    

    </React.Fragment>



  )
}

export default Navbar