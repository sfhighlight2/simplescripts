
import React from 'react';
import { Product, Expert } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'glp1',
    title: 'Personalized GLP-1 Treatments',
    subtitle: 'for weight loss',
    price: 'From $119 first month',
    image: '/glp1.jpg',
    category: 'weight-loss'
  },
  {
    id: 'sermorelin',
    title: 'Sermorelin Injections',
    subtitle: 'for muscle support',
    price: 'From $126 first month',
    image: '/sermorelin.jpg',
    category: 'strength'
  },
  {
    id: 'nad',
    title: 'NAD+ Injections',
    subtitle: 'for energy and longevity',
    price: 'From $145 first month',
    image: '/vial_glp1.png',
    category: 'anti-aging'
  },
  {
    id: 'micb12',
    title: 'MIC+B12 Therapy',
    subtitle: 'for mood and energy',
    price: 'As low as $106/mo',
    image: '/vial_glp1.png',
    category: 'mood'
  }
];

export const TESTIMONIALS = [
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?aut=format&fit=crop&q=80&w=800",
    quote: "SimpleScripts changed my metabolic approach. Down 22lbs in 3 months with zero stress. The platform is incredibly easy to use.",
    author: "Marcus J.",
    role: "Weight Loss Protocol"
  },
  {
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?aut=format&fit=crop&q=80&w=800",
    quote: "The NAD+ injections were a game changer for my morning energy levels. I feel 10 years younger and much more focused.",
    author: "David R.",
    role: "Energy & Longevity"
  },
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?aut=format&fit=crop&q=80&w=800",
    quote: "Finally a telehealth company that treats performance with clinical seriousness and total simplicity. High-quality support.",
    author: "Robert T.",
    role: "Muscle Support"
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
