
export interface Product {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  image: string;
  category: 'weight-loss' | 'strength' | 'anti-aging' | 'mood';
}

export interface Expert {
  name: string;
  role: string;
  specialty: string;
  image: string;
  credentials: string[];
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
