import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProductCategoryWhereInput } from "./ProductCategoryWhereInput";
import { Type } from "class-transformer";
import { ProductCategoryOrderByInput } from "./ProductCategoryOrderByInput";

@ArgsType()
class ProductCategoryFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ProductCategoryWhereInput,
  })
  @Field(() => ProductCategoryWhereInput, { nullable: true })
  @Type(() => ProductCategoryWhereInput)
  where?: ProductCategoryWhereInput;

  @ApiProperty({
    required: false,
    type: ProductCategoryOrderByInput,
  })
  @Field(() => ProductCategoryOrderByInput, { nullable: true })
  @Type(() => ProductCategoryOrderByInput)
  orderBy?: ProductCategoryOrderByInput;

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

export { ProductCategoryFindManyArgs };
