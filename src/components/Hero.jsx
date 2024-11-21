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
        <div className="text-center py-5">
          <h1 className="font-bold text-[min(15vw,280px)] text-gradient">Free For all!</h1>
          <h2 className="font-medium text-[min(5vw,60px)] text-gradient">
            Download more than 470,000 Pieces <br /> of human history for free!
          </h2>
        </div>
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