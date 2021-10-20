import { ProductCategory } from "../productCategory/ProductCategory";

export type Product = {
  categories?: Array<ProductCategory>;
  createdAt: Date;
  id: string;
  productName: string | null;
  updatedAt: Date;
};
