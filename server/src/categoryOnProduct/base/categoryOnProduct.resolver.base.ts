import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateCategoryOnProductArgs } from "./CreateCategoryOnProductArgs";
import { UpdateCategoryOnProductArgs } from "./UpdateCategoryOnProductArgs";
import { DeleteCategoryOnProductArgs } from "./DeleteCategoryOnProductArgs";
import { CategoryOnProductFindManyArgs } from "./CategoryOnProductFindManyArgs";
import { CategoryOnProductFindUniqueArgs } from "./CategoryOnProductFindUniqueArgs";
import { CategoryOnProduct } from "./CategoryOnProduct";
import { ProductCategory } from "../../productCategory/base/ProductCategory";
import { Product } from "../../product/base/Product";
import { CategoryOnProductService } from "../categoryOnProduct.service";

@graphql.Resolver(() => CategoryOnProduct)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CategoryOnProductResolverBase {
  constructor(
    protected readonly service: CategoryOnProductService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CategoryOnProduct",
    action: "read",
    possession: "any",
  })
  async _categoryOnProductsMeta(
    @graphql.Args() args: CategoryOnProductFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [CategoryOnProduct])
  @nestAccessControl.UseRoles({
    resource: "CategoryOnProduct",
    action: "read",
    possession: "any",
  })
  async categoryOnProducts(
    @graphql.Args() args: CategoryOnProductFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<CategoryOnProduct[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "CategoryOnProduct",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => CategoryOnProduct, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CategoryOnProduct",
    action: "read",
    possession: "own",
  })
  async categoryOnProduct(
    @graphql.Args() args: CategoryOnProductFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<CategoryOnProduct | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "CategoryOnProduct",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => CategoryOnProduct)
  @nestAccessControl.UseRoles({
    resource: "CategoryOnProduct",
    action: "create",
    possession: "any",
  })
  async createCategoryOnProduct(
    @graphql.Args() args: CreateCategoryOnProductArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<CategoryOnProduct> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "CategoryOnProduct",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"CategoryOnProduct"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        category: args.data.category
          ? {
              connect: args.data.category,
            }
          : undefined,

        product: args.data.product
          ? {
              connect: args.data.product,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => CategoryOnProduct)
  @nestAccessControl.UseRoles({
    resource: "CategoryOnProduct",
    action: "update",
    possession: "any",
  })
  async updateCategoryOnProduct(
    @graphql.Args() args: UpdateCategoryOnProductArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<CategoryOnProduct | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "CategoryOnProduct",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"CategoryOnProduct"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          category: args.data.category
            ? {
                connect: args.data.category,
              }
            : undefined,

          product: args.data.product
            ? {
                connect: args.data.product,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => CategoryOnProduct)
  @nestAccessControl.UseRoles({
    resource: "CategoryOnProduct",
    action: "delete",
    possession: "any",
  })
  async deleteCategoryOnProduct(
    @graphql.Args() args: DeleteCategoryOnProductArgs
  ): Promise<CategoryOnProduct | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => ProductCategory, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CategoryOnProduct",
    action: "read",
    possession: "any",
  })
  async category(
    @graphql.Parent() parent: CategoryOnProduct,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ProductCategory | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "ProductCategory",
    });
    const result = await this.service.getCategory(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.ResolveField(() => Product, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CategoryOnProduct",
    action: "read",
    possession: "any",
  })
  async product(
    @graphql.Parent() parent: CategoryOnProduct,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Product | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Product",
    });
    const result = await this.service.getProduct(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
