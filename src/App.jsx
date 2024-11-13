import React, { useState, useEffect } from 'react';

// Components
import Header from './components/Header';
import BackgroundImage from './components/BackgroundImage';
import Footer from './components/Footer';

// Next UI
import { Image, Button } from "@nextui-org/react";

// Icons
import { CircleArrowLeft, CircleArrowRight, UserRoundPen } from 'lucide-react';

// Main App
function App() {
  return (
    <>
      <main className="flex justify-center items-center h-dvh bg-current">
        <section className='panel-bg-img'>
          <Header />
          <BackgroundImage />
          <Footer />
        </section>
      </main>
    </>
  )
}

export default App
