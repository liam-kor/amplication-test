import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProductCategoryTitle } from "../productCategory/ProductCategoryTitle";
import { ProductTitle } from "../product/ProductTitle";

export const CategoryOnProductCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="productcategory.id"
          reference="ProductCategory"
          label="category"
        >
          <SelectInput optionText={ProductCategoryTitle} />
        </ReferenceInput>
        <ReferenceInput source="product.id" reference="Product" label="product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
