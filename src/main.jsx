import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { HeroesApp } from './HeroesApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/Heroes-SPA-React" >
    <HeroesApp />
  </BrowserRouter>,
)
