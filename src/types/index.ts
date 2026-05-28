export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  images?: string[];
  benefits: string[];
  ingredients: string[];
  usage: string;
  featured: boolean;
  price?: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  message: string;
}
