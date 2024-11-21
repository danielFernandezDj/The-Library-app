import React, { useState, useEffect } from 'react';

// Components
import NavBar from './components/NavBar';
import Hero from './components/Hero'
import Body from './components/Body'

// Main App
function App() {
  return (
    <>
      <main>


        <NavBar />
        <Hero />
        {/* <Body /> */}
        <div className="absolute top-0 bg-repeat w-full h-full bg-[length:368px_368px] opacity-25 bg-[url('src/assets/images/patter-1.png')]">
        </div>
      </main>
    </>
  )
}

export default App

// backgroundSize: '368px 368px'