import React from 'react'
import ReactDOM from 'react-dom/client'
import WoltMarket from './components/app'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <WoltMarket />
    </BrowserRouter>  
  </React.StrictMode>,
)
