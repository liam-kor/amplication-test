import { ProductCategory } from "../productCategory/ProductCategory";
import { Product } from "../product/Product";

export type CategoryOnProduct = {
  category?: ProductCategory | null;
  createdAt: Date;
  id: string;
  product?: Product | null;
  updatedAt: Date;
};
