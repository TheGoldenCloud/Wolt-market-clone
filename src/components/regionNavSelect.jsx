import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import style from '../styles/style.module.css'
import { IconButton } from '@mui/material';
import { Box } from "@mui/system";
import PlaceIcon from '@mui/icons-material/Place';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function RegionNavSelect() {

  return (
    <React.Fragment>
        <div className= {style.rns}>
            
            <Box>
              <IconButton color="primary">
                <PlaceIcon color="primary" fontSize="medium"/>
              </IconButton>
            </Box>

            <div className= {style.rnsa}>
                <p>Delivery for</p>
                <p className = {style.labelState}>Belgrade</p>
            </div>

            <Box>
              <IconButton color="primary">
                <KeyboardArrowDownIcon color="primary" fontSize="medium"/>
              </IconButton>
            </Box>
            

        </div>
    </React.Fragment>
  )
}

export default RegionNavSelect