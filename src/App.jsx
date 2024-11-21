import React, { useState, useEffect } from 'react';

// Components
import NavBar from './components/NavBar';
import Hero from './components/Hero'
import Body from './components/Body'

// Main App
function App() {
  return (
    <>
      <main className='main-app'>
        <NavBar />
        <Hero />
        <Body />
        <div className="fixed inset-0 -z-10 w-full h-full opacity-25 bg-repeat bg-[length:368px_368px] bg-[url('src/assets/images/patter-1.png')]"></div>
      </main>
    </>
  )
}

export default App