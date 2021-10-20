import { ArgsType, Field } from "@nestjs/graphql";
import { CategoryOnProductWhereUniqueInput } from "./CategoryOnProductWhereUniqueInput";

@ArgsType()
class CategoryOnProductFindUniqueArgs {
  @Field(() => CategoryOnProductWhereUniqueInput, { nullable: false })
  where!: CategoryOnProductWhereUniqueInput;
}

export { CategoryOnProductFindUniqueArgs };
