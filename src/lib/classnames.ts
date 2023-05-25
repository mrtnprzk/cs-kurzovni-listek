/**
 * Combines multiple class values into a single string using tailwind CSS class merging.
 * @param inputs Array of class values to be merged.
 * @returns Merged class value string.
 */

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: Array<ClassValue>) {
    return twMerge(clsx(inputs));
}