import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Login from './pages/Auth/Login'
import SignUp from './pages/Auth/SignUp'

const App = () => {
  return (
    <div className = 'app'>
      <Navbar/>
      <Routes>    
        <Route path='/' element ={<Home/>}/>
        <Route path='/Coin/:CoinId' element ={<Coin/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
    </div>
  )
}

export default App
