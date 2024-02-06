export type ProductVariants = "listview" | "gridview" | "homepage" | "full";
export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  price: number;
  rating: number;
  images: string[];
}

export interface ProductsProps extends Product {
  url: string;
}
