import React from "react";
import { Button, } from "@nextui-org/button";

export default function DownloadBtn() {
  const handleDownload = async () => {
    const fileUrl = "https://example.com/path-to-your-image.jpg"; // External file URL

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
      <Button
        color="primary"
        onClick={handleDownload}
        className="download-Button"
      >
        Download Image
      </Button>
    </>
  )
}