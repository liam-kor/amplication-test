import { Module } from "@nestjs/common";
import { CategoryOnProductModuleBase } from "./base/categoryOnProduct.module.base";
import { CategoryOnProductService } from "./categoryOnProduct.service";
import { CategoryOnProductController } from "./categoryOnProduct.controller";
import { CategoryOnProductResolver } from "./categoryOnProduct.resolver";

@Module({
  imports: [CategoryOnProductModuleBase],
  controllers: [CategoryOnProductController],
  providers: [CategoryOnProductService, CategoryOnProductResolver],
  exports: [CategoryOnProductService],
})
export class CategoryOnProductModule {}
