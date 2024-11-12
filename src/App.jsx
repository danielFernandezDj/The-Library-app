import React, { useState, useEffect } from 'react';

// C O M P O N E N T S
import Login from './components/Login';
import DownloadBtn from './components/DownloadBtn';

// N E X T _ U I
import { Image, Button } from "@nextui-org/react";

// I C O N S
import { Sun, CircleArrowLeft, CircleArrowRight, UserRoundPen } from 'lucide-react';

// Main App
function App() {
  window.addEventListener("orientationchange", function () {
    if (window.orientation === 0 || window.orientation === 180) {
      alert("Please rotate your device to landscape mode.");
    }
  }, false);

  return (
    <>
      <main className="flex justify-center items-center h-dvh bg-current">
        <section className='panel-bg-img'>
          <div className="panel-top">
            <div className='flex flex-col items-center gap-2'>
              <Button
                isIconOnly
                variant="shadow"
                color="primary"
                radius="full"
                className="w-14 h-20"
              >
                <UserRoundPen />
              </Button>
              <a className='text-white' href=''>
                Login
              </a>
            </div>
            <p className="text-xl">
              Title
            </p>
            <DownloadBtn />
          </div>

          <Image
            isBlurred
            src="src/assets/image-background.avif"
            alt="Rock style image from Unsplash"
            className="z-0 w-full h-auto "
          />

          <div className="panel-bottom">
            <Button isIconOnly color="primary" variant="shadow" radius="full" className="w-14 h-14"> <CircleArrowLeft /> </Button>
            <Button isIconOnly color="primary" variant="shadow" radius="full" className="w-14 h-14"> <CircleArrowRight /> </Button>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
