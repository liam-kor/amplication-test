import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PRODUCTCATEGORY_TITLE_FIELD } from "./ProductCategoryTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const ProductCategoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="categoryName" source="categoryName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="CategoryOnProduct"
          target="ProductCategoryId"
          label="CategoryOnProducts"
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
            <ReferenceField
              label="product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
