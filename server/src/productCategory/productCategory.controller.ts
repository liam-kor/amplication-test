import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProductCategoryService } from "./productCategory.service";
import { ProductCategoryControllerBase } from "./base/productCategory.controller.base";

@swagger.ApiTags("product-categories")
@common.Controller("product-categories")
export class ProductCategoryController extends ProductCategoryControllerBase {
  constructor(
    protected readonly service: ProductCategoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
