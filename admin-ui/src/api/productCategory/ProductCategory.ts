import { CategoryOnProduct } from "../categoryOnProduct/CategoryOnProduct";

export type ProductCategory = {
  categoryName: string | null;
  categoryOnProducts?: Array<CategoryOnProduct>;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
