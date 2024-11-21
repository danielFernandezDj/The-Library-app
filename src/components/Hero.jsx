import React from "react";

// Next UI
import { Button } from "@nextui-org/react";

// Icons
import { ImageDown, UserRoundPen } from 'lucide-react';

export default function Header() {

  // Handle Download the Fetch Image
  // const handleDownload = async () => {a
  //   const fileUrl = "https://example.com/path-to-your-image.jpg"; // External file URL
  //   try {
  //     // Fetch the file from the URL
  //     const response = await fetch(fileUrl);
  //     const blob = await response.blob();

  //     // Create a temporary link element
  //     const link = document.createElement("a");
  //     link.href = URL.createObjectURL(blob);
  //     link.download = "downloaded-image.jpg"; // File name for the download

  //     // Append link to the body, trigger download, and remove link
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);

  //     // Release the object URL
  //     URL.revokeObjectURL(link.href);
  //   } catch (error) {
  //     console.error("Download failed:", error);
  //   }
  // };

  return (
    <>
      <section className="hero-panel" >
        <div>
          
        </div>
        <div className="absolute top-0 z-0 w-full h-full opacity-25 bg-repeat bg-[length:368px_368px] bg-[url('src/assets/images/patter-1.png')]"></div>
      </section>
    </>
  );
}

{/* Download Button */ }
{/* <Button
        isIconOnly
        variant="shadow"
        color="primary"
        radius="full"
        onClick={handleDownload}
        className="w-14 h-20"
      >
        <ImageDown />
      </Button> */}