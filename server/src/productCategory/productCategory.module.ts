import { Module } from "@nestjs/common";
import { ProductCategoryModuleBase } from "./base/productCategory.module.base";
import { ProductCategoryService } from "./productCategory.service";
import { ProductCategoryController } from "./productCategory.controller";
import { ProductCategoryResolver } from "./productCategory.resolver";

@Module({
  imports: [ProductCategoryModuleBase],
  controllers: [ProductCategoryController],
  providers: [ProductCategoryService, ProductCategoryResolver],
  exports: [ProductCategoryService],
})
export class ProductCategoryModule {}
