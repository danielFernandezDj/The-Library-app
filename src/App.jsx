import React, { useState, useEffect } from 'react';

// Components
import Header from './components/Header';
import BackgroundImage from './components/BackgroundImage';
import Footer from './components/Footer';

// Main App
function App() {
  return (
    <>
      <main className="flex justify-center items-center h-dvh bg-current">
        <section className='principal-panel'>
          <Header />
          <BackgroundImage />
          <Footer />
        </section>
      </main>
    </>
  )
}

export default App
