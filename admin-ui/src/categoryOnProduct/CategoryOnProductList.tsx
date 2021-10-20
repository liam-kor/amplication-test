import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PRODUCTCATEGORY_TITLE_FIELD } from "../productCategory/ProductCategoryTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const CategoryOnProductList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CategoryOnProducts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="category"
          source="productcategory.id"
          reference="ProductCategory"
        >
          <TextField source={PRODUCTCATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="product" source="product.id" reference="Product">
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
