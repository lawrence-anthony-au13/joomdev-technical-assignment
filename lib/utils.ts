import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
export function cn(...classes: clsx.ClassValue[]) {
  return twMerge(clsx(...classes));
}
