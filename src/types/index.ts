export type ProductCategory = 'relaxing' | 'decorative' | 'oil' | 'accessories' | 'gift-set';

export interface FragranceNotes {
  top: string[];
  middle: string[];
  base: string[];
}

export interface ProductSize {
  label: string;
  weight: string;
  price: number;
  burnTime: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  slug: string;
  category: ProductCategory;
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  badge: 'BÁN CHẠY' | 'MỚI' | 'SALE' | null;
  weight: string;
  burnTime: string;
  waxType: string;
  wickType: string;
  fragranceNotes: FragranceNotes;
  mood: string;
  shortDescription: string;
  description: string;
  usageInstructions: string;
  images: string[];
  rating: number;
  ratingScore: number;
  reviewCount: number;
  inStock: boolean;
  scentsProfile: ('floral' | 'woody' | 'fresh' | 'fruity')[];
  sizes?: ProductSize[];
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  subtitle: string;
  sizeLabel: string;
  weight: string;
  price: number;
  image: string;
  quantity: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: 'Hướng dẫn' | 'Kiến thức' | 'Lifestyle' | 'Nguyên liệu';
  date: string;
  readTime: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  avatar: string;
  rating: number;
  content: string;
}
