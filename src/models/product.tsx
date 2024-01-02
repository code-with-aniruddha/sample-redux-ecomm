export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
  count?: number;
}

export interface Rating {
  rate: number;
  count: number;
}

export interface ProductInitialState {
  products: Product[];
  status: undefined | string;
  error: string;
}
