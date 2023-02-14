import React from 'react'
import ReactDOM from 'react-dom/client'
import WoltMarket from './components/app'
import { BrowserRouter } from 'react-router-dom'

import RegionSelect from './components/regionSelect'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RegionSelect/>
    </BrowserRouter>  
  </React.StrictMode>,
)
