import React from 'react'
import Navbar from './navbar'

function WoltMarket() {

  let style = {
    body:{
      paddingInline:"10%",
      maginBottom:"0px"
    }

  }

  return (
    <React.Fragment>
      <div style = {style.body} >
        <Navbar/>
      </div>
      <hr />
    </React.Fragment>
        
  )
}

export default WoltMarket