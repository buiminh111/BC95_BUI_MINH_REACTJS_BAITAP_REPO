import { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Card from './components/Card'
import Footer from './components/Footer'  


function App() {

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  )
}

export default App
