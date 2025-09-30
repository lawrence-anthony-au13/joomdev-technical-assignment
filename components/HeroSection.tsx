"use client";

import React from "react";
import Image from "next/image";

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
      <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
        Claims Wallet Max
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
        Access your funds instantly and choose how you want to receive your
        payment. Enhanced features with maximum flexibility.
      </p>
    </div>
  );
};
