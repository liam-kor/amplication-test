import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProductCategoryTitle } from "../productCategory/ProductCategoryTitle";
import { ProductTitle } from "../product/ProductTitle";

export const CategoryOnProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
