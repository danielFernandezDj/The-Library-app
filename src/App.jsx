import React, { useState, useEffect } from 'react';

// Components
import Header from './components/Header';
import BackgroundImage from './components/BackgroundImage';
import Footer from './components/Footer';

// Next UI
import { Image, Button } from "@nextui-org/react";

// Icons
import { CircleArrowLeft, CircleArrowRight, UserRoundPen } from 'lucide-react';

// Orientation Alert Hook
function useOrientationAlert() {
  useEffect(() => {
    const handleOrientationChange = () => {
      if (window.orientation === 0 || window.orientation === 180) {
        alert("Please rotate your device to landscape mode.");
      }
    };

    window.addEventListener("orientationchange", handleOrientationChange);
    return () => window.removeEventListener("orientationchange", handleOrientationChange);
  }, []);
}

// Main App
function App() {
  useOrientationAlert();

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
