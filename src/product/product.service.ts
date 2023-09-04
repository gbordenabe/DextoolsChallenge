import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PRODUCT } from 'src/common/models';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(@InjectModel(PRODUCT.name) private productModel: Model<Product>) {}

  async findProducts(filters: any) {
    try {
      let query = this.productModel.find();

      // Aplica los filtros condicionales si se proporcionan.
      if (filters.name) {
        query = query.where('name').regex(new RegExp(filters.name, 'i'));
      }

      if (filters.category) {
        query = query.where('category').regex(new RegExp(filters.category, 'i'));
      }

      if (!isNaN(filters.priceMin)) {
        query = query.where('price').gte(filters.priceMin);
      }

      if (!isNaN(filters.priceMax)) {
        query = query.where('price').lte(filters.priceMax);
      }

      // Ejecuta la consulta y devuelve los resultados.
      const products = await query.exec();
      return products;
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status ? error.status : HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
