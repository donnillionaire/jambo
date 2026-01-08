// src/types.ts

export interface Property {
  id: number;
  image_url: string;
  title: string;
  contact: string;
  beds: number;
  baths: number;
  acres: string; // e.g., "1 HA", "80 ACRES"
  price: string; // e.g., "KSH 10,000"
}