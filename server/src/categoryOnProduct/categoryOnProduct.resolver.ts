import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CategoryOnProductResolverBase } from "./base/categoryOnProduct.resolver.base";
import { CategoryOnProduct } from "./base/CategoryOnProduct";
import { CategoryOnProductService } from "./categoryOnProduct.service";

@graphql.Resolver(() => CategoryOnProduct)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CategoryOnProductResolver extends CategoryOnProductResolverBase {
  constructor(
    protected readonly service: CategoryOnProductService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
