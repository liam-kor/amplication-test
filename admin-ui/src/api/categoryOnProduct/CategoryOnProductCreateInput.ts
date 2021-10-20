import { ProductCategoryWhereUniqueInput } from "../productCategory/ProductCategoryWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CategoryOnProductCreateInput = {
  category?: ProductCategoryWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
};
