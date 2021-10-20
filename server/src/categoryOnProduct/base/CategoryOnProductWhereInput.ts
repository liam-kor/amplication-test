import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProductCategoryWhereUniqueInput } from "../../productCategory/base/ProductCategoryWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../../product/base/ProductWhereUniqueInput";
@InputType()
class CategoryOnProductWhereInput {
  @ApiProperty({
    required: false,
    type: () => ProductCategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductCategoryWhereUniqueInput)
  @IsOptional()
  @Field(() => ProductCategoryWhereUniqueInput, {
    nullable: true,
  })
  category?: ProductCategoryWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => ProductWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductWhereUniqueInput)
  @IsOptional()
  @Field(() => ProductWhereUniqueInput, {
    nullable: true,
  })
  product?: ProductWhereUniqueInput;
}
export { CategoryOnProductWhereInput };
