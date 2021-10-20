import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProductCategoryWhereUniqueInput } from "../../productCategory/base/ProductCategoryWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { ProductWhereUniqueInput } from "../../product/base/ProductWhereUniqueInput";
@InputType()
class CategoryOnProductCreateInput {
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
  category?: ProductCategoryWhereUniqueInput | null;

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
  product?: ProductWhereUniqueInput | null;
}
export { CategoryOnProductCreateInput };
