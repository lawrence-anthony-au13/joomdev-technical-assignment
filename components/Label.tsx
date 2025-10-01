"use client";

import React, { ElementType, ComponentPropsWithoutRef } from "react";

type LabelProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
} & ComponentPropsWithoutRef<T>; // ✅ pulls in correct props for chosen tag

// Not using Centralized typography system styling as it changes styling differently than the
// assignment, if we keep centralized styling, assignment styling becomes different than original page

// const typographyVariants = {
//   h1: "text-4xl font-bold tracking-tight",
//   h2: "text-3xl font-semibold tracking-tight",
//   h3: "text-2xl font-semibold",
//   h4: "text-xl font-medium",
//   h5: "text-lg font-medium",
//   h6: "text-base font-medium",
//   body: "text-base text-gray-700 dark:text-gray-300",
//   caption: "text-sm text-gray-500",
//   label: "text-sm font-medium text-gray-700 dark:text-gray-300",
// };

export const Label = <T extends ElementType = "p">({
  as,
  className,
  children,
  ...props
}: LabelProps<T>) => {
  const Component = as || "p";
  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
};
