import { CategoryOnProduct } from "../categoryOnProduct/CategoryOnProduct";

export type Product = {
  categoryOnProducts?: Array<CategoryOnProduct>;
  createdAt: Date;
  id: string;
  productName: string | null;
  updatedAt: Date;
};
