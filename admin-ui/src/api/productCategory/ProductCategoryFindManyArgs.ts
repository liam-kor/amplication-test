import { ProductCategoryWhereInput } from "./ProductCategoryWhereInput";
import { ProductCategoryOrderByInput } from "./ProductCategoryOrderByInput";

export type ProductCategoryFindManyArgs = {
  where?: ProductCategoryWhereInput;
  orderBy?: ProductCategoryOrderByInput;
  skip?: number;
  take?: number;
};
