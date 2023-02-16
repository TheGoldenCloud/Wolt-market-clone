import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import style from '../styles/style.module.css'
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { Box } from "@mui/system";

import region from '../photos/region.png'

function RegionSelect() {

  return (
    <React.Fragment>
        <div className = {style.adrWindow}>
          
          <div className = {style.closeBtn}>
            <Box>
              <IconButton>
                <CloseIcon fontSize='medium' />
              </IconButton>
            </Box>
          </div>

            <h3>Add address</h3>
            <select placeholder='Select state' className= {style.selectStreet} >
                <option>Select state</option>
                <option>Hello</option>
                <option>Hello</option>
                <option>Hello</option>
            </select>
            <br/>
            <input className = {style.inputState} placeholder='State'/>
        </div>
    </React.Fragment>
  )
}

export default RegionSelect