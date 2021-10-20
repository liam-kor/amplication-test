import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProductCategory } from "../../productCategory/base/ProductCategory";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Product } from "../../product/base/Product";
@ObjectType()
class CategoryOnProduct {
  @ApiProperty({
    required: false,
    type: () => ProductCategory,
  })
  @ValidateNested()
  @Type(() => ProductCategory)
  @IsOptional()
  category?: ProductCategory | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => Product,
  })
  @ValidateNested()
  @Type(() => Product)
  @IsOptional()
  product?: Product | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { CategoryOnProduct };
