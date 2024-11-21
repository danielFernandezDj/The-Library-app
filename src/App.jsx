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
      </main>
    </>
  )
}

export default App