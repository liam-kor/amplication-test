import { Product } from "../product/Product";

export type ProductCategory = {
  categoryName: string | null;
  createdAt: Date;
  id: string;
  products?: Array<Product>;
  updatedAt: Date;
};
