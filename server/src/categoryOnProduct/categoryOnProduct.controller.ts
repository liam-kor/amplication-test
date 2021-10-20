import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CategoryOnProductService } from "./categoryOnProduct.service";
import { CategoryOnProductControllerBase } from "./base/categoryOnProduct.controller.base";

@swagger.ApiTags("category-on-products")
@common.Controller("category-on-products")
export class CategoryOnProductController extends CategoryOnProductControllerBase {
  constructor(
    protected readonly service: CategoryOnProductService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
