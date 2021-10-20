import { CategoryOnProduct as TCategoryOnProduct } from "../api/categoryOnProduct/CategoryOnProduct";

export const CATEGORYONPRODUCT_TITLE_FIELD = "id";

export const CategoryOnProductTitle = (record: TCategoryOnProduct): string => {
  return record.id || record.id;
};
