import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  productName?: SortOrder;
  updatedAt?: SortOrder;
};
