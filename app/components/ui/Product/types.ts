export type ProductVariants = "listview" | "gridview" | "homepage" | "full";
export type Product = {
  id: string;
  name: string;
  shortDescription: string;
  price: number;
  rating: number;
  images: string[];
};
