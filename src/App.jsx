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
  return (
    <>
      <main className="flex justify-center items-center h-dvh bg-current">
        <section className="panel-top">
          <div className='flex flex-col items-center gap-2'>
            <Button
              isIconOnly
              variant="shadow"
              color="primary"
              radius="full"
              className="w-14 h-20"
            >
              <UserRoundPen className="text-red-500" />
            </Button>
            <a className='text-red-500' href=''>
              Login
            </a>
          </div>
          <p className="text-xl">
            Title
          </p>
          <DownloadBtn />
        </section>

        <section className='panel-center'>
          <Image

            src="src/assets/image-background.avif"
            alt="Rock style image from Unsplash"
            className="z-0 w-full h-auto"
          />
        </section>

        <section className="panel-bottom">
          <Button isIconOnly color="primary" variant="shadow" radius="full" className="w-14 h-14"> <CircleArrowLeft /> </Button>
          <Button isIconOnly color="primary" variant="shadow" radius="full" className="w-14 h-14"> <CircleArrowRight /> </Button>
        </section>
      </main>
    </>
  )
}

export default App
