import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AllRoutes from './routes/AllRoutes'
import Navbar from './components/Homepage/Navbar/Navbar'

function App() {

  return (
    <>
      <div className="App">
      <Navbar></Navbar>
        <AllRoutes />
        </div>
    </>
  )
}

export default App
