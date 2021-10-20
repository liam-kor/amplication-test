import { ArgsType, Field } from "@nestjs/graphql";
import { ProductCategoryWhereUniqueInput } from "./ProductCategoryWhereUniqueInput";
import { ProductCategoryUpdateInput } from "./ProductCategoryUpdateInput";

@ArgsType()
class UpdateProductCategoryArgs {
  @Field(() => ProductCategoryWhereUniqueInput, { nullable: false })
  where!: ProductCategoryWhereUniqueInput;
  @Field(() => ProductCategoryUpdateInput, { nullable: false })
  data!: ProductCategoryUpdateInput;
}

export { UpdateProductCategoryArgs };
