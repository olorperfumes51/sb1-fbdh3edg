export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  fraganceNotes: string[];
  products: Product[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
}
