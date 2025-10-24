import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CoinContextProvider from './context/CoinContext.jsx'
import AuthContextProvider from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <CoinContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CoinContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)
