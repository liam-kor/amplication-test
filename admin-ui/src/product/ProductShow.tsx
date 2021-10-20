import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PRODUCTCATEGORY_TITLE_FIELD } from "../productCategory/ProductCategoryTitle";
import { PRODUCT_TITLE_FIELD } from "./ProductTitle";

export const ProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="productName" source="productName" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="CategoryOnProduct"
          target="ProductId"
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
