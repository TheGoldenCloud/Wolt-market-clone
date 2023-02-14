import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import wolticon from '../photos/wolticon.png';

function Navbar() {

  let style = {
    navbar:{
      paddingTop: "18px",
      display: "flex",
      justifyContent: "space-between"
    },

    inputFeald:{
      backgroundColor:"whitesmoke",
      
    }

  }

  return (
    <React.Fragment>
    <div style={style.navbar}>


      <div className='leftNav'>
        <img src={wolticon} width = '80'/>
      </div>

      <div className='centerNav'>
        <input></input>
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