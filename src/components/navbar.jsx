import React from 'react'
import style from '../styles/style.module.css'
import wolticon from '../photos/wolticon.png';
import RegionNavSelect from './regionNavSelect'

function Navbar() {

  return (
    <React.Fragment>
    <div className = {style.navbar}>
    
      <div className= {style.leftNav}>
        {/* <img src={wolticon} className = {style.navImg} width = '70' height='30'/> */}
        <img src={wolticon} className = {style.navImg}/>
        <RegionNavSelect/>
      </div>

      <div className='centerNav'>
        <input className={style.inputFeald}></input>
      </div>

      <div className='rightNav'>
        
        <div className="btn-group">
          <button type="button" className="btn btn-secondary"> 
            <div className="profile">
              pr
            </div>
          </button>
          <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference" data-bs-toggle="dropdown" aria-expanded="false" data-bs-reference="parent">
            <span className="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuReference">
            <li><a className="dropdown-item" href="#">Prijava ili registracija</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Jezik: Srpski</a></li>
            <li><a className="dropdown-item" href="#">Podrska</a></li>
            
          </ul>
        </div>
      </div>

      

    </div>
    

    </React.Fragment>



  )
}

export default Navbar