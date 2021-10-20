import { ProductCategory as TProductCategory } from "../api/productCategory/ProductCategory";

export const PRODUCTCATEGORY_TITLE_FIELD = "categoryName";

export const ProductCategoryTitle = (record: TProductCategory): string => {
  return record.categoryName || record.id;
};
