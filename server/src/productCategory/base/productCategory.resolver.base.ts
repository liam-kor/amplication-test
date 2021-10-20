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
import { CreateProductCategoryArgs } from "./CreateProductCategoryArgs";
import { UpdateProductCategoryArgs } from "./UpdateProductCategoryArgs";
import { DeleteProductCategoryArgs } from "./DeleteProductCategoryArgs";
import { ProductCategoryFindManyArgs } from "./ProductCategoryFindManyArgs";
import { ProductCategoryFindUniqueArgs } from "./ProductCategoryFindUniqueArgs";
import { ProductCategory } from "./ProductCategory";
import { ProductFindManyArgs } from "../../product/base/ProductFindManyArgs";
import { Product } from "../../product/base/Product";
import { ProductCategoryService } from "../productCategory.service";

@graphql.Resolver(() => ProductCategory)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ProductCategoryResolverBase {
  constructor(
    protected readonly service: ProductCategoryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ProductCategory",
    action: "read",
    possession: "any",
  })
  async _productCategoriesMeta(
    @graphql.Args() args: ProductCategoryFindManyArgs
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

  @graphql.Query(() => [ProductCategory])
  @nestAccessControl.UseRoles({
    resource: "ProductCategory",
    action: "read",
    possession: "any",
  })
  async productCategories(
    @graphql.Args() args: ProductCategoryFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ProductCategory[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "ProductCategory",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => ProductCategory, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ProductCategory",
    action: "read",
    possession: "own",
  })
  async productCategory(
    @graphql.Args() args: ProductCategoryFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ProductCategory | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "ProductCategory",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => ProductCategory)
  @nestAccessControl.UseRoles({
    resource: "ProductCategory",
    action: "create",
    possession: "any",
  })
  async createProductCategory(
    @graphql.Args() args: CreateProductCategoryArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ProductCategory> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "ProductCategory",
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
        `providing the properties: ${properties} on ${"ProductCategory"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ProductCategory)
  @nestAccessControl.UseRoles({
    resource: "ProductCategory",
    action: "update",
    possession: "any",
  })
  async updateProductCategory(
    @graphql.Args() args: UpdateProductCategoryArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ProductCategory | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "ProductCategory",
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
        `providing the properties: ${properties} on ${"ProductCategory"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => ProductCategory)
  @nestAccessControl.UseRoles({
    resource: "ProductCategory",
    action: "delete",
    possession: "any",
  })
  async deleteProductCategory(
    @graphql.Args() args: DeleteProductCategoryArgs
  ): Promise<ProductCategory | null> {
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

  @graphql.ResolveField(() => [Product])
  @nestAccessControl.UseRoles({
    resource: "ProductCategory",
    action: "read",
    possession: "any",
  })
  async products(
    @graphql.Parent() parent: ProductCategory,
    @graphql.Args() args: ProductFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Product[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Product",
    });
    const results = await this.service.findProducts(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }
}
