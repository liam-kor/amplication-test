import { ArgsType, Field } from "@nestjs/graphql";
import { CategoryOnProductCreateInput } from "./CategoryOnProductCreateInput";

@ArgsType()
class CreateCategoryOnProductArgs {
  @Field(() => CategoryOnProductCreateInput, { nullable: false })
  data!: CategoryOnProductCreateInput;
}

export { CreateCategoryOnProductArgs };
