import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProductCategoryWhereInput = {
  categoryName?: StringNullableFilter;
  id?: StringFilter;
};
