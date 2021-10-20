import { ArgsType, Field } from "@nestjs/graphql";
import { ProductCategoryCreateInput } from "./ProductCategoryCreateInput";

@ArgsType()
class CreateProductCategoryArgs {
  @Field(() => ProductCategoryCreateInput, { nullable: false })
  data!: ProductCategoryCreateInput;
}

export { CreateProductCategoryArgs };
