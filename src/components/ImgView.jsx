import React from "react";

// N E X T _ U I
import { Image } from "@nextui-org/react";

// C O M P O N E N T S
import DownloadBtn from "./DownloadBtn"
import { Fullscreen } from "lucide-react";

export default function ImgView() {
  return (
    <>
      <main>
        <section className="flex justify-center p-4">
          <div>

            {/* <DownloadBtn className="z-5 " /> */}

            {/* <div className="w-full w-auto"> */}
              <Image
                // isBlurred
                width={900}
                src="../assets/image-background.avif"
                alt="Rock style image from Unsplash"
                className="w-full w-auto"
              />
            {/* </div> */}

            {/* <div className="z-5">
              <button>Next</button>
              <button>Before</button>
            </div> */}

          </div>
        </section>
      </main >
    </>
  )
}