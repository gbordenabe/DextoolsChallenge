import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { ValidRoles } from 'src/auth/interfaces/valid-roles';
import { Auth } from 'src/auth/decorators/auth.decorator';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @Auth(ValidRoles.admin)
  findAll(
    @Query('name') name: string,
    @Query('description') category: string,
    @Query('priceMin') priceMin: string,
    @Query('priceMax') priceMax: string
  ) {
    const filters = {
      name,
      category,
      priceMin: parseFloat(priceMin),
      priceMax: parseFloat(priceMax),
    };
    return this.productService.findProducts(filters);
  }
}
