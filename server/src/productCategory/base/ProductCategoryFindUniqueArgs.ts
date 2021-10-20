import { ArgsType, Field } from "@nestjs/graphql";
import { ProductCategoryWhereUniqueInput } from "./ProductCategoryWhereUniqueInput";

@ArgsType()
class ProductCategoryFindUniqueArgs {
  @Field(() => ProductCategoryWhereUniqueInput, { nullable: false })
  where!: ProductCategoryWhereUniqueInput;
}

export { ProductCategoryFindUniqueArgs };
