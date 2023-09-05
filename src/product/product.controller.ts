import { Body, Controller, Get, HttpCode, HttpStatus, Post, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { ValidRoles } from 'src/auth/interfaces/valid-roles';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @HttpCode(HttpStatus.OK)
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
    return this.productService.findAll(filters);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  @Auth(ValidRoles.admin)
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }
}
