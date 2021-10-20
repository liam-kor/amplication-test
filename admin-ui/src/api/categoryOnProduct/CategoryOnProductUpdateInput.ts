import { ProductCategoryWhereUniqueInput } from "../productCategory/ProductCategoryWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CategoryOnProductUpdateInput = {
  category?: ProductCategoryWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
};
