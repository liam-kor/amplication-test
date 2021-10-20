import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { CategoryOnProductService } from "../categoryOnProduct.service";
import { CategoryOnProductCreateInput } from "./CategoryOnProductCreateInput";
import { CategoryOnProductWhereInput } from "./CategoryOnProductWhereInput";
import { CategoryOnProductWhereUniqueInput } from "./CategoryOnProductWhereUniqueInput";
import { CategoryOnProductFindManyArgs } from "./CategoryOnProductFindManyArgs";
import { CategoryOnProductUpdateInput } from "./CategoryOnProductUpdateInput";
import { CategoryOnProduct } from "./CategoryOnProduct";
import { Post } from "../../post/base/Post";
@swagger.ApiBearerAuth()
export class CategoryOnProductControllerBase {
  constructor(
    protected readonly service: CategoryOnProductService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "CategoryOnProduct",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: CategoryOnProduct })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: CategoryOnProductCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<CategoryOnProduct> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "CategoryOnProduct",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"CategoryOnProduct"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        category: data.category
          ? {
              connect: data.category,
            }
          : undefined,

        product: data.product
          ? {
              connect: data.product,
            }
          : undefined,
      },
      select: {
        category: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        product: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "CategoryOnProduct",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [CategoryOnProduct] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => CategoryOnProductFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<CategoryOnProduct[]> {
    const args = plainToClass(CategoryOnProductFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "CategoryOnProduct",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        category: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        product: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "CategoryOnProduct",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: CategoryOnProduct })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: CategoryOnProductWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<CategoryOnProduct | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "CategoryOnProduct",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        category: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        product: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return permission.filter(result);
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "CategoryOnProduct",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: CategoryOnProduct })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: CategoryOnProductWhereUniqueInput,
    @common.Body()
    data: CategoryOnProductUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<CategoryOnProduct | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "CategoryOnProduct",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"CategoryOnProduct"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          category: data.category
            ? {
                connect: data.category,
              }
            : undefined,

          product: data.product
            ? {
                connect: data.product,
              }
            : undefined,
        },
        select: {
          category: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,

          product: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "CategoryOnProduct",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: CategoryOnProduct })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: CategoryOnProductWhereUniqueInput
  ): Promise<CategoryOnProduct | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          category: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,

          product: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
