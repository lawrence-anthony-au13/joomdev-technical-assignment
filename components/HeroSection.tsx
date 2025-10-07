"use client";

import React from "react";
import Image from "next/image";
import { Label } from "./Label";

export const HeroSection = () => {
  return (
    <div className="max-w-4xl mx-auto text-center mb-14">
      <div className="mb-8 flex justify-center">
        <Image
          src="/Juice-2024-Logo-2000x800.png"
          alt="Juice Financial"
          width={2000}
          height={800}
          className="h-16 w-auto"
          priority
        />
      </div>
      <Label as="h1" variant="heroH1">
        Claims Wallet Max
      </Label>
      <Label as="p" variant="heroPara">
        Access your funds instantly and choose how you want to receive your
        payment. Enhanced features with maximum flexibility.
      </Label>
    </div>
  );
};
