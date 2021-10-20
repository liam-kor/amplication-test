import { Product as TProduct } from "../api/product/Product";

export const PRODUCT_TITLE_FIELD = "productName";

export const ProductTitle = (record: TProduct): string => {
  return record.productName || record.id;
};
