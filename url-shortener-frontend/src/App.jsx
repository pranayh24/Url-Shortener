import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import AboutPage from "./components/AboutPage.jsx";
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import RegisterPage from './components/RegisterPage.jsx';
import { Toaster } from 'react-hot-toast';
import Login from './components/Login.jsx';

function App() {

  return (
    <>
      <Router>
      <NavBar />
      <Toaster position='bottom-center'/>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/register' element={<RegisterPage />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
