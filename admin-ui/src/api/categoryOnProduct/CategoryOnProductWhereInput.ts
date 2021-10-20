import { ProductCategoryWhereUniqueInput } from "../productCategory/ProductCategoryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CategoryOnProductWhereInput = {
  category?: ProductCategoryWhereUniqueInput;
  id?: StringFilter;
  product?: ProductWhereUniqueInput;
};
