import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested, IsDate } from "class-validator";
import { CategoryOnProduct } from "../../categoryOnProduct/base/CategoryOnProduct";
import { Type } from "class-transformer";
@ObjectType()
class ProductCategory {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  categoryName!: string | null;

  @ApiProperty({
    required: false,
    type: () => [CategoryOnProduct],
  })
  @ValidateNested()
  @Type(() => CategoryOnProduct)
  @IsOptional()
  categoryOnProducts?: Array<CategoryOnProduct>;

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
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { ProductCategory };
