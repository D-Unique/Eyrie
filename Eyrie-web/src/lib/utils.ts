import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Combine Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format currency to Nigerian Naira
export function formatCurrency(amount: number, currency: string = 'NGN'): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

// Format date
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-NG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

// Format area
export function formatArea(area: number): string {
  return `${area.toLocaleString()} sqft`;
}

// Truncate text with ellipsis
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

// Generate a range of numbers (useful for pagination)
export function range(start: number, end: number): number[] {
  return Array.from({ length: en