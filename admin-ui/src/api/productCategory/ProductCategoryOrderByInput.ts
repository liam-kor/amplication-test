import { SortOrder } from "../../util/SortOrder";

export type ProductCategoryOrderByInput = {
  categoryName?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
