import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { ValidRoles } from 'src/auth/interfaces/valid-roles';
import { Auth } from 'src/auth/decorators/auth.decorator';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @Auth(ValidRoles.admin)
  findAll() {
    return this.productService.findAll();
  }

  @Get(':filter')
  @Auth(ValidRoles.admin)
  findOne(@Param('filter') filter: string) {
    return this.productService.findOne(filter);
  }
}
