"use client";

import React, { ElementType, ComponentPropsWithoutRef } from "react";

type LabelProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
} & ComponentPropsWithoutRef<T>; // ✅ pulls in correct props for chosen tag

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
