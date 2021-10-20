import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CategoryOnProductServiceBase } from "./base/categoryOnProduct.service.base";

@Injectable()
export class CategoryOnProductService extends CategoryOnProductServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
