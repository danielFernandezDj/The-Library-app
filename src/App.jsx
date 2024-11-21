import React, { useState, useEffect } from 'react';

// Components
import NavBar from './components/NavBar';
import Hero from './components/Hero'
import Body from './components/Body'

// Main App
function App() {
  return (
    <>
      <main style={{ backgroundImage: `url(src/assets/images/patter-1.png)` }}
        className="bg-repeat"
      >
        <NavBar />
        <Hero />
        <Body />
      </main>
    </>
  )
}

export default App
