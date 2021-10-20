import { ArgsType, Field } from "@nestjs/graphql";
import { CategoryOnProductWhereUniqueInput } from "./CategoryOnProductWhereUniqueInput";

@ArgsType()
class DeleteCategoryOnProductArgs {
  @Field(() => CategoryOnProductWhereUniqueInput, { nullable: false })
  where!: CategoryOnProductWhereUniqueInput;
}

export { DeleteCategoryOnProductArgs };
