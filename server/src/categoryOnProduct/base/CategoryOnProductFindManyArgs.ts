import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CategoryOnProductWhereInput } from "./CategoryOnProductWhereInput";
import { Type } from "class-transformer";
import { CategoryOnProductOrderByInput } from "./CategoryOnProductOrderByInput";

@ArgsType()
class CategoryOnProductFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CategoryOnProductWhereInput,
  })
  @Field(() => CategoryOnProductWhereInput, { nullable: true })
  @Type(() => CategoryOnProductWhereInput)
  where?: CategoryOnProductWhereInput;

  @ApiProperty({
    required: false,
    type: CategoryOnProductOrderByInput,
  })
  @Field(() => CategoryOnProductOrderByInput, { nullable: true })
  @Type(() => CategoryOnProductOrderByInput)
  orderBy?: CategoryOnProductOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CategoryOnProductFindManyArgs };
