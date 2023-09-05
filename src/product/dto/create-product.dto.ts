import { ArrayMinSize, IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

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
  @IsString({ each: true })
  @ArrayMinSize(1)
  pictures: string[];

  @IsNumber()
  price: number;

  @IsString()
  currency: string;
}
