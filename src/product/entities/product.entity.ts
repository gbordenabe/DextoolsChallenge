import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Product {
  @Prop({ required: true })
  SKU: string;

  @Prop({ required: false })
  code: number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: false })
  description: string;

  @Prop({ required: true })
  pictures: string[];

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  currency: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

ProductSchema.methods.toJSON = function () {
  const productObject = this.toObject();
  delete productObject.__v;
  return productObject;
};
