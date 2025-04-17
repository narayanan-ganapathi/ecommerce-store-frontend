import { Group as Grocery, Shirt, Baby, Gift, Heart as Health, Cake as Makeup, Flower, Book } from 'lucide-react';
import type { Category } from '../types';

export const categories: Category[] = [
  { id: '1', name: 'Grocery', icon: Grocery },
  { id: '2', name: 'Fashion', icon: Shirt },
  { id: '3', name: 'Baby Care', icon: Baby },
  { id: '4', name: 'Gift & Toys', icon: Gift },
  { id: '5', name: 'Health Care', icon: Health },
  { id: '6', name: 'Cosmetics', icon: Makeup },
  { id: '7', name: 'Flowers', icon: Flower },
  { id: '8', name: 'Books', icon: Book },
];