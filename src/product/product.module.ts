import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PRODUCT } from 'src/common/models';
import { ProductSchema } from './entities/product.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: PRODUCT.name, schema: ProductSchema }]), AuthModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
