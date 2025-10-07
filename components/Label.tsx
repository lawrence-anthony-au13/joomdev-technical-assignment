"use client";

import React, { ElementType, ComponentPropsWithoutRef } from "react";
import { cn } from "../lib/utils"; // your helper

// Centralized typography system
const typographyVariants = {
  h1: "text-4xl font-bold tracking-tight",
  h2: "text-3xl font-semibold tracking-tight",
  h2Bold: "text-3xl font-bold",
  h3: "text-2xl font-semibold",
  h3Large: "text-lg font-semibold mb-2",
  h3Gray: "font-semibold text-gray-900 dark:text-white",
  h4: "text-xl font-medium",
  h4Gray: "font-medium text-gray-900 dark:text-gray-100 mb-1",
  h5: "text-lg font-medium",
  h6: "text-base font-medium",
  body: "text-base text-gray-700 dark:text-gray-300",
  caption: "text-sm text-gray-500",
  label: "block text-sm font-medium mb-2",
  redLabel: "block text-sm font-medium mb-2 text-red-600",
  pWhite80: "text-white/80",
  largeSemiBold: "text-lg font-semibold",
  extraLargeBoldMargin: "text-xl font-bold mb-2",
  largeBlue: "text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400",
  paraGray: "text-gray-600 dark:text-gray-400 text-sm",
  heroH1:
    "text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600",
  heroPara: "text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto",
  extraLargeBold: "text-xl font-bold",
  extraXLBold: "text-2xl font-bold mb-6",
  boldCenter: "text-2xl font-bold mb-8 text-center",
  bold: "font-bold",
};

type Variant = keyof typeof typographyVariants;

type LabelProps<T extends ElementType> = {
  as?: T;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & ComponentPropsWithoutRef<T>;

export const Label = <T extends ElementType = "p">({
  as,
  variant = "body",
  className,
  children,
  ...props
}: LabelProps<T>) => {
  const Component = as || "p";
  return (
    <Component
      className={cn(typographyVariants[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
};
