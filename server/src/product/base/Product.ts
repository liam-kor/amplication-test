import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CategoryOnProduct } from "../../categoryOnProduct/base/CategoryOnProduct";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
@ObjectType()
class Product {
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
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  productName!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Product };
