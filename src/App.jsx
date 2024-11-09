import React, { useState, useEffect } from 'react';

// C O M P O N E N T S
import { Login } from './components/Login';
import { DownloadBtn } from './components/DownloadBtn';

// N E X T _ U I
import { Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

// I C O N S
import { Sun } from 'lucide-react';
import { CircleArrowLeft } from 'lucide-react';
import { CircleArrowRight } from 'lucide-react';


// Main App
function App() {
  return (
    <>
      <main className="flex justify-center items-center h-dvh bg-black">
        <div className="m-16 w-full h-auto border-2 border-red-300">
          <section>
            <div>
              <Image className="" />
              <p>Login</p>
            </div>
            <p className="text-xl">Img Title</p>
            <DownloadBtn className="z-5 " />
          </section>

          <Image
            isBlurred
            src="assets/image-background.avif"
            alt="Rock style image from Unsplash"
            className="w-full h-auto"
          />

          <section className="z-5">
            <Button isIconOnly color="warning" variant="faded" aria-label="Take a photo">
              <CircleArrowLeft />
            </Button>
            <Button isIconOnly color="warning" variant="faded" aria-label="Take a photo">
              <CircleArrowRight />
            </Button>
          </section>
        </div>
      </main>
    </>
  )
}

export default App
