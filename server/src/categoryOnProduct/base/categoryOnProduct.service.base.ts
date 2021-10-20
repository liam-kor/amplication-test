import { PrismaService } from "nestjs-prisma";
import {
  Prisma,
  CategoryOnProduct,
  ProductCategory,
  Product,
} from "@prisma/client";

export class CategoryOnProductServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CategoryOnProductFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryOnProductFindManyArgs>
  ): Promise<number> {
    return this.prisma.categoryOnProduct.count(args);
  }

  async findMany<T extends Prisma.CategoryOnProductFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryOnProductFindManyArgs>
  ): Promise<CategoryOnProduct[]> {
    return this.prisma.categoryOnProduct.findMany(args);
  }
  async findOne<T extends Prisma.CategoryOnProductFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryOnProductFindUniqueArgs>
  ): Promise<CategoryOnProduct | null> {
    return this.prisma.categoryOnProduct.findUnique(args);
  }
  async create<T extends Prisma.CategoryOnProductCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryOnProductCreateArgs>
  ): Promise<CategoryOnProduct> {
    return this.prisma.categoryOnProduct.create<T>(args);
  }
  async update<T extends Prisma.CategoryOnProductUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryOnProductUpdateArgs>
  ): Promise<CategoryOnProduct> {
    return this.prisma.categoryOnProduct.update<T>(args);
  }
  async delete<T extends Prisma.CategoryOnProductDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryOnProductDeleteArgs>
  ): Promise<CategoryOnProduct> {
    return this.prisma.categoryOnProduct.delete(args);
  }

  async getCategory(parentId: string): Promise<ProductCategory | null> {
    return this.prisma.categoryOnProduct
      .findUnique({
        where: { id: parentId },
      })
      .category();
  }

  async getProduct(parentId: string): Promise<Product | null> {
    return this.prisma.categoryOnProduct
      .findUnique({
        where: { id: parentId },
      })
      .product();
  }
}
