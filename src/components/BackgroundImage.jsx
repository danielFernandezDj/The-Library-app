import React from "react";

// Next UI
import { Image } from "@nextui-org/react";

export default function BackgroundImage() {
  return (
    <Image
      isBlurred
      src="src/assets/image-background.avif"
      alt="Rock style image from Unsplash"
      className="z-0 w-full h-auto"
    />
  );
}
