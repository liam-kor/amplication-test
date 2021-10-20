import { PrismaService } from "nestjs-prisma";
import { Prisma, ProductCategory, CategoryOnProduct } from "@prisma/client";

export class ProductCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ProductCategoryFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductCategoryFindManyArgs>
  ): Promise<number> {
    return this.prisma.productCategory.count(args);
  }

  async findMany<T extends Prisma.ProductCategoryFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductCategoryFindManyArgs>
  ): Promise<ProductCategory[]> {
    return this.prisma.productCategory.findMany(args);
  }
  async findOne<T extends Prisma.ProductCategoryFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductCategoryFindUniqueArgs>
  ): Promise<ProductCategory | null> {
    return this.prisma.productCategory.findUnique(args);
  }
  async create<T extends Prisma.ProductCategoryCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductCategoryCreateArgs>
  ): Promise<ProductCategory> {
    return this.prisma.productCategory.create<T>(args);
  }
  async update<T extends Prisma.ProductCategoryUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductCategoryUpdateArgs>
  ): Promise<ProductCategory> {
    return this.prisma.productCategory.update<T>(args);
  }
  async delete<T extends Prisma.ProductCategoryDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductCategoryDeleteArgs>
  ): Promise<ProductCategory> {
    return this.prisma.productCategory.delete(args);
  }

  async findCategoryOnProducts(
    parentId: string,
    args: Prisma.CategoryOnProductFindManyArgs
  ): Promise<CategoryOnProduct[]> {
    return this.prisma.productCategory
      .findUnique({
        where: { id: parentId },
      })
      .categoryOnProducts(args);
  }
}
