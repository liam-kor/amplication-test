import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ProductCategoryServiceBase } from "./base/productCategory.service.base";

@Injectable()
export class ProductCategoryService extends ProductCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
