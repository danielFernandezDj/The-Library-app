import React from "react";

// Next UI
import { Button } from "@nextui-org/react";

// Icons
import { CircleArrowLeft, CircleArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <div className="panel-bottom">
      <Button isIconOnly color="primary" variant="shadow" radius="full" className="w-14 h-14">
        <CircleArrowLeft />
      </Button>
      <Button isIconOnly color="primary" variant="shadow" radius="full" className="w-14 h-14">
        <CircleArrowRight />
      </Button>
    </div>
  );
}