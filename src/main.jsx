import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/navbar.jsx'
import Card from './components/Card.jsx'
import Search from './components/Search.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Search />
  </React.StrictMode>,
)
