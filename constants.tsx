
import React from 'react';
import { Product, Expert } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'glp1',
    title: 'Personalized GLP-1 Treatments',
    subtitle: 'for weight loss',
    price: 'From $119 first month',
    image: 'https://picsum.photos/seed/glp1/600/800',
    category: 'weight-loss'
  },
  {
    id: 'sermorelin',
    title: 'Sermorelin Injections',
    subtitle: 'for muscle support',
    price: 'From $126 first month',
    image: 'https://picsum.photos/seed/muscle/600/800',
    category: 'strength'
  },
  {
    id: 'nad',
    title: 'NAD+ Injections',
    subtitle: 'for energy and longevity',
    price: 'From $145 first month',
    image: 'https://picsum.photos/seed/longevity/600/800',
    category: 'anti-aging'
  },
  {
    id: 'micb12',
    title: 'MIC+B12 Therapy',
    subtitle: 'for mood and energy',
    price: 'As low as $106/mo',
    image: 'https://picsum.photos/seed/mood/600/800',
    category: 'mood'
  }
];

export const EXPERTS: Expert[] = [
  {
    name: 'Dr. Halland Chen, M.D.',
    role: 'Chief Medical Innovation Officer',
    specialty: 'Longevity medicine, regenerative medicine, NAD therapy.',
    image: 'https://picsum.photos/seed/doc1/400/400',
    credentials: ['University of Miami', 'Albert Einstein College']
  },
  {
    name: 'Dr. Rebecca Emch',
    role: 'VP of Pharmacy Operations',
    specialty: 'Non-sterile compounding, functional medicine, regulatory compliance.',
    image: 'https://picsum.photos/seed/doc2/400/400',
    credentials: ['Mercer University', 'Columbus State']
  },
  {
    name: 'Dr. William Lee, M.D.',
    role: 'Medical Advisory Board',
    specialty: 'Cardiology, metabolic health, chronic disease prevention.',
    image: 'https://picsum.photos/seed/doc3/400/400',
    credentials: ['University of Pittsburgh']
  }
];

export const USPS = [
  "127,000+ members",
  "No surprises, upfront pricing",
  "Free expedited shipping",
  "FSA & HSA eligible",
  "24/7 provider messaging",
  "FDA-registered labs",
  "100% online consultation"
];
