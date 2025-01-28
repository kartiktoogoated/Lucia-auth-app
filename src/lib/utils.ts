<<<<<<< HEAD
import { clsx, type ClassValue } from "clsx"
=======
import { type ClassValue, clsx } from "clsx"
>>>>>>> ef73c23 (initial commit)
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
