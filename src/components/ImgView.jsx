import React from "react";
import { Button, } from "@nextui-org/button";

export default function ImgView() {

  const handleDownload = async () => {
    const fileUrl = "https://static.fotor.com/app/features/img/bgremove-banner-v2-t.jpg"

    try {
      // Fetch the file from the URL
      const response = await fetch(fileUrl);
      const blob = await response.blob();

      // Create a temporary link element
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "downloaded-image.jpg"; // File name for the download

      // Append link to the body, trigger download, and remove link
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Release the object URL
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };


  return (
    <>
      <main>
        <section>
          <Button color="primary" onClick={handleDownload}>
            Download Image
          </Button>
          <img src="" alt="" />
          <div>
            <button download="" >Next</button>
            <button>Before</button>
          </div>
        </section>
      </main>
    </>
  )
}