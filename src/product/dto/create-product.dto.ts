import {
  ArrayMinSize,
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Validate,
} from 'class-validator';
import { IsImageExtension } from '../validators/isImageExtension.validator';

export class CreateProductDto {
  @IsString()
  SKU: string;

  @IsOptional()
  @IsNumber()
  code: number;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsArray()
  @IsUrl({}, { each: true, message: 'Each element must to be an URL' })
  @ArrayMinSize(1)
  @Validate(IsImageExtension, {
    message: 'Each element must be an image',
  })
  pictures: string[];

  @IsNumber()
  price: number;

  @IsString()
  currency: string;
}
