import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}/>

      
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
