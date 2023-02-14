import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import region from '../photos/region.png'

function RegionSelect() {

  

  let style = {
    main:{
        width:"300px",
        border:"1px solid black",
        padding: "5px"
    }

  }

  return (
    <React.Fragment>
        <div style={style.main}>
            <h3>Dodaj adresu</h3>
            <select >
                <option></option>
            </select>
            <br/>
            <input />
        </div>
    </React.Fragment>
  )
}

export default RegionSelect