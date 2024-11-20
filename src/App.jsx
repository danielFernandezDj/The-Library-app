import React, { useState, useEffect } from 'react';

// Components
import NavBar from './components/NavBar';
import Hero from './components/Hero'
import Body from './components/Body'
import Footer from './components/Footer';

// Main App
function App() {
  return (
    <>
      <main >
        <NavBar />
        <Hero />
        <Body />
      </main>
    </>
  )
}

export default App
