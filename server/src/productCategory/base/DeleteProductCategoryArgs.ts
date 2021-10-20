import { ArgsType, Field } from "@nestjs/graphql";
import { ProductCategoryWhereUniqueInput } from "./ProductCategoryWhereUniqueInput";

@ArgsType()
class DeleteProductCategoryArgs {
  @Field(() => ProductCategoryWhereUniqueInput, { nullable: false })
  where!: ProductCategoryWhereUniqueInput;
}

export { DeleteProductCategoryArgs };
