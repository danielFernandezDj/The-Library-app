import React from "react";

// Next UI
import { Image } from "@nextui-org/react";

export default function BackgroundImage() {
  return (
    <div className="z-0 lg:w-auto lg:h-auto">
      <Image
        isBlurred
        src="src/assets/image-background.avif"
        alt="Rock image from Unsplash"
        className="
        fixed start-0 w-full h-full object-cover rounded-none
        md:static md:w-auto md:h-auto md:object-contain md:rounded-xl"
      />
    </div>
  );
}
