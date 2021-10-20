import { ArgsType, Field } from "@nestjs/graphql";
import { CategoryOnProductWhereUniqueInput } from "./CategoryOnProductWhereUniqueInput";
import { CategoryOnProductUpdateInput } from "./CategoryOnProductUpdateInput";

@ArgsType()
class UpdateCategoryOnProductArgs {
  @Field(() => CategoryOnProductWhereUniqueInput, { nullable: false })
  where!: CategoryOnProductWhereUniqueInput;
  @Field(() => CategoryOnProductUpdateInput, { nullable: false })
  data!: CategoryOnProductUpdateInput;
}

export { UpdateCategoryOnProductArgs };
