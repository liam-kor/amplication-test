import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ProductCategoryResolverBase } from "./base/productCategory.resolver.base";
import { ProductCategory } from "./base/ProductCategory";
import { ProductCategoryService } from "./productCategory.service";

@graphql.Resolver(() => ProductCategory)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ProductCategoryResolver extends ProductCategoryResolverBase {
  constructor(
    protected readonly service: ProductCategoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
