import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PRODUCT } from 'src/common/models';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(@InjectModel(PRODUCT.name) private userModel: Model<Product>) {}

  async findAll() {
    try {
      const products = await this.userModel.find();
      return products;
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status ? error.status : HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  findOne(filter: string) {
    return `This action returns a #${filter} product`;
  }
}
